import axios from "axios";

export default axios.create({
  baseURL: "https://ddb-backend.herokuapp.com",
});
