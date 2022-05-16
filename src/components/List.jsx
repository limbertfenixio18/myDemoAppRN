import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Item = ({ user, setClicked }) => (
  <View style={styles.item}>
    <TouchableWithoutFeedback onPress={() => setClicked(user)}>
      <Text style={styles.title}>{user.email}</Text>
    </TouchableWithoutFeedback>
  </View>
);

const List = ({ searchPhrase, setClicked, data }) => {
  const renderItem = ({ item }) => {
    if (searchPhrase === "") {
      return <Item user={item} setClicked={setClicked} />;
    }

    if (
      item.email
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item user={item} setClicked={setClicked} />;
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 1,
    height: "85%",
    width: "100%",
  },
  item: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  title: {
    fontSize: 20,
    fontWeight: "200",
    marginBottom: 5,
    fontStyle: "normal",
  },
});
