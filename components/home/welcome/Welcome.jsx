import styles from "./welcome.style";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="Kota tujuan kamu ?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Text style={styles.searchBtnTxt}>Cari</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
