import { StyleSheet } from "react-native";

import { SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: 225,
    height: 300,
    borderRadius: 5,
    position: "relative",
    backgroundColor: "black",
  },

  logoImage: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    objectFit: "cover",
    opacity: 0.7,
  },
  name: {
    position: "absolute",
    bottom: 15,
    left: 15,
    color: "#fff",
    fontSize: SIZES.large,
    fontFamily: FONT.small,
  },
});

export default styles;
