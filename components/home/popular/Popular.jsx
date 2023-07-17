import { useEffect } from "react";
import { useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { SIZES, COLORS } from "../../../constants";
import {
  fetchPopularHotel,
  getPopularHotel,
  getLoading,
} from "../../../src/redux/reducers/hotelSlice";

import styles from "./popular.style";
import PopularCard from "../../cards/popular/PopularCard";

const Popular = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const popularHotel = useSelector(getPopularHotel);
  const isLoading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchPopularHotel());
  }, [dispatch]);

  const handleCardPress = (item) => {
    router.push(`/hotels/${item.id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hotel Populer</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator
          style={{ marginTop: 50 }}
          size="large"
          color={COLORS.tertiary}
        />
      ) : (
        <View style={styles.cardsContainer}>
          <FlatList
            data={popularHotel}
            renderItem={({ item }) => (
              <PopularCard data={item} handleCardPress={handleCardPress} />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        </View>
      )}
    </View>
  );
};

export default Popular;
