import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import { db } from "./config";
import useToast from "../mrm/useToast";
import useStudents from "./useStudents";

// import { TouchableOpacity } from "react-native-web";
const Get = () => {
  const { toast } = useToast();

  const { getData } = useStudents();
  useEffect(() => {
    console.log("Get screen");
    // console.log("data=========> ", data);
  }, []);
  return (
    <>
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
        <Text>Get console</Text>
      </TouchableOpacity>
      <View info="flatlist">
        <FlatList />
      </View>
    </>
  );
};

export default Get;

const styles = StyleSheet.create({});
