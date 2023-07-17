import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES, FONT } from "../../constants";
import { TopCity, Welcome, Popular } from "../../components";
import { cityIdn, cityAbroad } from "../../utils/data";
import DateTimePicker from "@react-native-community/datetimepicker";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setSelectedDate(date);
    }
    setDatePickerVisibility(false);
  };

  const openDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const closeDatePicker = () => {
    setDatePickerVisibility(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            padding: SIZES.medium,
          }}
        >
          <Text
            style={{
              fontFamily: FONT.bold,
              fontSize: SIZES.xxLarge,
              color: COLORS.primary,
              marginTop: 2,
            }}
          >
            Nikmati Pengalaman Menginap Terbaik
          </Text>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
          {/* <View style={styles.container}>
            <Button title="Pilih Tanggal" onPress={openDatePicker} />
            {isDatePickerVisible && (
              <DateTimePicker
                value={selectedDate}
                mode="date"
                minimumDate={new Date(2023, 0, 1)}
                maximumDate={new Date(2023, 11, 31)}
                onChange={handleDateChange}
                display="default"
                onClose={closeDatePicker}
              />
            )}
            {selectedDate && (
              <Text style={styles.selectedDate}>
                Tanggal yang dipilih: {selectedDate.toDateString()}
              </Text>
            )}
          </View> */}
          <TopCity data={cityIdn} title="Kota Populer di Indonesia" />
          <TopCity data={cityAbroad} title="Kota Populer di Luar Negeri" />
          {/* <Popular /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedDate: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default Home;
