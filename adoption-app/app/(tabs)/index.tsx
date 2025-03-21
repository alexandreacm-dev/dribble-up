import { useState } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Image,
  StyleSheet,
  RefreshControl,
} from "react-native";
import { Text } from "../components/Text";
import { useQuery } from "@tanstack/react-query";
import { Dog, IDog, ImageBreeds } from "../model";
import * as S from "./styles";

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
  } = useQuery({
    queryKey: ["dogs", { type: "done" }],
    queryFn: async () => {
      const response = await fetch(
        "http://alexandres-macbook-air.local/api/v1.0/dogs/all"
      );

      return await response.json();
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
        padding: 8,
        marginBottom: 10,
        alignContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
    >
      <View
        style={{
          width: "10%",
          marginRight: 10,
        }}
      >
        <Image
          style={styles.tinyLogo}
          source={ImageBreeds[item.breed] || ImageBreeds.noimage}
        />
      </View>
      <View
        style={{
          width: "90%",
          padding: 10,
        }}
      >
        <Text type="defaultSemiBold">Name: {item.name}</Text>
        <Text type="default">Breed: {item.breed}</Text>
        <Text type="default">Color{item.color}</Text>
      </View>
    </View>
  );

  return (
    <S.Container>
      {isLoading ? (
        <ActivityIndicator size="large" color="#d6630b" />
      ) : (
        <FlatList
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
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});
