"use client";

import {
  FlatList,
  Image,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import data from "../../assets/data.json";
import { Ionicons } from "@expo/vector-icons";
import useCartStore from "@/store/cartStore";
import { Product } from "@/store/interfaces";

export default function HomeScreen() {
  const { reduceProduct, addProduct } = useCartStore();

  const renderItem: ListRenderItem<Product> = ({ item }) => {
    return (
      <View className="flex flex-row items-center p-4">
        <Image source={{ uri: item.image }} className="w-[50px] h-[50px]" />
        <View className="flex-1 ms-4">
          <Text className="font-bold">{item.title}</Text>
          <Text>price: {item.price} $</Text>
        </View>
        <View className="flex flex-row justify-center items-center gap-2">
          <TouchableOpacity
            onPress={() => reduceProduct(item)}
            className="px-4 py-2"
          >
            <Ionicons name="remove" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => addProduct(item)}
            className="px-4 py-2"
          >
            <Ionicons name="add" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1">
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
}
