import api from "../api";
import { APIResponse } from "../types/apiResponse";
import { LoginParams, RegisterParams } from "../types/entities/auth";
import { User, UserData } from "../types/entities/user";

export const login = (data: LoginParams): APIResponse<{ token: string }> => {
  return api.post(`login`, data);
};

export const register = (data: RegisterParams): APIResponse<UserData> => {
  return api.post(`register`, data);
};

export const getAuthenticatedUser = (): APIResponse<UserData> => {
  return api.get(`profile`);
};

export const editProfile = (body: User): APIResponse<UserData> => {
  return api.put(`profile`, body);
};

export const editProfileImage = (file: File): APIResponse<string> => {
  const formData = new FormData();
  formData.append("image", file);
  return api.put("profile/profileImage", formData);
};
