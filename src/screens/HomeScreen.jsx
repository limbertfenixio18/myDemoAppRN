import { useContext, useEffect, useState } from "react";
import { StatusBar, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { UsuarioContext } from "../context/usuario_context";
import getUsers from "../services/users_service";
import { getUsuario } from "../storage/usuario_storage";
import { mainStyles } from "../styles/button_styles";
import colors from "../styles/colors";
import { styles } from "../styles/styles";

export default function HomeScreen(props) {
  const [login, loginAction] = useContext(UsuarioContext);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsuario().then((user) => {
      if (user) {
        loginAction({ type: "ingreso", data: user });
      }
    });

    getUsers().then(
      (res) => {
        setUsers(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  function goTo(route) {
    props.navigation.navigate(route);
  }

  return (
    <View style={[styles.container]}>
      <StatusBar
        backgroundColor={colors.primaryTint}
        animated={true}
        barStyle="light-content"
      />
      <Text>
        {login.usuario.email != ""
          ? "Usuario seleccionado: " + login.usuario.email
          : "No se ha seleccionado un usuario"}
      </Text>
      <Button
        title="Ingresar"
        disabled={!login.activo}
        buttonStyle={[mainStyles.btnMain]}
        onPress={() => goTo("Post")}
      />
    </View>
  );
}
