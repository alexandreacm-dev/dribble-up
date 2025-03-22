import { Pressable, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text } from "../../components/Text";

type Props = {
  menuText: string;
  icon: string;
  onPress: () => void;
};

export default function ModalContent({ menuText, icon, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: "100%",
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          padding: 5,
        }}
      >
        <View
          style={{
            width: "20%",
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
            borderBottomWidth: 1,
            borderBottomColor: "#CDCDCD",
          }}
        >
          <AntDesign name={icon} size={25} color="black" />
        </View>
        <View
          style={{
            width: "80%",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingLeft: 10,
            borderBottomWidth: 1,
            borderBottomColor: "#CDCDCD",
          }}
        >
          <Text type="defaultSemiBold">{menuText}</Text>
        </View>
      </View>
    </Pressable>
  );
}
