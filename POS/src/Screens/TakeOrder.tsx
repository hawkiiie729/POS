import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import UpperView from '../Components/UpperView';

import SideBar from '../Components/SideBar';
import RightView from '../Components/RightView';
import CenterView from '../Components/CenterView';

const {height, width} = Dimensions.get('screen');
const TakeOrder = () => {
  return (
    <>
      <View>
        <View style={{width: width * 0.7}}>
          <UpperView />
        </View>
        <View style={{flexDirection:'row'}}>
        <SideBar />
        <CenterView/>
        <RightView />
        </View>
       
       
       
      </View>
    </>
  );
};

export default TakeOrder;
