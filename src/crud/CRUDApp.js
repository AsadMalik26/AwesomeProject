import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Add from "./Add";
import Get from "./Get";
import Delete from "./Delete";

export default function CRUDApp() {
  return (
    <View>
      <Add />
      <Get />
      <Delete />
    </View>
  );
}

const styles = StyleSheet.create({});
