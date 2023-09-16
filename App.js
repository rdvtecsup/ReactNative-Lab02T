import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <>
    <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setShow(!show);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Login Correcto</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setShow(!show)}
            >
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <Image source={require("./assets/logo.jpg")} style={styles.logo} />
        <TextInput style={styles.input} placeholder="Usuario" />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => setShow(true)}
        >
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
       
      </View>
      
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#159AED",
    borderRadius: 50,
    margin: 50,
    height: 500,
    padding: 80,
  },
  logo: {
    width: 150,
    height: 200,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  buttonLogin: {
    backgroundColor: "#0C57ED",
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default App;
