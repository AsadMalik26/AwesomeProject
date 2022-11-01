import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { db } from "./config";
import useToast from "../mrm/useToast";
// import { TouchableOpacity } from "react-native-web";
const Delete = () => {
  const { toast } = useToast();

  const getData = () => {
    console.log("Getting");
    db.collection("students")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
        });
      });
  };
  const deleteData = () => {
    console.log("Deleting");
    db.collection("students")
      .doc("wOzAUDZJz5YsMvYgBaKF")
      .delete()
      .then((res) => {
        console.log("Document successfully deleted!", res);
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };
  useEffect(() => {
    console.log("Delete screen");
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
      onPress={deleteData}
    >
      <Text>Delete console</Text>
    </TouchableOpacity>
  );
};

export default Delete;

const styles = StyleSheet.create({});
