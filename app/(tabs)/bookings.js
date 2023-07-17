import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";

import { COLORS, SIZES } from "../../constants";
import Booking from "../../components/cards/booikng/Booking";
import { useSelector } from "react-redux";
import NotLog from "../../components/notLog/NotLog";

const Bookings = () => {
  const { user } = useSelector((state) => state.login);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <View
        style={{
          flex: 1,
          padding: SIZES.medium,
        }}
      >
        {user.length === 0 ? <NotLog /> : <Booking />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Bookings;
