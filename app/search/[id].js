import { useEffect, useState } from "react";
import { Welcome } from "../../components";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import {
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import TopCityList from "../../components/lists/TopCityList";
import {
  fetchCity,
  getCity,
  fetchHotelSearch,
  getHotelSearch,
  getLoading,
  clearSearch,
} from "../../src/redux/reducers/hotelSlice";
import { ScreenHeaderBtn } from "../../components";

import { COLORS, SIZES, icons } from "../../constants";

const Search = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const dispatch = useDispatch();
  const city = useSelector(getCity);
  const searchData = useSelector(getHotelSearch);
  const isLoading = useSelector(getLoading);

  const [searchTerm, setSearchTerm] = useState(params.id);

  useEffect(() => {
    dispatch(fetchCity(params.id));
  }, [dispatch]);

  useEffect(() => {
    if (city.length > 0) {
      dispatch(fetchHotelSearch(city[0].city_id));
    } else {
      dispatch(clearSearch());
    }
  }, [city]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerTitle: `Cari Hotel`,
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.push("/home")}
            />
          ),
        }}
      />
      <View style={{ padding: SIZES.medium }}>
        <Welcome
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleClick={() => {
            if (searchTerm) {
              router.push(`/search/${searchTerm}`);
            }
          }}
        />
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color={COLORS.tertiary}
            style={{ marginTop: 50 }}
          />
        ) : (
          <FlatList
            data={searchData}
            renderItem={({ item }) => <TopCityList data={item} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{
              padding: SIZES.medium,
              rowGap: SIZES.medium,
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Search;
