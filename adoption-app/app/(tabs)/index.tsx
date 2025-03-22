import { useState } from "react";
import {
  View,
  FlatList,
  RefreshControl,
  Text as RnText,
  Pressable,
  Modal,
  StyleSheet,
} from "react-native";
import { Text } from "../components/Text";
import { useQuery } from "@tanstack/react-query";
import { IDog } from "../model";
import DogIcon from "../components/DogIcon";
import Loading from "../components/Loading";
import * as S from "./styles";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ModalContent from "../components/ModalContent";

type ItemProps = {
  item: IDog;
};

type EventProps = {
  locationX: number;
  locationY: number;
  pageX: number;
  pageY: number;
};

export default function Home() {
  const [position, setPosition] = useState<EventProps>();
  const [isVisible, setISVisible] = useState(false);

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

        <Pressable
          onPress={({ nativeEvent: PressEvent }) => handlerModal(PressEvent)}
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
        </Pressable>
      </View>
    </View>
  );

  const handlerModal = (evt: EventProps) => {
    const newPosition: EventProps = {
      locationX: parseInt(String(evt.pageX)) - 200,
      locationY: parseInt(String(evt.locationY)),
      pageX: parseInt(String(evt.pageX)) - 230,
      pageY: parseInt(String(evt.pageY)),
    };

    setISVisible(!isVisible);
    setPosition(newPosition);
  };

  return (
    <>
      {isError && (
        <S.ErrorContainer>
          <Text type="error">{error.message}</Text>
        </S.ErrorContainer>
      )}

      <S.Container>
        {isLoading ? (
          <Loading />
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
      <Modal
        animationType="fade"
        transparent
        visible={isVisible}
        onRequestClose={() => {
          setISVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View
            style={[
              styles.modalView,
              {
                marginLeft: position?.pageX,
                marginTop: position?.pageY,
              },
            ]}
          >
            <Pressable
              onPress={() => setISVisible(false)}
              style={{
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Text type="default">X</Text>
            </Pressable>

            <ModalContent menuText="New Dog" icon="form" onPress={() => {}} />
            <ModalContent menuText="Edit Dog" icon="edit" onPress={() => {}} />
            <ModalContent
              menuText="Delete Dog"
              icon="closecircleo"
              onPress={() => {}}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: "#55545460",
  },
  modalView: {
    width: 230,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
