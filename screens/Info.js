import { View, Text, Image } from "react-native";
import React from "react";

export default function ProductInfo({ route }) {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ backgroundColor: "#F3BD30", width: "100%" }}>
        <Text
          style={{
            alignSelf: "center",
            margin: 20,
            fontWeight: "700",
            fontSize: 20,
          }}
        >
          React Products
        </Text>
      </View>

      <Image
        source={{ uri: route.params.image }}
        style={{ width: 200, height: 200, alignSelf: "center", margin: 20 }}
      ></Image>
      <View
        style={{
          alignSelf: "center",
          borderWidth: 1,
          width: "90%",
          padding: 20,
          borderRadius: 8,
        }}
      >
        <Text style={{ fontSize: 20 }}>{route.params.name}</Text>
        <Text>{route.params.marca}</Text>
        <Text style={{ fontSize: 30, alignSelf: "center", fontWeight: "700" }}>
          {route.params.preço}
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          width: "90%",
          alignSelf: "center",
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        <Text style={{ width: "90%", alignSelf: "center", padding: 5 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. {"\n"} {"\n"} Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </Text>
      </View>
    </View>
  );
}
