import axios from "axios";
import Cookie from "js-cookie";

export default axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    Authorization: `Bearer ${Cookie.get("token")}`,
  },
});
