import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function ProductItem(props) {
  return (
    <TouchableOpacity
      key={props.index}
      onPress={() =>
        props.navigation.navigate("Info", {
          name: props.item.title,
          marca: props.item.description,
          preço: props.item.price,
          image: props.item.thumbnail,
        })
      }
    >
      <View
        style={{
          flexDirection: "row",
          marginLeft: 20,
          marginTop: 30,
          borderWidth: 1,
          borderRadius: 8,
          borderColor: "#C3C3C3",
          padding: 20,
          width: "90%",
        }}
      >
        <View>
          <Image
            source={{ uri: props.item.thumbnail }}
            style={{ width: 100, height: 100 }}
          ></Image>
        </View>
        <View style={{ marginLeft: 30, flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: "400", width: "90%" }}>
            {props.item.title}
          </Text>
          <Text style={{ flex: 1 }}>{props.item.description}</Text>
          <Text style={{ marginTop: 30, fontSize: 20, fontWeight: "600" }}>
            {props.item.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
