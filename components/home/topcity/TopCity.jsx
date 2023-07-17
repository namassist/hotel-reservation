import styles from "./topcity.style";
import { useRouter } from "expo-router";
import { View, Text, FlatList } from "react-native";
import { SIZES } from "../../../constants";
import TopCityCard from "../../cards/topcity/TopCityCard";

const TopCity = ({ data, title }) => {
  const router = useRouter();

  const handleCardPress = (item) => {
    router.push(`/hotels/city/${item.city_id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      <View style={styles.cardsContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TopCityCard item={item} handleCardPress={handleCardPress} />
          )}
          keyExtractor={(item) => item.city_id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
        />
      </View>
    </View>
  );
};

export default TopCity;
