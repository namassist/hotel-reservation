import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomTextInput from "../../components/book/CustomTextInput";
import { COLORS } from "../../constants";
import { useFocusEffect, useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { setBookHistory } from "../../src/redux/reducers/bookSlice";

const Book = () => {
  const { user } = useSelector((state) => state.login);
  const { book } = useSelector((state) => state.book);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const dispacth = useDispatch();
  const router = useRouter();

  const handleCheckout = () => {
    dispacth(setBookHistory(book));
    router.replace("/bookings");
  };

  useEffect(() => {
    user.length === 0 && router.push("/login");
  }, [user]);
  useFocusEffect(
    React.useCallback(() => {
      user.length === 0 && router.back();
    }, [user])
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>CONTACT INFORMATION</Text>
        <View style={styles.form}>
          <CustomTextInput
            onChangeText={(text) => setName(text)}
            value={
              name === undefined
                ? `${user.name && user.name.firstname} ${
                    user.name && user.name.lastname
                  }`
                : name
            }
            placeholder="Name"
          />
          <CustomTextInput
            onChangeText={(text) => setEmail(text)}
            value={email === undefined ? user.email : email}
            placeholder="Email"
          />
          <CustomTextInput
            onChangeText={(text) => setPhone(text)}
            value={phone === undefined ? user.phone : phone}
            placeholder="Phone"
          />
        </View>
        <Text style={styles.title}>PRICE SUMMARY</Text>
        <View style={styles.priceSummary}>
          <Text style={{ fontWeight: "bold" }}>
            {book.night} days, {book.room} Room, {book.guest} Guest{" "}
          </Text>
          <View
            style={[
              styles.price,
              { borderBottomWidth: 1, borderBottomColor: "black" },
            ]}
          >
            <Text>Total</Text>
            <Text>
              RP{" "}
              {Number(
                book.composite_price_breakdown.all_inclusive_amount.value *
                  book.night *
                  book.room
              ).toLocaleString("en-ID")}{" "}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleCheckout}>
        <Text style={styles.buttonText}>Check Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    backgroundColor: "#e5e5e5",
  },
  content: {
    gap: 20,
  },
  form: {
    gap: 10,
  },
  title: {
    fontWeight: "bold",
  },
  priceSummary: {
    backgroundColor: "#fff",
    padding: 20,
    gap: 10,
  },
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: COLORS.tertiary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 50,
  },
  buttonText: {
    color: "white",
  },
});

export default Book;
