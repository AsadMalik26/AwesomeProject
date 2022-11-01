import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import { db } from "./config";
import useStudents from "./useStudents";

// import { TouchableOpacity } from "react-native-web";
const Get = () => {
  const { getData } = useStudents();
  // const getData = () => {
  //   console.log("Getting");
  //   let response = [];
  //   let cycle = 0;
  //   db.collection("students")
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         console.log(doc.id, " => ", doc.data());
  //         let doc_obj = { id: doc.id, data: doc.data() };
  //         response.push(doc_obj);
  //       });
  //       // setData((prev) => {
  //       //   return [...prev, ...response];
  //       // });
  //       console.log("Final", response);
  //     });
  // };
  useEffect(() => {
    console.log("Get screen");
    // console.log("data=========> ", data);
  }, []);
  return (
    <>
      {/* {console.log("return Get: ==========> data =====> ", data)} */}
      <TouchableOpacity
        style={{
          backgroundColor: "yellow",
          margin: 10,
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={getData}
      >
        <Text>Get View console</Text>
      </TouchableOpacity>
      <View info="flatlist">
        <FlatList />
      </View>
    </>
  );
};

export default Get;

const styles = StyleSheet.create({});
