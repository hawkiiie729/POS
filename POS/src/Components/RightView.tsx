import {View, Text, Dimensions} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('screen');
const RightView = () => {
  return (
    <View
      style={{
        // justifyContent: 'center',
        //alignItems: 'center',
        //marginBottom: 100,
        backgroundColor: 'white',
        height: height,
        width: width * 0.3,
         left: width * 0.04,
        top: height * 0.0008,
      }}>
      <View style={{marginLeft: width * 0.015, marginTop: height * 0.02}}>
        <Text style={{color: '#212B36', fontWeight: '600'}}>
          Sudhanshu Mishra
        </Text>
        <Text>Customer</Text>
      </View>
    </View>
  );
};

export default RightView;
