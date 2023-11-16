import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const {height, width} = Dimensions.get('screen');
const UpperView = () => {
  const [selectedItem, setSelectedItem] = useState('item-1');

  const handleItemPress = item => {
    setSelectedItem(item === selectedItem ? null : item);
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          width: width * 0.7,
          marginTop: height * 0.008,
          marginLeft: width * 0.01,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {/* 1st cell */}
        <TouchableOpacity onPress={() => handleItemPress('item-1')}>
          <View
            style={{
              height: height * 0.04,
              width: width * 0.13,
              backgroundColor: selectedItem === 'item-1' ? '#232323' : 'white',
              borderRadius: 5,
              elevation: 10,
              justifyContent: 'center',
              // marginRight: width * 0.1,
            }}>
            <Text
              style={{
                color: selectedItem === 'item-1' ? 'white' : 'black',
                textAlign: 'center',
              }}>
              Restaurant
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleItemPress('item-2')}>
          <View
            style={{
              height: height * 0.04,
              width: width * 0.13,
              backgroundColor: selectedItem === 'item-2' ? '#232323' : 'white',
              borderRadius: 5,
              elevation: 10,
              justifyContent: 'center',
              // marginRight: width * 0.1,
            }}>
            <Text
              style={{
                color: selectedItem === 'item-2' ? 'white' : 'black',
                textAlign: 'center',
              }}>
              Bar Menu
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleItemPress('item-3')}>
          <View
            style={{
              height: height * 0.04,
              width: width * 0.13,
              backgroundColor: selectedItem === 'item-3' ? '#232323' : 'white',
              borderRadius: 5,
              elevation: 10,
              justifyContent: 'center',
              // marginRight: width * 0.1,
            }}>
            <Text
              style={{
                color: selectedItem === 'item-3' ? 'white' : 'black',
                textAlign: 'center',
              }}>
              Restaurant
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleItemPress('item-4')}>
          <View
            style={{
              height: height * 0.04,
              width: width * 0.13,
              backgroundColor: selectedItem === 'item-4' ? '#232323' : 'white',
              borderRadius: 5,
              elevation: 10,
              justifyContent: 'center',
              // marginRight: width * 0.1,
            }}>
            <Text
              style={{
                color: selectedItem === 'item-4' ? 'white' : 'black',
                textAlign: 'center',
              }}>
              Bar Menu
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginLeft: width * 0.02,
          width: width * 0.3,
          backgroundColor: 'white',
          paddingLeft: width * 0.1,
        }}>
        <Text
          style={
            {
              // textAlign: 'right'
            }
          }>
          Sudhanshu Mishra
        </Text>
        <Text>Clocked in 12:35 PM</Text>
      </View>
    </View>
  );
};

export default UpperView;
