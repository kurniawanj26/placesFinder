import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

const CustomMap = () => {
  const screenState = useSelector((state: RootState) => state.map);
  const {coordinates} = screenState;

  return (
    <MapView
      initialRegion={{
        latitude: coordinates.lat,
        longitude: coordinates.long,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      className="flex-1">
      <Marker
        coordinate={{latitude: coordinates.lat, longitude: coordinates.long}}
      />
    </MapView>
  );
};

export default CustomMap;
