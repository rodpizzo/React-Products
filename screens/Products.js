import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import axios from "axios";

export default function Products({ navigation }) {
  const [ListaNotes, setListaNotes] = useState([]);

  async function getProducts() {
    const res = await axios.get("https://dummyjson.com/products");
    setListaNotes(res.data.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          backgroundColor: "#F3BD30",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 70,
          paddingHorizontal: 10,
        }}
      >
        <View></View>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 20,
          }}
        >
          React Products
        </Text>
        <TouchableOpacity>
          <Image source={require("../assets/IconProduct.png")}></Image>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          marginTop: 20,
          marginLeft: 20,
          fontWeight: "700",
          fontSize: 17,
        }}
      >
        Produtos
      </Text>

      <FlatList
        data={ListaNotes}
        renderItem={({ item, index }) => (
          <ProductItem item={item} index={index} navigation={navigation} />
        )}
      ></FlatList>
      
    </View>
  );
}
