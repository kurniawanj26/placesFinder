import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_PLACES_API_KEY} from '@env';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/types';
import CustomHeader from '../components/CustomHeader';
import {useDispatch} from 'react-redux';
import {setCoordinates} from '../redux/slices/mapSlice';
import {MapPinIcon} from 'react-native-heroicons/outline';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

interface RowData {
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
}

const Home = ({navigation}: HomeProps) => {
  const dispatch = useDispatch();

  const seeOnMap = (coordinates: any) => {
    dispatch(setCoordinates(coordinates));
    navigation.navigate('PlaceDetails');
  };

  const noResult = () => {
    return (
      <View className="justify-center items-center">
        <Text className="font-bold">No Results </Text>
      </View>
    );
  };

  const renderRow = (rowData: RowData) => {
    const title = rowData.structured_formatting.main_text;
    const address = rowData.structured_formatting.secondary_text;
    return (
      <View className="flex-row items-center">
        <MapPinIcon color="#ff5400" />
        <View className="ml-2">
          <Text className="text-sm font-bold">{title}</Text>
          <Text className="text-gray-400">{address}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView className="h-full">
      <CustomHeader title="Places Finder" description="Home" />
      <GooglePlacesAutocomplete
        listEmptyComponent={noResult}
        placeholder="Search places..."
        debounce={400}
        minLength={3}
        nearbyPlacesAPI="GooglePlacesSearch"
        enablePoweredByContainer={false}
        fetchDetails={true}
        keepResultsAfterBlur={true}
        onPress={(data, details = null) => {
          seeOnMap(details?.geometry.location);
        }}
        renderDescription={row => row.description}
        renderRow={rowData => renderRow(rowData)}
        onFail={error => console.error(error)}
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: 'en',
        }}
        styles={autoComplete}
      />
    </SafeAreaView>
  );
};

const autoComplete = StyleSheet.create({
  textInput: {
    backgroundColor: '#eeeeee',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  container: {
    backgroundColor: 'white',
    // position: 'absolute',
  },
});

export default Home;
