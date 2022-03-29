import axios from "axios";

export const getToken = async () => {
 return await axios.post("auth/login", {
    email: "superuser",
    password: "superuser",
  }).then(resp => {
    return 'Bearer_' + resp.data.token
  })
};
