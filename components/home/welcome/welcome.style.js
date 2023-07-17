import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: { height: 150 },
  searchContainer: {
    width: "100%",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    width: "100%",
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    borderRadius: SIZES.medium,
    marginTop: SIZES.small,
    height: 50,
    marginBottom: 15,
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    flexDirection: "row",
    width: "100%",
    gap: 2,
    padding: 15,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
  },
  searchBtnTxt: {
    color: COLORS.white,
    fontSize: SIZES.medium,
  },
});

export default styles;
