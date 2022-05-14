import axios from "axios";
import Cookie from "js-cookie";

export default axios.create({
  baseURL: "https://ddb-backend.herokuapp.com",
  headers: {
    Authorization: `Bearer ${Cookie.get("token")}`,
  },
});
