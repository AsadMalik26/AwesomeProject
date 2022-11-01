import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Add from "./Add";
import Get from "./Get";
import Delete from "./Delete";
import { testData } from "./dummy";
import { AntDesign } from "@expo/vector-icons";
import students from "./students";
// const { getData } = useStudents;
export default function CRUDApp() {
  // const { getData } = students();
  console.log(students);

  return (
    <View style={styles.body}>
      <Text>This is dummy data</Text>
      <View style={[styles.item, styles.heading]}>
        <Text style={[styles.fields, styles.heading]}>Registration</Text>
        <Text style={[styles.fields, styles.heading]}>Name</Text>
        <Text style={[styles.fields, styles.heading, { flex: 0.2 }]}>
          Section
        </Text>
        <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
          <View style={[styles.iconBody]}>
            <Text>Edit (inactive)</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={testData}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.fields}>{item.data.id}</Text>
            <Text style={styles.fields}>{item.data.name}</Text>
            <Text style={[styles.fields, { flex: 0.2 }]}>
              {item.data.section}
            </Text>
            <View style={[styles.iconBody]}>
              <TouchableOpacity>
                <AntDesign
                  style={styles.icon}
                  name="delete"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity>
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
      <Add />
      <Get />
      <Delete />
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
});
