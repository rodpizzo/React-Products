import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { CommonActions } from "@react-navigation/native";

export default function LoginCard({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  async function logar() {
    try {
      const response = await axios.post(
        "https://api-ecommerce-eta.vercel.app/signin",
        { email: email, password: senha }
      );
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: "Products" }],
        })
      );
    } catch (error) {
      alert("email ou senha errada!");
    }
  }
  return (
    <View
      style={{
        alignSelf: "center",
        backgroundColor: "white",
        width: 297,
        height: 378,
        borderRadius: 12,
        justifyContent: "space-evenly",
      }}
    >
      <Text style={{ alignSelf: "center", fontWeight: "700" }}>Login</Text>
      <Text style={{ alignSelf: "center", width: "80%", fontWeight: "300" }}>
        Informe seus dados corretamente para acessar o sistema.
      </Text>
      <TextInput
        onChangeText={(txt) => setEmail(txt)}
        value={email}
        placeholder="Digite seu email"
        style={{
          backgroundColor: "#F5F5F5",
          borderRadius: 5,
          width: "80%",
          alignSelf: "center",
          padding: 5,
          marginTop: 20,
          borderWidth: 0.3,
          borderColor: "#D8D8D8",
          paddingLeft: 15,
        }}
      ></TextInput>
      <TextInput
        onChangeText={(txt) => setSenha(txt)}
        value={senha}
        secureTextEntry={true}
        placeholder="Digite sua senha"
        style={{
          backgroundColor: "#F5F5F5",
          borderRadius: 5,
          width: "80%",
          alignSelf: "center",
          padding: 5,
          borderWidth: 0.3,
          borderColor: "#D8D8D8",
          paddingLeft: 15,
          marginBottom: 20,
        }}
      ></TextInput>
      <TouchableOpacity
        style={{
          backgroundColor: "#F3BD30",
          width: "80%",
          alignItems: "center",
          alignSelf: "center",
          paddingVertical: 10,
        }}
        /*onPress={() => navigation.navigate("Products")}*/
        onPress={logar}
      >
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
