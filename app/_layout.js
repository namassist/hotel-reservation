import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "../src/redux/store";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

const RootLayout = () => {
  return (
    <Provider store={store}>
      <Stack initialRouteName="(tabs)">
        <Stack.Screen
          name="(tabs)"
          options={{
            headerTitle: "",
            headerShown: false,
          }}
        />
      </Stack>
    </Provider>
  );
};

export default RootLayout;
