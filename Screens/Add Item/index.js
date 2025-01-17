import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { ItemHandler } from "../../Store/Slices/ItemSlice";
import AppConfig from "../../Utils";

const AddItemScreen = () => {
  const { Items } = useSelector((state) => state.ItemSlice);
  const dispatch = useDispatch();
  const [itemInputValue, SetItemInputValue] = useState("");
  const [value, setValue] = useState(""); // Category selected
  const navigation = useNavigation();

  const handleAddItem = () => {
    if (value) {
      // If category is selected, add item to the selected category
      dispatch(
        ItemHandler([value, itemInputValue, 1, value]) // Add item to existing category
      );
    } else if (itemInputValue) {
      // If no category is selected, create a new category with the input name
      dispatch(
        ItemHandler([null, null, 0, itemInputValue]) // Create new category only
      );
    }
  
    SetItemInputValue(""); // Clear input after adding
  };
  

  const renderCategoryItem = ({ item }) => (
    <Text
      style={value === item.name ? ActiveCateStyle : NonActiveStyle}
      onPress={() => setValue(item.name)}
    >
      {item.name}
    </Text>
  );

  const renderItems = ({ item }) => (
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
      <Text>{item.name}</Text>
      <View>
        <Text>+</Text>
        <Text>{item.quantity}</Text>
        <Text>--</Text>
      </View>
    </View>
  );

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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: AppConfig.HeaderColor,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1, justifyContent: "center", paddingLeft: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text style={{ fontSize: 32, fontWeight: "bold", color: "white" }}>
                {"<"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, justifyContent: "center", paddingLeft: 10 }}>
            <Text style={{ fontSize: 19, fontWeight: "700", color: "white" }}>
              {AppConfig.AppName}
            </Text>
          </View>
        </View>

        <View style={{ flex: 12, backgroundColor: "white" }}>
          <View style={{ flex: 2, padding: 4 }}>
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Select Item Category
            </Text>
            <FlatList
              horizontal
              data={Items}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.name}
              contentContainerStyle={{ alignItems: "center" }}
            />
          </View>

          <View style={{ flex: 3, padding: 5, gap: 10 }}>
            <TextInput
              style={{
                borderColor: AppConfig.HeaderColor,
                borderWidth: 2,
                padding: 6,
                fontSize: 14,
                borderRadius: 10,
              }}
              placeholder={`Enter ${value ? value + " Item" : "Category"} Name`}
              onChangeText={(e) => SetItemInputValue(e)}
              value={itemInputValue}
            />
            <TouchableOpacity
              style={{
                backgroundColor: AppConfig.HeaderColor,
                padding: 10,
                borderRadius: 12,
              }}
              onPress={handleAddItem}
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

          <View style={{ flex: 10 }}>
            <FlatList
              data={Items.find((cat) => cat.name === value)?.items || []}
              renderItem={renderItems}
              keyExtractor={(item) => item.name}
              contentContainerStyle={{ width: "100%", padding: 8 }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddItemScreen;
