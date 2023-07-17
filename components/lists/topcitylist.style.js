import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    height: 350,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    ...SHADOWS.medium,
    position: "relative",
  },
  image: {
    height: "75%",
    objectFit: "cover",
    borderRadius: 5,
  },
  textContainer: {
    marginVertical: SIZES.small,
    marginHorizontal: SIZES.small,
  },
  hotelName: {
    fontSize: SIZES.medium + 2,
    fontFamily: "DMBold",
    color: COLORS.primary,
  },
  rating: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.gray,
    marginTop: 5,
  },
  price: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: COLORS.primary,
  },
  score: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: COLORS.tertiary,
  },
  btnFav: {
    position: "absolute",
    top: 7,
    right: 0,
  },
});

export default styles;
