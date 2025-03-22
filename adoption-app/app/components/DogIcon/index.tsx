import { Image, StyleSheet } from "react-native";
import { ImageBreed, ImageBreeds } from "../../model";

type Props = {
  image: string;
};

const DogIcon = ({ image }: Props) => {
  return (
    <Image
      style={styles.dogImg}
      source={ImageBreeds[image] || ImageBreed.noimage}
      resizeMode="cover"
    />
  );
};

const styles = StyleSheet.create({
  dogImg: {
    width: 50,
    height: 50,
  },
});

export default DogIcon;
