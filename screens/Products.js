import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

const ListaNotes = [
  {
    name: "Notebook Samsung Book i7",
    marca: "SAMSUNG",
    preço: "R$ 5.149,00",
    image:
      "https://img.mybest-brazil.com.br/press_component/item_part_images/4a2ec71950791bc5f23e158369de544b.jpg?ixlib=rails-4.2.0&q=70&lossless=0&w=640&h=640&fit=clip&s=b8ea7a86b27544c6b799eff25285cc19",
  },
  {
    name: "Notebook Lenovo Ideapad S145",
    marca: "LENOVO",
    preço: "R$ 5.100,00",
    image:
      "https://img.mybest-brazil.com.br/press_component/item_part_images/fb3e24caa7aeb725482c9c3dc3897d2d.jpg?ixlib=rails-4.2.0&q=70&lossless=0&w=640&h=640&fit=clip&s=0cf2d7a27f8d0fb509e79a2d5f3ec6a3",
  },
  {
    name: "Notebook Asus VivoBook X543",
    marca: "ASUS",
    preço: "R$ 3.099,90",
    image:
      "https://img.mybest-brazil.com.br/press_component/item_part_images/c683b3c633b3b6148b69e476fb678de2.jpg?ixlib=rails-4.2.0&q=70&lossless=0&w=640&h=640&fit=clip&s=4a9e7fe7984d47a9d9a1a31286f1f991",
  },
  {
    name: "Notebook Dell Inspiron i15 3501",
    marca: "DEll",
    preço: "R$ 6.049,00",
    image:
      "https://img.mybest-brazil.com.br/press_component/item_part_images/ecaf391ffd012012fbe304c5f219a4c8.jpg?ixlib=rails-4.2.0&q=70&lossless=0&w=640&h=640&fit=clip&s=116da6672d5ac0fb7a40e635f9e8ad46",
  },
  {
    name: "MacBook Air",
    marca: "Apple",
    preço: "R$ 8.099,00",
    image:
      "https://img.mybest-brazil.com.br/press_component/item_part_images/728ef9399bea12243e439a8c8a7cce50.jpg?ixlib=rails-4.2.0&q=70&lossless=0&w=640&h=640&fit=clip&s=c2eed4ecfe7be79620fcf33e52b84bc5",
  },
  {
    name: "Notebook Gamer Acer Aspire Nitro 5",
    marca: "ACER",
    preço: "R$ 7.999,00",
    image:
      "https://img.mybest-brazil.com.br/press_component/item_part_images/4fd1d40bec2f6bb4a1abb81419e37c99.jpg?ixlib=rails-4.2.0&q=70&lossless=0&w=640&h=640&fit=clip&s=bb860a1dd717a5e6f11fd3d2935b0025",
  },
  {
    name: "Notebook 2 em 1 Positivo Duo",
    marca: "Positivo",
    preço: "R$ R$ 1.504,97",
    image:
      "https://img.mybest-brazil.com.br/press_component/item_part_images/8454b591674e49656b2774960c57fc39.jpg?ixlib=rails-4.2.0&q=70&lossless=0&w=640&h=640&fit=clip&s=c7d6fe7cc767d57b6a1a27225804b02a",
  },
];

export default function Products({ navigation }) {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "white" }}>
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

        {ListaNotes.map((note, index) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Info", {
                name: note.name,
                marca: note.marca,
                preço: note.preço,
                image: note.image,
              })
            }
          >
            <View
              key={index}
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
                  source={{ uri: note.image }}
                  style={{ width: 100, height: 100 }}
                ></Image>
              </View>
              <View style={{ marginLeft: 30 }}>
                <Text style={{ fontSize: 16, fontWeight: "400", width: "90%" }}>
                  {note.name}
                </Text>
                <Text>{note.marca}</Text>
                <Text
                  style={{ marginTop: 30, fontSize: 20, fontWeight: "600" }}
                >
                  {note.preço}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
