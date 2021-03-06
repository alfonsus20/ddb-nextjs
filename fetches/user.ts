import api from "../api";
import { APIResponse, APIResponsePaginated } from "../types/apiResponse";
import { Paginated } from "../types/entities";
import { User, UserData } from "../types/entities/user";

export const getUsers = (
  params?: object
): APIResponsePaginated<Array<UserData> & Paginated> => {
  return api.get(`users`, { params });
};

export const getAllUsers = (
  isGraduated: boolean = false
): APIResponse<Array<UserData>> => {
  return api.get("users/findAll", {
    params: { isGraduated, isVerified: true },
  });
};

export const getUserById = (id: number): APIResponse<UserData> => {
  return api.get(`users/${id}`);
};

export const deleteUser = (id: number): APIResponse<UserData> => {
  return api.delete(`users/${id}`);
};

export const uploadProfileImage = (file: File): APIResponse<string> => {
  const formData = new FormData();
  formData.append("image", file);
  return api.post("users/profileImageUpload", formData);
};

export const promoteToAdmin = (id: number): APIResponse<null> => {
  return api.get(`/users/${id}/makeAdmin`);
};

export const verifyUser = (id: number): APIResponse<null> => {
  return api.get(`/users/${id}/verify`);
};

export const editUser = (id: number, body: User): APIResponse<null> => {
  return api.put(`/users/${id}`, body);
};
