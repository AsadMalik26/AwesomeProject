import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Add from "./Add";
import Get from "./Get";
import Delete from "./Delete";
import { testData } from "./dummy";
import { AntDesign } from "@expo/vector-icons";
import useStudents from "./useStudents";
import Update from "./Update";
import { AddModal, EditModal } from "./MyModal";
// const { getData } = useStudents;
export default function CRUDApp() {
  const { data, deleteData } = useStudents();
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  useEffect(()=>{console.log("Is re-rendered CRUD Page")}, [])
  return (
    <View style={styles.body}>
      <Text  style={styles.heading}>Firebase CRUD</Text>
      <View style={[styles.item, styles.heading]}>
        <Text style={[styles.fields, styles.heading]}>Registration</Text>
        <Text style={[styles.fields, styles.heading]}>Name</Text>
        <Text style={[styles.fields, styles.heading, { flex: 0.2 }]}>
          Section
        </Text>
        <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
          <View style={[styles.iconBody]}>
            <Text>Edit</Text>
          </View>
        </View>
      </View>
      {!data.length ? (
        <View style={styles.item}>
          <Text>There may be no data or internet problem</Text>
        </View>
      ) : (
        <></>
      )}
      <FlatList
        style={{ maxHeight: "70%" }}
        data={data}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.fields}>{item.data.id}</Text>
            <Text style={styles.fields}>{item.data.name}</Text>
            <Text style={[styles.fields, { flex: 0.2 }]}>
              {item.data.section}
            </Text>
            <View style={[styles.iconBody]}>
              <TouchableOpacity onPress={()=>deleteData(item.id)}>
                <AntDesign
                  style={styles.icon}
                  name="delete"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity 
              // onPress={()=> {
              //   <EditModal 
              //   modalVisible={editModalVisible}
              //    setModalVisible={setEditModalVisible} 
              //    id={item.data.id}
              //     name={item.data.name}
              //     section={item.data.section}
              //   />
              // }}
              
              >
                <AntDesign
                  style={styles.icon}
                  name="edit"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <AddModal
        modalVisible={addModalVisible}
        setModalVisible={setAddModalVisible}
      />
     
      <TouchableOpacity style={styles.button} onPress={()=>setAddModalVisible(!addModalVisible)}>
        <Text>Add Data</Text>
      </TouchableOpacity>
      {/* <Add />
      <Get />
      <Delete /> */}
      <Update />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 5,
  },
  heading: { fontWeight: "bold" },
  item: {
    padding: 5,
    flexDirection: "row",

    borderWidth: 1,
    marginBottom: 5,
    borderWidth: 1,
  },
  fields: {
    paddingHorizontal: 5,
    flex: 0.3,
    textAlign: "left",
  },
  iconBody: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  button: {
    backgroundColor: "lightblue",
    alignSelf: "center",
    margin: 15,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});
