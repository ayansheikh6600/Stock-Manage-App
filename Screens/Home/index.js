import { View, Text, ScrollView, TouchableOpacity, } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigate = useNavigation()
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <StatusBar backgroundColor="red"/>
      <View style={{ flex: 1, backgroundColor: "blue", flexDirection:"row" }}>
        <View style={{flex:1, justifyContent:"center", paddingLeft:10}}>
          <Text style={{fontSize:19, fontWeight:"700", fontStyle:"italic",}}>Osama's Shop</Text>
        </View >
        <View style={{flex:1,justifyContent:"center", alignItems:"flex-end", paddingHorizontal:3}}>
          <TouchableOpacity style={{backgroundColor:"red", padding:10, borderRadius:10}} onPress={()=>navigate.navigate("ItemScreen")}>
            <Text>Add Items</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 12, backgroundColor: "yellow" }}>
        <View style={{ flex: 1, padding: 4 }}>
          <ScrollView horizontal contentContainerStyle={{ width: "100%" }}>
            <Text
              style={{
                backgroundColor: "red",
                marginRight: 10,
                height: 40,
                width: 120,
                textAlign: "center",
                paddingVertical: 9,
                borderRadius: 120,
              }}
            >
              Ayan
            </Text>
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
          <ScrollView contentContainerStyle={{ width: "100%", padding: 8 }}>
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
                justifyContent:"space-between",
                paddingHorizontal:10,
                alignItems:"center"
              }}
            >
              <View>
                <Text>Item Name</Text>
              </View>
              <View>
                <Text>+</Text>
                <Text>0</Text>
                <Text>--</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default Home;
