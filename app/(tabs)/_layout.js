import { Tabs } from "expo-router";
import { useFonts } from "expo-font";
import { Image } from "react-native";

export default () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/home-active.png")
                  : require("../../assets/icons/home.png")
              }
              style={{
                width: size,
                height: size,
                tintColor: "red",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/favorites-active.png")
                  : require("../../assets/icons/favorites.png")
              }
              style={{
                width: size,
                height: size,
                tintColor: "red",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/bookings-active.png")
                  : require("../../assets/icons/bookings.png")
              }
              style={{
                width: size,
                height: size,
                tintColor: "red",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/user-active.png")
                  : require("../../assets/icons/user.png")
              }
              style={{
                width: size,
                height: size,
                tintColor: "red",
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
};
