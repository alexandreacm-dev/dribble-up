import { Text } from "../components/Text";
import { SafeAreaView } from "react-native";
import * as S from "./styles";

export default function Settings() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Container>
        <Text type="title">Settings</Text>
      </S.Container>
    </SafeAreaView>
  );
}
