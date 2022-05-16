import { React } from "react";
import { PostProvider } from "./context/post_context";
import { UsuarioProvider } from "./context/usuario_context";
import AppNavigation from "./routes/AppNavigation";

export default function Main() {
  return (
    <UsuarioProvider>
      <PostProvider>
        <AppNavigation></AppNavigation>
      </PostProvider>
    </UsuarioProvider>
  );
}
