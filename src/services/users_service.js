import { API_ROUTE } from "../env/env";

export default function getUsers() {
  return new Promise((resolve, reject) => {
    fetch(API_ROUTE + "/users")
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => reject(error));
  });
}
