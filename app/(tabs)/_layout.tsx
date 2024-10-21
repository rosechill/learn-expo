import { Link, Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import useCartStore from "@/store/cartStore";
import { Text, TouchableOpacity } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { items } = useCartStore();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <TouchableOpacity>
                <Text className="mr-4 text-2xl font-bold bg-red-400 px-4 py-2">
                  {items}
                </Text>
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <TouchableOpacity>
                <Text className="mr-4 text-2xl font-bold bg-red-400 px-4 py-2">
                  {items}
                </Text>
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}
