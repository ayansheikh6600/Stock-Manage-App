import { View, Text, SectionList, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import AppConfig from "../../Utils";
import { ItemHandler } from "../../Store/Slices/ItemSlice";

const Home = () => {
  const navigate = useNavigation();
  const [value, setValue] = useState(null);
  const { Items } = useSelector((state) => state.ItemSlice);
  const [OverAll, SetOverAll] = useState(0);

  const dispatch = useDispatch()

  useEffect(() => {
    let tempValue = 0;
    Items.forEach((section) => {
      section.items.forEach((item) => {
        tempValue += item.Qauntity;
      });
    });
    SetOverAll(tempValue);
  }, [Items]);

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
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar backgroundColor={AppConfig.HeaderColor} />
      <View style={{ backgroundColor: AppConfig.HeaderColor, flexDirection: "row", padding: 10 }}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ fontSize: 19, fontWeight: "700", fontStyle: "italic", color: "white" }}>
            {AppConfig.AppName}
          </Text>
        </View>
        <TouchableOpacity
          style={{ backgroundColor: AppConfig.AddButton, padding: 10, borderRadius: 10 }}
          onPress={() => navigate.navigate("ItemScreen")}
        >
          <Text style={{ color: AppConfig.HeaderColor, fontWeight: "800" }}>Add Items</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <View>

          <Text style={{ fontWeight: "600", color: AppConfig.HeaderColor, marginVertical: 10 }}>
            OverAll Cartons: {OverAll}
          </Text>

          <FlatList
            data={Items}
            horizontal
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ alignItems: "center" }}
            renderItem={({ item }) => (
              <Text
                style={value === item.name ? ActiveCateStyle : NonActiveStyle}
                onPress={() => setValue(item.name === value ? null : item.name)}
              >
                {item.name}
              </Text>
            )}
          />
        </View>

        <View style={{ flex: 8 }}>
          <SectionList
            sections={
              value
                ? Items.filter((section) => section.name === value).map((section) => ({
                  title: section.name,
                  data: section.items,
                }))
                : Items.map((section) => ({
                  title: section.name,
                  data: section.items,
                  
                }))
            }
            keyExtractor={(item, index) => item.name + index}
            renderSectionHeader={({ section: { title } }) =>
              (!value || value === title) && (
                <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>{title}</Text>
              )
            }
            renderItem={({ item , section}) => (
              <View
                style={{
                  backgroundColor: AppConfig.HeaderColor,
                  flexDirection: "row",
                  marginVertical: 5,
                  height: 70,
                  padding: 10,
                  borderRadius: 10,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>{item.name}</Text>
                <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                  <Text onPress={() =>
                    dispatch(
                      ItemHandler([section.title, item.name, 1, null]) // Decrease quantity
                    )
                    // console.log(section.title)
                  } style={{ fontSize: 18 }}>+</Text>
                  <Text>{item.quantity}</Text>
                  <Text onPress={() =>
                    dispatch(
                      ItemHandler([section.title, item.name, -1, null]) // Decrease quantity
                    )
                  } style={{ fontSize: 18 }}>--</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
