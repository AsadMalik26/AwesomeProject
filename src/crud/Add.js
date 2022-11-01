import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { db } from "./config";
import useToast from "../mrm/useToast";
import useStudents from "./useStudents";
// import { TouchableOpacity } from "react-native-web";
const Add = () => {
  const { toast } = useToast();
  const {addData} = useStudents();
  useEffect(() => {
    console.log("Adding screen");
  }, []);
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "red",
        margin: 10,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={addData}
    >
      <Text>Add</Text>
    </TouchableOpacity>
  );
};

export default Add;

const styles = StyleSheet.create({});
