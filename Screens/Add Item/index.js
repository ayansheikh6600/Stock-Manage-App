import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const AddItemScreen = () => {
  const tempArry = ["Ayan", "Fiaz"];

  const [value, setValue] = useState(false)

  console.log(value);

  useEffect(()=>{




  }, [value])

  const ActiveCateStyle = {
    backgroundColor: "red",
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
    borderColor: "red",
    marginRight: 10,
    fontWeight: "600",
    color: "red",
    height: 40,
    width: 120,
    textAlign: "center",
    paddingVertical: 9,
    borderRadius: 120,
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <View
          style={{ flex: 1, backgroundColor: "blue", flexDirection: "row" }}
        >
          <View style={{ flex: 1, justifyContent: "center", paddingLeft: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text style={{ fontSize: 32 }}>{"<"}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, justifyContent: "center", paddingLeft: 10 }}>
            <Text
              style={{ fontSize: 19, fontWeight: "700", fontStyle: "italic" }}
            >
              Osama's Shop
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
              paddingHorizontal: 3,
            }}
          >
            {/* <TouchableOpacity
              style={{ backgroundColor: "red", padding: 10, borderRadius: 10 }}
            >
              <Text>Add Items</Text>
            </TouchableOpacity> */}
          </View>
        </View>
        <View style={{ flex: 12, backgroundColor: "yellow" }}>
          <View style={{ flex: 1.5, padding: 4, gap: 10 }}>
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Select Item Category
            </Text>
            <ScrollView horizontal contentContainerStyle={{ width: "100%" }}>

              {value ? tempArry.map((e)=>{
                if(value == e){
                  return(
                    <Text style={ActiveCateStyle} onPress={()=>setValue(e)}>{e}</Text>
                  )
                }else{
                  return(
                    <Text style={NonActiveStyle} onPress={()=>setValue(e)}>{e}</Text>
                  )
                }
                
              }) : tempArry.map((e)=>{
                return(
                  <Text style={NonActiveStyle} onPress={()=>setValue(e)}>{e}</Text>
                )
              })}
              {/* <Text
                style={NonActiveStyle}
              >
                Ayan
              </Text>
              <Text
                style={NonActiveStyle}
              >
                Faiz
              </Text> */}
              {/* <Text style={{backgroundColor: "red" , marginRight:10, height:40, width:120, textAlign:"center", paddingVertical:9, borderRadius:120}}>Ayan</Text>
            <Text style={{backgroundColor: "red" , marginRight:10, height:40, width:120, textAlign:"center", paddingVertical:9, borderRadius:120}}>Ayan</Text>
            <Text style={{backgroundColor: "red" , marginRight:10, height:40, width:120, textAlign:"center", paddingVertical:9, borderRadius:120}}>Ayan</Text>
            <Text style={{backgroundColor: "red" , marginRight:10, height:40, width:120, textAlign:"center", paddingVertical:9, borderRadius:120}}>Ayan</Text>
            <Text style={{backgroundColor: "red" , marginRight:10, height:40, width:120, textAlign:"center", paddingVertical:9, borderRadius:120}}>Ayan</Text>
            <Text style={{backgroundColor: "red" , marginRight:10, height:40, width:120, textAlign:"center", paddingVertical:9, borderRadius:120}}>Ayan</Text>
            <Text style={{backgroundColor: "red" , marginRight:10, height:40, width:120, textAlign:"center", paddingVertical:9, borderRadius:120}}>Ayan</Text>
             */}
            </ScrollView>
          </View>
          <View style={{ flex: 10 }}>
            <View style={{ flex: 1, padding: 5, gap: 10 }}>
              <TextInput
                style={{
                  borderColor: "red",
                  borderWidth: 2,
                  padding: 6,
                  fontSize: 14,
                  borderRadius: 10,
                }}
                placeholder={`Enter ${value?value:""} Item Name`}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: "red",
                  padding: 10,
                  borderRadius: 12,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  ADD
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddItemScreen;
