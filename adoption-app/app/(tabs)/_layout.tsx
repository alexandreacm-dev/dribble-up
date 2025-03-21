import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const tabOptions = {
  headerStyle: {
    backgroundColor: "orange",
    borderWidth: 0,
    borderColor: "#808080",
  },
  tabBarLabelStyle: {
    fontSize: 14,
    fontFamily: "",
  },
  tabBarIconStyle: {
    width: 45,
    height: 45,
  },
  tabBarStyle: {
    height: 100,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fafafa",
    borderWidth: 1,
    borderColor: "#808080",
  },
  tabBarActiveTintColor: "#cd7204",
};

export default function TabLayout() {
  return (
    <Tabs screenOptions={tabOptions}>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "",
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="pets" size={35} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="historical"
        options={{
          headerTitle: "",
          title: "Historical",
          tabBarIcon: ({ color }) => (
            <AntDesign name="clockcircle" size={35} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          headerTitle: "",
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <AntDesign name="heart" size={35} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerTitle: "",
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={35} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
