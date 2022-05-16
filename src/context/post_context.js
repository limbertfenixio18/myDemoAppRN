import { createContext, useReducer } from "react";

const initialState = {
  post: {
    userId: 0,
    id: 0,
    title: "",
    body: "",
    thumbnailUrl: "",
    url: "",
  },
};

const postReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case "guardar_post":
      console.log("guardando post");
      return { ...state, post: payload.data };
    default:
      return state;
  }
};

const PostContext = createContext(initialState);

const PostProvider = ({ children }) => {
  const [post, postAction] = useReducer(postReducer, initialState);

  return (
    <PostContext.Provider value={[post, postAction]}>
      {children}
    </PostContext.Provider>
  );
};

export { PostProvider, PostContext };
