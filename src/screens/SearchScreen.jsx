import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, StatusBar } from "react-native";
import List from "../components/List";
import SearchBar from "../components/Searchbar";
import { UsuarioContext } from "../context/usuario_context";
import getUsers from "../services/users_service";
import colors from "../styles/colors";

const SearchScreen = (props) => {
  const [login, loginAction] = useContext(UsuarioContext);
  const [users, setUsers] = useState([]);

  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    getUsers().then(
      (res) => {
        console.log(res);
        setUsers(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  function onItemClicked(user) {
    loginAction({ type: "guardar_usuario", data: user });
    goTo("Home");
  }

  function goTo(route) {
    props.navigation.navigate(route);
  }

  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={colors.primaryTint}
        animated={true}
        barStyle="light-content"
      />
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
        navigation={props.navigation}
      />
      {users.length > 0 ? (
        <></>
      ) : (
        <ActivityIndicator size="large" color={colors.primaryColor} />
      )}
      <List
        searchPhrase={searchPhrase}
        data={users}
        setClicked={onItemClicked}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;
