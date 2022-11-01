import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { db } from "./config";
export default function useStudents(init = []) {
  const [data, setData] = useState(init);

  const getData = () => {
    console.log("Getting");
    let response = [];
    let cycle = 0;
    db.collection("students")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log(doc.id, " => ", doc.data());
          let doc_obj = { id: doc.id, data: doc.data() };
          response.push(doc_obj);
        });
        setData((prev) => {
          return [...prev, ...response];
        });
        console.log("Fetched Data", response);
      });
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

  const checkData = () => {
    console.log("check data========> ", data);
  };
  useEffect(getData, []);
  return { data, addData, getData, checkData };
}
