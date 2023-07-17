import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants";

const NotLog = () => {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text>Anda Harus Login Terlebih Dahulu</Text>
      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text
          style={{
            backgroundColor: COLORS.tertiary,
            padding: 5,
            borderRadius: 8,
          }}
        >
          Log In
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotLog;
