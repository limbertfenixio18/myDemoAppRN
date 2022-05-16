import { Entypo, Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const SearchBar = ({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setClicked,
  navigation,
}) => {
  function goTo(route) {
    navigation.navigate(route);
  }

  return (
    <View style={styles.container}>
      <View>
        <Feather
          name="arrow-left"
          size={30}
          color="black"
          onPress={() => goTo("Home")}
        />
      </View>
      <View style={styles.searchBar__clicked}>
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Buscar usuario"
          value={searchPhrase}
          onChangeText={(text) => {
            setClicked(true);
            setSearchPhrase(text);
          }}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {clicked && (
          <Entypo
            name="cross"
            size={25}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              setSearchPhrase("");
              setClicked(false);
            }}
          />
        )}
      </View>
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar__clicked: {
    padding: 10,
    marginLeft: 8,
    flexDirection: "row",
    width: "90%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});
