import { Text, TouchableOpacity, Image } from "react-native";

import styles from "./topcitycard.style";

const TopCityCard = ({ item, handleCardPress }) => {
  return (
    <TouchableOpacity
      key={item.city_id}
      style={styles.container(item)}
      onPress={() => handleCardPress(item)}
    >
      <Image
        source={{ uri: item.pict }}
        resizeMode="contain"
        style={styles.logoImage}
      />
      <Text style={styles.companyName}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default TopCityCard;
