import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import CustomMap from '../components/CustomMap';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../components/CustomHeader';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/types';

type PlaceDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'PlaceDetails'
>;

const PlaceDetailsScreen = ({navigation}: PlaceDetailsProps) => {
  return (
    <SafeAreaView className="h-full">
      <CustomHeader
        title="Places Finder"
        description="Map"
        navigation={navigation}
      />
      <CustomMap />
    </SafeAreaView>
  );
};

export default PlaceDetailsScreen;
