import { View, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import React from "react";
import LoginCard from "../components/LoginCard";

export default function LoginFunction({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#F3BD30",
        flex: 1,
        alignSelf: "center",
        justifyContent: "center",
        width: "1100%",
      }}
    >
      <LoginCard navigation={navigation} />
    </View>
  );
}
