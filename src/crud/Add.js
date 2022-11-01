import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { db } from "./config";
import useToast from "../mrm/useToast";
import useStudents from "./useStudents";
// import { TouchableOpacity } from "react-native-web";
const Add = () => {
  const { toast } = useToast();
  const addData = (name, id, section = "bse-b") => {
    // Add a second document with a generated ID.
    console.log("Adding");
    // toast("Adding");
    db.collection("students")
      .add({
        name: "Ahmad 2",
        id: "fa19-bse-028",
        section: "bse-b",
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        // toast(`Document written with ID:, ${docRef.id}`);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        // toast(`Error adding document: , ${error}`);
      });
  };
  useEffect(() => {
    console.log("Adding screen");
  }, []);
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "yellow",
        margin: 10,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={addData}
    >
      <Text>Add View console</Text>
    </TouchableOpacity>
  );
};

export default Add;

const styles = StyleSheet.create({});
