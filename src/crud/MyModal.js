import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useRef } from "react";
import useStudents from "./useStudents";
export const AddModal = ({ modalVisible, setModalVisible }) => {
  let regRef = useRef();
  let nameRef = useRef();
  let secRef = useRef();
  const { addData } = useStudents();

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              ref={regRef}
              placeholder="Registraion Id"
            />
            <TextInput style={styles.input} ref={nameRef} placeholder="Name" />
            <TextInput
              style={styles.input}
              ref={secRef}
              placeholder="Section"
            />
            <View style={styles.buttons}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonOpen]}
                onPress={() => {
                  console.log(
                    "refs values====> ",
                    nameRef.current.value,
                    regRef.current.value,
                    secRef.current.value
                  );
                  addData(
                    nameRef.current.value,
                    regRef.current.value,
                    secRef.current.value
                  );

                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export const EditModal = ({ modalVisible, setModalVisible, data }) => {
  let regRef = useRef();
  let nameRef = useRef();
  let secRef = useRef();
  const { updateData } = useStudents();

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              ref={regRef}
              defaultValue={data?.regId}
              placeholder="Registraion Id"
            />
            <TextInput
              style={styles.input}
              ref={nameRef}
              defaultValue={data?.name}
              placeholder="Name"
            />
            <TextInput
              style={styles.input}
              ref={secRef}
              defaultValue={data?.section}
              placeholder="Section"
            />
            <View style={styles.buttons}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonOpen]}
                onPress={() => {
                  console.log(
                    "refs values====> ",
                    nameRef.current.value,
                    regRef.current.value,
                    secRef.current.value
                  );
                  let obj = {
                    name: nameRef.current.value,
                    id: regRef.current.value,
                    section: secRef.current.value,
                  };
                  updateData("students", data?.id, obj);

                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#BDE0FE",
    borderRadius: 20,
    width: "90%",
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
    backgroundColor: "#06D6A0",
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
  input: {
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginBottom: 3,
    borderRadius: 10,
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
});
