import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowLeftCircleIcon} from 'react-native-heroicons/outline';

const CustomHeader = ({navigation, title, description}: any) => {
  return (
    <View className="flex-row pb-3 items-center mx-4 space-x-2">
      {navigation && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftCircleIcon size={35} color="#ff5400" />
        </TouchableOpacity>
      )}
      <View className="flex-1 items-end">
        <Text className="font-bold text-xl">{title}</Text>
        <Text className="font-bold text-gray-400 text-xs">{description}</Text>
      </View>
    </View>
  );
};

export default CustomHeader;
