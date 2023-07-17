import { useSelector } from "react-redux";
import { View, Text, FlatList, Image } from "react-native";
import styles from "./booking.style";
import { COLORS } from "../../../constants";

const Booking = () => {
  const { bookHistory } = useSelector((state) => state.book);
  return (
    <FlatList
      data={bookHistory}
      renderItem={({ item }) =>
        item.rooms &&
        Object.keys(item.rooms).map((key, index) => (
          <View key={index} style={styles.container}>
            <Image
              style={{ width: 60, height: 60 }}
              source={{
                uri: item.rooms[key]?.photos[0]?.url_square60,
              }}
            />

            <View>
              <Text
                style={{ fontWeight: "bold" }}
                onPress={() =>
                  console.warn(item.rooms[key]?.photos[0]?.url_square60)
                }
              >
                {item.hotel_name}
              </Text>
              <Text>{item.address}</Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={{ color: COLORS.tertiary }}>
                RP{" "}
                {item.composite_price_breakdown.all_inclusive_amount.value.toLocaleString(
                  "en-ID"
                )}{" "}
              </Text>
              <Text>/Malam</Text>
            </View>
          </View>
        ))
      }
    />
  );
};

export default Booking;
