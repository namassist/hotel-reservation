import { useRouter } from "expo-router";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import users from "../../users";
import { setLogin } from "../../src/redux/reducers/loginSlice";

const LoginScreen = ({ navigation }) => {
  const router = useRouter();
  const { login } = useSelector((state) => state.login);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handlerLogin = () => {
    const findUser = users.find((user) => user.username === username);
    if (findUser?.password === password) {
      dispatch(setLogin(findUser));
      router.back();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          value={username}
          style={styles.textInput}
          placeholder="E-mail"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          value={password}
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handlerLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: COLORS.tertiary,
  },
  textInput: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
  },
  form: {
    height: "70%",
    width: "100%",
    gap: 20,
    backgroundColor: "#e5e5e5",
    paddingTop: 50,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button: {
    backgroundColor: COLORS.tertiary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});
export default LoginScreen;
