import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Modal = () => {

const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.topView}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            console.log("Modal closing");
            setModalVisible(!modalVisible);
        }}>
            <View styles={styles.topView}>
                <View style={styles.modalView}>
                    <Text>Modal</Text>
                    <Pressable 
                    style={[styles.btn, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                        <Text>Hide Modal</Text>
                    </Pressable>

                </View>
            </View>




        </Modal>
        <Pressable
        style={[styles.btn, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
<Text>Open Modal</Text>

        </Pressable>
      
    </View>
  )
}

const styles = StyleSheet.create({
    topView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },


});

export default Modal