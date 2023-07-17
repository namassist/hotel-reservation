import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { COLORS, SIZES } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import NotLog from "../../components/notLog/NotLog";
import { setLogout, updateUser } from "../../src/redux/reducers/loginSlice";
import { TextInput } from "react-native-gesture-handler";
import React, { useState } from "react";
import { useFocusEffect } from "expo-router";

const Profile = () => {
  const { user } = useSelector((state) => state.login);
  const dispact = useDispatch();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [phone, setPhone] = useState();
  const [disable, setDisable] = useState(true);

  const handlerLogut = () => {
    dispact(setLogout());
  };

  const handlerSave = () => {
    if (firstname === undefined) {
      setFirstname(user.name && user.name.firstname);
      console.log(firstname);
    }
    if (lastname === undefined) {
      setLastname(user.name && user.name.lastname);
    }
    if (phone === undefined) {
      setPhone(user.phone);
    }
    dispact(
      updateUser({
        ...user,
        name: { firstname: firstname, lastname: lastname },
        phone: phone,
      })
    );
    setDisable(true);
  };

  useFocusEffect(
    React.useCallback(() => {
      setFirstname();
      setLastname();
      setPhone();
    }, [])
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      {user.length === 0 ? (
        <NotLog />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              padding: SIZES.medium,
            }}
          >
            <View>
              <TextInput
                value={
                  firstname === undefined
                    ? user.name && user.name.firstname
                    : firstname
                }
                placeholder="Firstname"
                onChangeText={(text) => setFirstname(text)}
                onChange={() => setDisable(false)}
              />
              <TextInput
                value={
                  lastname === undefined
                    ? user.name && user.name.lastname
                    : lastname
                }
                placeholder="Lastname"
                onChangeText={(text) => setLastname(text)}
                onChange={() => setDisable(false)}
              />
              <TextInput
                value={phone === undefined ? user.phone : phone}
                placeholder="Phone"
                onChangeText={(text) => setPhone(text)}
                onChange={() => setDisable(false)}
              />

              <TouchableOpacity
                disabled={disable}
                style={[styles.button, disable && styles.disabledButton]}
                onPress={handlerSave}
              >
                <Text>Simpan</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.tertiary,
                padding: 5,
                borderRadius: 8,
              }}
              onPress={handlerLogut}
            >
              <Text>Log Out</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: "gray",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default Profile;
