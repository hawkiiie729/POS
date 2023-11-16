import {View, Text, Modal, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';


const {height,width}=Dimensions.get("screen")

const CenterModal = ({toggleModal,isVisible,setIsVisible}:any) => {
    console.log("hIII from modal");
    
  return (
    <>
      <Modal
        transparent={true}
        animationType="slide"
        visible={isVisible}
        onRequestClose={toggleModal}
        //style={{width:100}}
        >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
           
            <TouchableOpacity onPress={toggleModal}>
              <Text>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'grey',
      width:width*0.4,
      alignSelf:'center',
      marginVertical:height*0.05,
      borderRadius:10,
      elevation:12
    },
    modalContent: {
      backgroundColor: '#FFFFFF',
      padding: 22,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      flex:1,
      width:width*0.4,
    },
  });


export default CenterModal;
