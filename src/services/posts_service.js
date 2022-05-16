import { API_ROUTE } from "../env/env";

const getPosts = () => {
  return new Promise((resolve, reject) => {
    fetch(API_ROUTE + "/posts")
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => reject(error));
  });
};

const getPhotos = (id_user) => {
  return new Promise((resolve, reject) => {
    fetch(API_ROUTE + "/photos")
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => reject(error));
  });
};

export { getPhotos, getPosts };
