import styles from "./popularcard.style";
import { Text, TouchableOpacity, Image } from "react-native";

const PopularCard = ({ data, handleCardPress }) => {
  return (
    <TouchableOpacity
      key={data.id}
      onPress={() => handleCardPress(data)}
      style={styles.container}
    >
      <Image
        source={{
          uri: data.photoMainUrl,
        }}
        style={styles.logoImage}
        resizeMode="contain"
      />
      <Text style={styles.name}>{data.name}</Text>
    </TouchableOpacity>
  );
};

export default PopularCard;
