import { View, Text, ScrollView, TouchableOpacity, } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AppConfig from "../../Utils";

const Home = () => {
  const navigate = useNavigation()
  const [value, setValue] = useState(false);
  const { Items } = useSelector((state) => state.ItemSlice);
  const tempArry = Items;
  const [AllCarton, SetAllCarton] = useState(0)
  const [OverAll, SetOverAll]= useState(0)
  // SetAllCarton(OverAll)

  // console.log(OverAll);

  useEffect(() => {

    (()=>{
      var temValue = 0
      Items.map((e)=>{
        e.items.map((i)=>{
          // console.log(i.Qauntity);
          temValue += i.Qauntity 
        })
      })
      SetOverAll(temValue)
    })()

  }, [value]);

  const ActiveCateStyle = {
    backgroundColor: AppConfig.HeaderColor,
    marginRight: 10,
    height: 40,
    width: 120,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    paddingVertical: 9,
    borderRadius: 120,
  };

  const NonActiveStyle = {
    borderWidth: 2,
    borderColor: AppConfig.HeaderColor,
    marginRight: 10,
    fontWeight: "600",
    color: AppConfig.HeaderColor,
    height: 40,
    width: 120,
    textAlign: "center",
    paddingVertical: 9,
    borderRadius: 120,
  };




  return (
    <SafeAreaView style={{flex:1}}>
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar backgroundColor={AppConfig.HeaderColor}/>
      <View style={{ flex: 1, backgroundColor: AppConfig.HeaderColor, flexDirection:"row" }}>
        <View style={{flex:1, justifyContent:"center", paddingLeft:10}}>
          <Text style={{fontSize:19, fontWeight:"700", fontStyle:"italic", color:"white"}}>{AppConfig.AppName}</Text>
        </View >
        <View style={{flex:1,justifyContent:"center", alignItems:"flex-end", paddingHorizontal:3}}>
          <TouchableOpacity style={{backgroundColor:AppConfig.AddButton, padding:10, borderRadius:10}} onPress={()=>navigate.navigate("ItemScreen")}>
            <Text style={{color:AppConfig.HeaderColor, fontWeight:"800"}}>Add Items</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 12,  }}>
        <View style={{ flex: 1, padding: 4 }}>
          <Text style={{fontWeight:"600", color:AppConfig.HeaderColor}}>OverAll Cartons : {OverAll}</Text>
          <ScrollView horizontal contentContainerStyle={{ alignItems:"center"}}>
          {value
                ? tempArry.map((e) => {
                    if (value == e.name) {
                      return (
                        <Text
                          style={ActiveCateStyle}
                          onPress={() => setValue(e.name)}
                        >
                          {e.name}
                        </Text>
                      );
                    } else {
                      return (
                        <Text
                          style={NonActiveStyle}
                          onPress={() => setValue(e.name)}
                        >
                          {e.name}
                        </Text>
                      );
                    }
                  })
                : tempArry.map((e) => {
                    return (
                      <Text
                        style={NonActiveStyle}
                        onPress={() => setValue(e.name)}
                      >
                        {e.name}
                      </Text>
                    );
                  })}
          </ScrollView>
        </View>
        <View style={{ flex: 10 }}>
          <ScrollView contentContainerStyle={{ width: "100%", padding: 8 }}>
          {value
                  ? tempArry.map((e) => {
                      if (value == e.name) {
                      return  e.items.map((i) => {
                          // console.log(i, "ayaaa");
                          return (
                            <View
                              style={{
                                backgroundColor: AppConfig.HeaderColor,
                                flexDirection: "row",
                                marginTop: 10,
                                height: 70,
                                width: "100%",
                                textAlign: "center",
                                paddingVertical: 9,
                                borderRadius: 10,
                                justifyContent: "space-between",
                                paddingHorizontal: 10,
                                alignItems: "center",
                              }}
                            >
                              <View>
                                <Text>{i.name}</Text>
                              </View>
                              <View>
                                <Text>+</Text>
                                <Text>0</Text>
                                <Text>--</Text>
                              </View>
                            </View>
                          );
                        });
                      }
                    })
                  : tempArry.map((e) => {
                    
                    return  e.items.map((i) => {
                        // console.log(i, "ayaaa");
                        // SetOverAll((prevCount) => prevCount + i.Qauntity);
                        // console.log(OverAll);
                        return (
                          <View
                            style={{
                              backgroundColor: AppConfig.HeaderColor,
                              flexDirection: "row",
                              marginTop: 10,
                              height: 70,
                              width: "100%",
                              textAlign: "center",
                              paddingVertical: 9,
                              borderRadius: 10,
                              justifyContent: "space-between",
                              paddingHorizontal: 10,
                              alignItems: "center",
                            }}
                          >
                            <View>
                              <Text style={{color:"white", fontWeight:"bold"}}>{i.name}</Text>
                            </View>
                            <View>
                              <Text>+</Text>
                              <Text>0</Text>
                              <Text>--</Text>
                            </View>
                          </View>
                        );
                      });
                    
                  })
                  
                  }
                  
          </ScrollView>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default Home;
