import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
} from "react-native";
// import TheModal from "./TheModal";
import { Picker } from "@react-native-picker/picker";

const data = [];
export default function MRM() {
  const [list, setList] = useState([{ id: 1, name: "abc", qty: 5 }]);
  const [name, setName] = useState("");
  const [qty, setQty] = useState(0);
  const [added, setAdded] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);
  const itemRef = useRef();
  const qtyRef = useRef();

  useEffect(() => {
    console.log("re-render occured");
  }, []);
  const addItem = (id, name, qty = 1) => {
    if (qtyRef.current.value <= 0) qty = 1;
    console.log("Adding: ", id, name, qty);
    setList([
      ...list,
      {
        id: id,
        name: name,
        qty: qty,
      },
    ]);
  };
  const handleDelete = (index) => {
    console.log("Deleting the id: ", index);
    let refinedList = [...list];
    console.log("Before REfinded: ", refinedList);
    refinedList.splice(index, 1);
    // refinedList.splice(1, 1);
    console.log("After REfinded: ", refinedList);
    setList([...refinedList]);
  };
  return (
    <View style={styles.body}>
      <View
        info="card"
        style={{ width: "90%", height: "85%", backgroundColor: "#e3d5ca" }}
      >
        <View info="Header" style={styles.header}>
          <View>
            <Text>Complaint abc-123</Text>
            <Text>Customer Test User</Text>
          </View>
          <View style={styles.city}>
            <Text>City: Faislabad</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.add}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Text>Add more</Text>
        </TouchableOpacity>
        {/* list */}
        <View info="list">
          <FlatList
            data={list}
            renderItem={({ item, index }) => (
              <View key={item?.id} style={{ flexDirection: "row" }}>
                {console.log(item?.id, item?.name, item?.qty)}
                <Text style={[styles.values, { flex: 0.7 }]}>{item.name}</Text>
                <Text style={[styles.values, { flex: 0.2 }]}>{item.qty}</Text>
                <TouchableOpacity
                  style={styles.dell}
                  onPress={() => handleDelete(index)}
                >
                  <Text>Dell</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
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
            {/* <View style={styles.centeredView}> */}
            <View style={styles.modalView}>
              <View style={styles.modelSelection}>
                <Picker
                  ref={itemRef}
                  selectedValue={name}
                  style={[styles.values, { flex: 0.7 }]}
                  // onValueChange={(itemValue, itemIndex) => {
                  //   console.log("Value changed: ", itemValue, itemIndex);
                  //   // itemRef.current.value = itemValue;
                  //   setName(itemValue);
                  //   console.log("itemRef", itemRef.current.value);
                  //   console.log(
                  //     "Selected Value",
                  //     itemRef.current.selectedValue
                  //   );
                  // }}
                  prompt="Option"
                >
                  <Picker.Item label="Java" value="java" />
                  <Picker.Item label="JavaScript" value="js" />
                  <Picker.Item label="C++" value="C++" />
                  <Picker.Item label="HTML" value="HTML" />
                  <Picker.Item label="CSS" value="CSS" />
                </Picker>
                <TextInput
                  style={[styles.values, { flex: 0.2 }]}
                  // editable={true}
                  // selectTextOnFocus={false}
                  placeholder={"1"}
                  value
                  // onChangeText={(text) => {
                  //   if (Number.isInteger(text * 1)) {
                  //     text = text * 1;
                  //     console.log("Now=> ", typeof text); //nu,ber
                  //     setQty((text) => text);
                  //   }
                  // }}
                  // value={qty}
                  onChange={(e) => {
                    // console.log("qty text ======> ", e.target);
                    console.log(
                      "e.currentTarget=======> ",
                      e.currentTarget,
                      "qtyRef.current.value=====>",
                      qtyRef.current.value
                    );
                  }}
                  onChangeText={(text) => {
                    // qtyRef.current.value = text;
                    console.log(text, qtyRef.current.value);
                    // console.log();
                  }}
                  ref={qtyRef}
                />
              </View>
              <View style={styles.buttons}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    // console.log("itemRef=====> ", itemRef.current);
                    // console.log("qtyRef=====> ", qtyRef.current);
                    let id = list.length + 1;
                    if (itemRef.current.value) {
                      console.log("Adding");

                      addItem(id, itemRef.current.value, qtyRef.current.value);
                      setModalVisible(!modalVisible);
                    } else {
                      console.log("Not Adding");
                    }
                  }}
                >
                  <Text style={styles.textStyle}>Done</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* </View> */}
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#faedcd",
  },
  header: {
    backgroundColor: "#90e0ef",
    width: "80%",
    height: 100,
    marginTop: 10,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 10,
  },
  city: {
    backgroundColor: "#e5989b",
    height: 50,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  add: {
    height: 33,
    marginVertical: 10,
    alignItems: "center",
    textAlignVertical: "center",
    backgroundColor: "lightblue",
  },
  values: {
    borderWidth: 1,
    paddingHorizontal: 10,
    marginHorizontal: 4,
  },
  dell: {
    flex: 0.2,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  // modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // width: "70%",
    borderWidth: 1,
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 35,
    width: "80%",
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
  modelSelection: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 1,
    width: "100%",
  },
  buttons: {
    flexDirection: "row",
    // justifyContent: "",
    alignItems: "center",
    paddingTop: 30,

    width: "100%",
  },
  button: {
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
    paddingVertical: 5,
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
