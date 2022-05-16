import AsyncStorage from "@react-native-async-storage/async-storage";

const USUARIO_KEY = "@usuario:key";

async function saveUser(user) {
  try {
    await AsyncStorage.setItem(USUARIO_KEY, JSON.stringify(user));
    return JSON.stringify(user);
  } catch (error) {
    console.log("error al guardar usuario: " + JSON.stringify(error));
    return "Error al guardar el usuario";
  }
}

async function getUsuario() {
  try {
    const user = await AsyncStorage.getItem(USUARIO_KEY);
    return JSON.parse(user);
  } catch (error) {
    console.log("error al obtener usuario: " + JSON.stringify(error));
    return "Error al obtener el usuario";
  }
}

async function deleteUser() {
  try {
    await AsyncStorage.removeItem(USUARIO_KEY);
    return "Usuario eliminado";
  } catch (error) {
    console.log("error al eliminar usuario: " + JSON.stringify(error));
    return "Error al eliminar el usuario";
  }
}

export { saveUser, getUsuario, deleteUser };
