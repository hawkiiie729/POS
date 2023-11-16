import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';

const {height, width} = Dimensions.get('screen');
const SideBar = () => {
  const [selectedItem, setSelectedItem] = useState('item-1');

  const handleItemPress = item => {
    setSelectedItem(item === selectedItem ? null : item);
  };
  return (
    <View
      style={{
        height: height * 1,
        width: width * 0.07,
        backgroundColor: 'transparent',
        marginTop: height * 0.01,
      }}>
      <View style={{marginLeft: width * 0.012, marginTop: height * 0.04}}>
        <TouchableOpacity
          onPress={() => handleItemPress('item-1')}
          style={{marginBottom: height * 0.02}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              backgroundColor:
                selectedItem === 'item-1' ? '#ea7c69' : 'transparent',
              paddingVertical: 4,
            }}>
            <Image
              source={require('../Assets/Icons/home.png')}
              style={{
                height: height * 0.035,
                width: width * 0.02,
                tintColor: selectedItem === 'item-1' ? 'white' : 'grey',
              }}
            />
            <Text
              style={{
                color: selectedItem === 'item-1' ? 'white' : '#828487',
                textAlign: 'center',
                fontWeight: selectedItem === 'item-1' ? '800' : '500',
                marginTop: height * 0.007,
              }}>
              Home
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleItemPress('item-2')}
          style={{marginBottom: height * 0.02}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              backgroundColor:
                selectedItem === 'item-2' ? '#ea7c69' : 'transparent',
              paddingVertical: 4,
            }}>
            <Image
              source={require('../Assets/Icons/TakeOrder.png')}
              style={{
                height: height * 0.04,
                width: width * 0.03,
                tintColor: selectedItem === 'item-2' ? 'white' : 'grey',
              }}
            />
            <Text
              style={{
                color: selectedItem === 'item-2' ? 'white' : '#828487',
                textAlign: 'center',
                fontWeight: selectedItem === 'item-2' ? '800' : '500',
                marginTop: height * 0.007,
              }}>
              Take Order
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleItemPress('item-3')}
          style={{marginBottom: height * 0.02}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              backgroundColor:
                selectedItem === 'item-3' ? '#ea7c69' : 'transparent',
              paddingVertical: 4,
            }}>
            <Image
              source={require('../Assets/Icons/orders.png')}
              style={{
                height: height * 0.04,
                width: width * 0.025,
                tintColor: selectedItem === 'item-3' ? 'white' : 'grey',
              }}
            />
            <Text
              style={{
                color: selectedItem === 'item-3' ? 'white' : '#828487',
                textAlign: 'center',
                fontWeight: selectedItem === 'item-3' ? '800' : '500',
                marginTop: height * 0.007,
              }}>
              Orders
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleItemPress('item-4')}
          style={{marginBottom: height * 0.02}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              backgroundColor:
                selectedItem === 'item-4' ? '#ea7c69' : 'transparent',
              paddingVertical: 4,
            }}>
            <Image
              source={require('../Assets/Icons/dining.png')}
              style={{
                height: height * 0.04,
                width: width * 0.035,
                tintColor: selectedItem === 'item-4' ? 'white' : 'grey',
              }}
            />
            <Text
              style={{
                color: selectedItem === 'item-4' ? 'white' : '#828487',
                textAlign: 'center',
                fontWeight: selectedItem === 'item-4' ? '800' : '500',
                marginTop: height * 0.007,
              }}>
              Dining
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleItemPress('item-5')}
          style={{marginBottom: height * 0.02}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              backgroundColor:
                selectedItem === 'item-5' ? '#ea7c69' : 'transparent',
              paddingVertical: 4,
            }}>
            <Image
              source={require('../Assets/Icons/inventory.png')}
              style={{
                height: height * 0.045,
                width: width * 0.03,
                tintColor: selectedItem === 'item-5' ? 'white' : 'grey',
              }}
            />
            <Text
              style={{
                color: selectedItem === 'item-5' ? 'white' : '#828487',
                textAlign: 'center',
                fontWeight: selectedItem === 'item-5' ? '800' : '500',
                marginTop: height * 0.007,
              }}>
              Inventory
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleItemPress('item-6')}
          style={{marginBottom: height * 0.02}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              backgroundColor:
                selectedItem === 'item-6' ? '#ea7c69' : 'transparent',
              paddingVertical: 4,
            }}>
            <Image
              source={require('../Assets/Icons/reporting.png')}
              style={{
                height: height * 0.045,
                width: width * 0.03,
                tintColor: selectedItem === 'item-6' ? 'white' : 'grey',
              }}
            />
            <Text
              style={{
                color: selectedItem === 'item-6' ? 'white' : '#828487',
                textAlign: 'center',
                fontWeight: selectedItem === 'item-6' ? '800' : '500',
                marginTop: height * 0.007,
              }}>
              Reporting
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleItemPress('item-7')}
          style={{marginBottom: height * 0.02}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              backgroundColor:
                selectedItem === 'item-7' ? '#ea7c69' : 'transparent',
              paddingVertical: 4,
            }}>
            <Image
              source={require('../Assets/Icons/closeout.png')}
              style={{
                height: height * 0.045,
                width: width * 0.03,
                tintColor: selectedItem === 'item-7' ? 'white' : 'grey',
              }}
            />
            <Text
              style={{
                color: selectedItem === 'item-7' ? 'white' : '#828487',
                textAlign: 'center',
                fontWeight: selectedItem === 'item-7' ? '800' : '500',
                marginTop: height * 0.007,
              }}>
              Close Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SideBar;
