import { storage } from "@/store/mmkv";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function ModalScreen() {
  const [name, setName] = useState(storage.getString("user.displayname"));

  const updateName = () => {
    storage.set("user.displayname", "rosechill");
  };

  return (
    <View className="flex-1 justify-center items-center ">
      <Text>Welcome To the App: {name}</Text>
      <Button onPress={updateName} title="Update Name" />
    </View>
  );
}
