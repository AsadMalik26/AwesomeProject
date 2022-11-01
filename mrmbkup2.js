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

// import { TouchableOpacity } from "react-native-gesture-handler";
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
    console.log("Item name: ", name);
    console.log("Item Qty: ", qty);
  }, [name, qty]);

  const handleDelete = (index) => {
    console.log("Deleting the id: ", index);
    let refinedList = [...list];
    console.log("Before REfinded: ", refinedList);
    refinedList.splice(index, 1);
    // refinedList.splice(1, 1);
    console.log("After REfinded: ", refinedList);
    setList([...refinedList]);
  };

  const addItem = (id, name, qty = 1) => {
    // if (qtyRef.current.value <= 0) qty = 1;
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
  // const addItem = () => {
  //   setList([
  //     ...list,
  //     {
  //       id: list.length + 1,
  //       name: "",
  //       qty: 0,
  //     },
  //   ]);
  // };

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
            addItem();
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
                {/* <TextInput
                  style={{
                    borderWidth: 1,
                    flex: 0.7,
                    paddingHorizontal: 10,
                    marginHorizontal: 4,
                  }}
                  //   editable={false}
                  onChangeText={(text) => {
                    setName(text);
                  }}
                  placeholder={"Select Part"}
                  value={name}
                /> */}
                <Text style={[styles.values, { flex: 0.7 }]}>{item.name}</Text>
                <Text style={[styles.values, { flex: 0.2 }]}>{item.qty}</Text>
                {/* <TextInput
                  style={[styles.values, { flex: 0.2 }]}
                  editable={true}
                  selectTextOnFocus={false}
                  placeholder={"Qty"}
                  onChangeText={(text) => {
                    if (Number.isInteger(text * 1)) {
                      text = text * 1;
                      console.log("Now=> ", typeof text); //nu,ber
                      setQty((text) => text);
                    }
                  }}
                  value={qty}
                /> */}
                <TouchableOpacity style={styles.dell}>
                  <Text>Dell</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        {/* <TheModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        /> */}
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
                  style={[styles.values, { flex: 0.7 }]}
                  focusable
                  selectedValue={list}
                  // onValueChange={(itemValue, itemIndex) => setList(itemValue)}
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
                >
                  <Picker.Item label="Java" value="java" />
                  <Picker.Item label="JavaScript" value="js" />
                  <Picker.Item label="C++" value="C++" />
                  <Picker.Item label="HTML" value="HTML" />
                  <Picker.Item label="CSS" value="CSS" />
                </Picker>
                <TextInput
                  style={[styles.values, { flex: 0.2 }]}
                  editable={true}
                  selectTextOnFocus={false}
                  placeholder={"Qty"}
                  onChangeText={(text) => {
                    if (Number.isInteger(text * 1)) {
                      text = text * 1;
                      console.log("Now=> ", typeof text); //nu,ber
                      setQty((text) => text);
                    }
                  }}
                  value={qty}
                />
              </View>
              <View style={styles.buttons}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Done</Text>
                </Pressable>
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
