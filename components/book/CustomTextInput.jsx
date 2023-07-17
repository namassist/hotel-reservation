import { StyleSheet, TextInput } from "react-native";
import { useSelector } from "react-redux";

const CustomTextInput = ({ placeholder, value, onChangeText }) => {
  return (
    <TextInput
      style={styles.textInput}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
  },
});

export default CustomTextInput;
