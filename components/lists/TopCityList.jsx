import { icons } from "../../constants";
import { useRouter } from "expo-router";
import styles from "./topcitylist.style";
import { useDispatch, useSelector } from "react-redux";
import ScreenHeaderBtn from "../header/ScreenHeaderBtn";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  addFavorite,
  removeFavorite,
  getFavorites,
} from "../../src/redux/reducers/hotelSlice";

const TopCityList = ({ data }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);
  const isSaved = favorites.some((favorite) => favorite.id === data.id);

  const handleToggleSaved = () => {
    if (isSaved) {
      dispatch(removeFavorite(data.id));
    } else {
      dispatch(addFavorite(data));
    }
  };

  const handleNavigate = () => {
    router.push(`/hotels/${data.id}`);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}
      key={data.hotel_id}
    >
      <Image
        source={{
          uri: data.photoMainUrl,
        }}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.hotelName}>{data.name}</Text>
          <Text style={styles.rating}>
            Score: <Text style={styles.score}>{data.reviewScore} </Text>
            dari <Text style={styles.score}>{data.reviewCount}</Text> Reviewer
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btnFav}>
        <ScreenHeaderBtn
          iconUrl={isSaved ? icons.heart : icons.favorites}
          dimension="80%"
          handlePress={handleToggleSaved}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default TopCityList;
