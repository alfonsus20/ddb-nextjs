import api from "../api";

export const setAuthToken = (token: string) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const removeAuthToken = () => {
  delete api.defaults.headers.common["Authorization"];
};
