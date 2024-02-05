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
import { useDispatch, useSelector } from "react-redux";
import { ItemHandler } from "../../Store/Slices/ItemSlice";

const AddItemScreen = () => {
  const { Items } = useSelector((state) => state.ItemSlice);
  const dispatch = useDispatch("");

  // dispatch(ItemHandler("AAA"))

  console.log(Items);
  const tempArry = Items;

  const [value, setValue] = useState(false);

  console.log(value);

  useEffect(() => {}, [value]);

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
          <View style={{ flex: 2, padding: 4, gap: 10 }}>
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Select Item Category
            </Text>
            <ScrollView horizontal contentContainerStyle={{alignItems:"center"}}>
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
          <View style={{ flex: 3, justifyContent: "center" }}>
            <View
              style={{ flex: 1, padding: 5, gap: 10, justifyContent: "center" }}
            >
              <TextInput
                style={{
                  borderColor: "red",
                  borderWidth: 2,
                  padding: 6,
                  fontSize: 14,
                  borderRadius: 10,
                }}
                placeholder={`Enter ${
                  value ? value + " Item" : "Category"
                } Name`}
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
          <View style={{ flex: 10, backgroundColor: "blue" }}>
            <View style={{ flex: 1 }}>
              <ScrollView contentContainerStyle={{ width: "100%", padding: 8 }}>
                {value
                  ? tempArry.map((e) => {
                      if (value == e.name) {
                      return  e.items.map((i) => {
                          console.log(i, "ayaaa");
                          return (
                            <View
                              style={{
                                backgroundColor: "red",
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
                  : ""}
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddItemScreen;
