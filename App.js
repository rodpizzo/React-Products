import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";
import Products from "./screens/Products";
import ProductItem from "./components/ProductItem";
import RootVavigation from "./Navigation";

export default function App() {
  return <RootVavigation />;
}
