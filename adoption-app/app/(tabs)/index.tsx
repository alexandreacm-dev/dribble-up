import { useState } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Text as RnText,
} from "react-native";
import { Text } from "../components/Text";
import { useQuery } from "@tanstack/react-query";
import { IDog } from "../model";
import * as S from "./styles";
import DogIcon from "../components/DogIcon";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type ItemProps = {
  item: IDog;
};

export default function Home() {
  const {
    data: Dogs,
    isLoading,
    isError,
    isFetching,
    refetch,
    error,
  } = useQuery({
    queryKey: ["dogs", { type: "done" }],
    queryFn: async () => {
      try {
        const response = await fetch(
          "http://alexandres-macbook-air.local/api/v1.0/dogs/all"
        );

        return await response.json();
      } catch (error) {
        console.log(JSON.stringify(error));
      }
    },
  });

  const onRefresh = () => {
    refetch();
  };

  const renderItem = ({ item }: ItemProps) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 0.8,
        borderRadius: 12,
        borderColor: "#b3b1b1",
        padding: 10,
        marginBottom: 12,
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 5,
        // },
        // shadowOpacity: 0.36,
        // shadowRadius: 6.68,

        // elevation: 11,
      }}
    >
      <View
        style={{
          width: "15%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DogIcon image={item.breed.toLowerCase()} />
      </View>
      <View
        style={{
          width: "85%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: "90%",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            padding: 10,
          }}
        >
          <RnText>Name: {item.name}</RnText>
          <RnText>Breed: {item.breed}</RnText>
          <RnText>Color{item.color}</RnText>
        </View>

        <View
          style={{
            width: "10%",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            padding: 10,
          }}
        >
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color="black"
          />
        </View>
      </View>
    </View>
  );

  return (
    <>
      {isError && (
        <S.ErrorContainer>
          <Text type="error">{error.message}</Text>
        </S.ErrorContainer>
      )}

      <S.Container>
        {isLoading ? (
          <ActivityIndicator size="large" color="#5a3010" />
        ) : (
          <FlatList
            contentContainerStyle={{ marginVertical: 10 }}
            showsVerticalScrollIndicator={false}
            data={Dogs}
            renderItem={renderItem}
            keyExtractor={(item) => String(item._id)}
            refreshControl={
              <RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
            }
          />
        )}
      </S.Container>
    </>
  );
}
