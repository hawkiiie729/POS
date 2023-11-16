import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import CenterModal from './CenterModal';

const {height, width} = Dimensions.get('screen');

const CenterView = () => {
  const [selectedItem, setSelectedItem] = useState('item-1');
  const [isModalVisible, setisModalVisible] = useState(false);

  const toggleModal = () => {
    setisModalVisible(!isModalVisible);
    console.log(isModalVisible);
  };

  const handleItemPress = item => {
    setSelectedItem(item === selectedItem ? null : item);
  };
  return (
    <View
      style={{
        //justifyContent: 'center',
        //alignItems: 'center',
        //backgroundColor: 'grey',
        width: width * 0.62,
        left: width * 0.022,
        right: width * 0.35,
        marginTop: height * 0.02,
        flexDirection: 'column',
      }}>
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: width * 0.03,
            marginTop: height * 0.02,
          }}>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            onPress={() => handleItemPress('item-1')}>
            <Text
              style={{
                paddingRight: width * 0.03,
                fontWeight: selectedItem === 'item-1' ? '900' : '400',
                color: '#212B36',
              }}>
              Starters
            </Text>
            {selectedItem === 'item-1' && (
              <View
                style={{
                  width: width * 0.05,
                  backgroundColor: '#EA7C69',
                  height: height * 0.002,
                  right: width * 0.005,
                  marginTop: height * 0.005,
                }}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={{justifyContent: 'center'}}
            onPress={() => handleItemPress('item-2')}>
            <Text
              style={{
                paddingHorizontal: width * 0.03,
                fontWeight: selectedItem === 'item-2' ? '900' : '400',
                color: '#212B36',
              }}>
              Appetizers
            </Text>
            {selectedItem === 'item-2' && (
              <View
                style={{
                  width: width * 0.07,
                  backgroundColor: '#EA7C69',
                  height: height * 0.002,
                  //right: width * 0.03,
                  marginTop: height * 0.005,
                  left: width * 0.02,
                }}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            onPress={() => handleItemPress('item-3')}>
            <Text
              style={{
                paddingHorizontal: width * 0.03,
                fontWeight: selectedItem === 'item-3' ? '900' : '400',
                color: '#212B36',
              }}>
              Snacks
            </Text>
            {selectedItem === 'item-3' && (
              <View
                style={{
                  width: width * 0.055,
                  backgroundColor: '#EA7C69',
                  height: height * 0.002,
                  //right: width * 0.03,
                  marginTop: height * 0.005,
                  left: width * 0.02,
                }}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            onPress={() => handleItemPress('item-4')}>
            <Text
              style={{
                paddingHorizontal: width * 0.03,
                fontWeight: selectedItem === 'item-4' ? '900' : '400',
                color: '#212B36',
              }}>
              Meal
            </Text>
            {selectedItem === 'item-4' && (
              <View
                style={{
                  width: width * 0.045,
                  backgroundColor: '#EA7C69',
                  height: height * 0.002,
                  //right: width * 0.03,
                  marginTop: height * 0.005,
                  left: width * 0.02,
                }}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            onPress={() => handleItemPress('item-5')}>
            <Text
              style={{
                paddingHorizontal: width * 0.03,
                fontWeight: selectedItem === 'item-5' ? '900' : '400',
                color: '#212B36',
              }}>
              Hot's
            </Text>
            {selectedItem === 'item-5' && (
              <View
                style={{
                  width: width * 0.045,
                  backgroundColor: '#EA7C69',
                  height: height * 0.002,
                  //right: width * 0.03,
                  marginTop: height * 0.005,
                  left: width * 0.02,
                }}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            onPress={() => handleItemPress('item-6')}>
            <Text
              style={{
                paddingHorizontal: width * 0.03,
                fontWeight: selectedItem === 'item-6' ? '900' : '400',
                color: '#212B36',
              }}>
              Desserts
            </Text>
            {selectedItem === 'item-6' && (
              <View
                style={{
                  width: width * 0.062,
                  backgroundColor: '#EA7C69',
                  height: height * 0.002,
                  //right: width * 0.03,
                  marginTop: height * 0.005,
                  left: width * 0.02,
                }}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={{justifyContent: 'center'}}
            onPress={() => handleItemPress('item-7')}>
            <Text
              style={{
                paddingHorizontal: width * 0.03,
                marginRight: width * 0.05,
                fontWeight: selectedItem === 'item-7' ? '900' : '400',
                color: '#212B36',
              }}>
              Starters
            </Text>
            {selectedItem === 'item-7' && (
              <View
                style={{
                  width: width * 0.062,
                  backgroundColor: '#EA7C69',
                  height: height * 0.002,
                  //right: width * 0.03,
                  marginTop: height * 0.005,
                  left: width * 0.02,
                }}
              />
            )}
          </TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView style={{marginBottom: 200}}>
        <View style={{flexDirection: 'column', marginTop: height * 0.045}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: 10,
            }}>
            <TouchableOpacity onPress={toggleModal}>
              <View
                style={{
                  width: width * 0.18,
                  height: height * 0.35,
                  backgroundColor: 'white',
                  borderRadius: 10,
                  alignContent: 'center',
                  elevation: 15,
                }}>
                <Image
                  source={require('../Assets/Images/Placeholder.png')}
                  style={{width: width * 0.18, borderRadius: 10}}
                />
                <View style={{alignItems: 'center', marginTop: height * 0.006}}>
                  <Text
                    style={{color: '#19191C', fontWeight: '700', fontSize: 16}}>
                    Steak Sapi bakar
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      padding: 12,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#EA7C69',
                        fontWeight: '600',
                        fontSize: 18,
                        marginRight: width * 0.045,
                      }}>
                      Cash{'\n'}
                      <Text style={{top: 15}}>$12.9</Text>
                    </Text>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#EA7C69',
                        fontWeight: '600',
                        fontSize: 18,
                      }}>
                      Card{'\n'}
                      <Text style={{top: 15}}>$15.2</Text>
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          
            <View
              style={{
                width: width * 0.18,
                height: height * 0.35,
                backgroundColor: 'white',
                borderRadius: 10,
                alignContent: 'center',
                elevation: 15,
              }}>
              <Image
                source={require('../Assets/Images/Placeholder.png')}
                style={{width: width * 0.18, borderRadius: 10}}
              />
              <View style={{alignItems: 'center', marginTop: height * 0.006}}>
                <Text
                  style={{color: '#19191C', fontWeight: '700', fontSize: 16}}>
                  Steak Sapi bakar
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 12,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#EA7C69',
                      fontWeight: '600',
                      fontSize: 18,
                      marginRight: width * 0.045,
                    }}>
                    Cash{'\n'}
                    <Text style={{top: 15}}>$12.9</Text>
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#EA7C69',
                      fontWeight: '600',
                      fontSize: 18,
                    }}>
                    Card{'\n'}
                    <Text style={{top: 15}}>$15.2</Text>
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: width * 0.18,
                height: height * 0.35,
                backgroundColor: 'white',
                borderRadius: 10,
                alignContent: 'center',
                elevation: 15,
              }}>
              <Image
                source={require('../Assets/Images/Placeholder.png')}
                style={{width: width * 0.18, borderRadius: 10}}
              />
              <View style={{alignItems: 'center', marginTop: height * 0.006}}>
                <Text
                  style={{color: '#19191C', fontWeight: '700', fontSize: 16}}>
                  Steak Sapi bakar
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 12,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#EA7C69',
                      fontWeight: '600',
                      fontSize: 18,
                      marginRight: width * 0.045,
                    }}>
                    Cash{'\n'}
                    <Text style={{top: 15}}>$12.9</Text>
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#EA7C69',
                      fontWeight: '600',
                      fontSize: 18,
                    }}>
                    Card{'\n'}
                    <Text style={{top: 15}}>$15.2</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: 10,
            }}>
            <View
              style={{
                width: width * 0.18,
                height: height * 0.35,
                backgroundColor: 'white',
                borderRadius: 10,
                alignContent: 'center',
                elevation: 15,
              }}>
              <Image
                source={require('../Assets/Images/Placeholder.png')}
                style={{width: width * 0.18, borderRadius: 10}}
              />
              <View style={{alignItems: 'center', marginTop: height * 0.006}}>
                <Text
                  style={{color: '#19191C', fontWeight: '700', fontSize: 16}}>
                  Steak Sapi bakar
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 12,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#EA7C69',
                      fontWeight: '600',
                      fontSize: 18,
                      marginRight: width * 0.045,
                    }}>
                    Cash{'\n'}
                    <Text style={{top: 15}}>$12.9</Text>
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#EA7C69',
                      fontWeight: '600',
                      fontSize: 18,
                    }}>
                    Card{'\n'}
                    <Text style={{top: 15}}>$15.2</Text>
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: width * 0.18,
                height: height * 0.35,
                backgroundColor: 'white',
                borderRadius: 10,
                alignContent: 'center',
                elevation: 15,
              }}>
              <Image
                source={require('../Assets/Images/Placeholder.png')}
                style={{width: width * 0.18, borderRadius: 10}}
              />
              <View style={{alignItems: 'center', marginTop: height * 0.006}}>
                <Text
                  style={{color: '#19191C', fontWeight: '700', fontSize: 16}}>
                  Steak Sapi bakar
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 12,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#EA7C69',
                      fontWeight: '600',
                      fontSize: 18,
                      marginRight: width * 0.045,
                    }}>
                    Cash{'\n'}
                    <Text style={{top: 15}}>$12.9</Text>
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#EA7C69',
                      fontWeight: '600',
                      fontSize: 18,
                    }}>
                    Card{'\n'}
                    <Text style={{top: 15}}>$15.2</Text>
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: width * 0.18,
                height: height * 0.35,
                backgroundColor: 'white',
                borderRadius: 10,
                alignContent: 'center',
                elevation: 15,
              }}>
              <Image
                source={require('../Assets/Images/Placeholder.png')}
                style={{width: width * 0.18, borderRadius: 10}}
              />
              <View style={{alignItems: 'center', marginTop: height * 0.006}}>
                <Text
                  style={{color: '#19191C', fontWeight: '700', fontSize: 16}}>
                  Steak Sapi bakar
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 12,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#EA7C69',
                      fontWeight: '600',
                      fontSize: 18,
                      marginRight: width * 0.045,
                    }}>
                    Cash{'\n'}
                    <Text style={{top: 15}}>$12.9</Text>
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#EA7C69',
                      fontWeight: '600',
                      fontSize: 18,
                    }}>
                    Card{'\n'}
                    <Text style={{top: 15}}>$15.2</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: 10,
            }}>
            <View
              style={{
                width: width * 0.18,
                height: height * 0.35,
                backgroundColor: 'white',
                borderRadius: 10,
                alignContent: 'center',
                elevation: 15,
              }}>
              <Image
                source={require('../Assets/Images/Placeholder.png')}
                style={{width: width * 0.18, borderRadius: 10}}
              />
              <View style={{alignItems: 'center', marginTop: height * 0.006}}>
                <Text
                  style={{color: '#19191C', fontWeight: '700', fontSize: 16}}>
                  Steak Sapi bakar
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 12,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#EA7C69',
                      fontWeight: '600',
                      fontSize: 18,
                      marginRight: width * 0.045,
                    }}>
                    Cash{'\n'}
                    <Text style={{top: 15}}>$12.9</Text>
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#EA7C69',
                      fontWeight: '600',
                      fontSize: 18,
                    }}>
                    Card{'\n'}
                    <Text style={{top: 15}}>$15.2</Text>
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: width * 0.18,
                height: height * 0.35,
                backgroundColor: 'white',
                borderRadius: 10,
                alignContent: 'center',
                elevation: 15,
              }}>
              <Image
                source={require('../Assets/Images/Placeholder.png')}
                style={{width: width * 0.18, borderRadius: 10}}
              />
              <View style={{alignItems: 'center', marginTop: height * 0.006}}>
                <Text
                  style={{color: '#19191C', fontWeight: '700', fontSize: 16}}>
                  Steak Sapi bakar
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 12,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#EA7C69',
                      fontWeight: '600',
                      fontSize: 18,
                      marginRight: width * 0.045,
                    }}>
                    Cash{'\n'}
                    <Text style={{top: 15}}>$12.9</Text>
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#EA7C69',
                      fontWeight: '600',
                      fontSize: 18,
                    }}>
                    Card{'\n'}
                    <Text style={{top: 15}}>$15.2</Text>
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: width * 0.18,
                height: height * 0.35,
                backgroundColor: 'white',
                borderRadius: 10,
                alignContent: 'center',
                elevation: 15,
              }}>
              <Image
                source={require('../Assets/Images/Placeholder.png')}
                style={{width: width * 0.18, borderRadius: 10}}
              />
              <View style={{alignItems: 'center', marginTop: height * 0.006}}>
                <Text
                  style={{color: '#19191C', fontWeight: '700', fontSize: 16}}>
                  Steak Sapi bakar
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 12,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#EA7C69',
                      fontWeight: '600',
                      fontSize: 18,
                      marginRight: width * 0.045,
                    }}>
                    Cash{'\n'}
                    <Text style={{top: 15}}>$12.9</Text>
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#EA7C69',
                      fontWeight: '600',
                      fontSize: 18,
                    }}>
                    Card{'\n'}
                    <Text style={{top: 15}}>$15.2</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <CenterModal
              toggleModal={toggleModal}
              isVisible={isModalVisible}
              setIsVisible={setisModalVisible}
            />
    </View>
  );
};

export default CenterView;
