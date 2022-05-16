import { createContext, useReducer } from "react";
import { deleteUser, saveUser } from "../storage/usuario_storage";

const initialState = {
  usuario: {
    id: 0,
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  },
  activo: false,
};

const usuarioReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case "ingreso":
      console.log("ingreso usuario");
      return { ...state, usuario: payload.data, activo: true };
    case "guardar_usuario":
      console.log("guardando usuario");
      saveUser(payload.data).then();
      return { ...state, usuario: payload.data, activo: true };
    case "eliminar_usuario":
      console.log("eliminando usuario");
      deleteUser().then();
      return { ...state, usuario: payload.data, activo: false };
    default:
      return state;
  }
};

const UsuarioContext = createContext(initialState);

const UsuarioProvider = ({ children }) => {
  const [login, loginAction] = useReducer(usuarioReducer, initialState);

  return (
    <UsuarioContext.Provider value={[login, loginAction]}>
      {children}
    </UsuarioContext.Provider>
  );
};

export { UsuarioProvider, UsuarioContext };
