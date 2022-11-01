import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "./config";
export default function useStudents() {
  //   const [data, setData] = useState([]);
  useEffect(getData, []);

  const getData = () => {
    console.log("Getting");
    let response = [];
    db.collection("students")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          let doc_obj = { id: doc.id, data: doc.data() };
        });
      });
    // setData([...response]);
  };
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

  return { addData, getData };
}

const styles = StyleSheet.create({});
