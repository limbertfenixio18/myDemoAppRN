import { StyleSheet } from "react-native";
import colors from "./colors";

export const mainStyles = StyleSheet.create({
  btnMain: {
    height: 45,
    width: 280,
    marginTop: 40,
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: colors.primaryColor,
    borderRadius: 60,
  },

  btnTransparent: {
    backgroundColor: "rgba(52, 52, 52, 0)",
    borderColor: colors.primaryColor,
    width: 280,
    borderWidth: 2,
    marginBottom: 20,
    borderRadius: 60,
  },

  btntxt: {
    textAlign: "center",
    fontSize: 17,
    color: colors.white,
    paddingVertical: 15,
    fontFamily: "Poppins-Bold",
  },

  txtTransparent: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "Poppins-Light",
  },
});
