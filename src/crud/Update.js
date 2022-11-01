import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { db } from "./config";
import useToast from "../mrm/useToast";
// import { TouchableOpacity } from "react-native-web";
const Update = () => {
  const { toast } = useToast();

  const updateData = (collection, docId) => {
    db.collection("students")
      .doc("FQmVFrWkbASh1EbQ60Qi")
      .update({
        name: "Hameed",
        id: "fa19-bst-089",
      })
      .then(() => {
        console.log("Document updated successfully");
      });
  };
  useEffect(() => {
    console.log("Delete screen");
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
      onPress={updateData}
    >
      <Text>Update View console</Text>
    </TouchableOpacity>
  );
};

export default Update;

const styles = StyleSheet.create({});
