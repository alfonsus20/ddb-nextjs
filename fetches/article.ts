import api from "../api";
import { APIResponse } from "../types/apiResponse";
import { ArticleData, ArticleParams } from "../types/entities/article";

export const getArticles = (
  params?: string
): APIResponse<Array<ArticleData>> => {
  return api.get(`articles?${params}`);
};

export const getAllArticles = (): APIResponse<Array<ArticleData>> => {
  return api.get("articles/findAll");
};

export const getArticleById = (id: number): APIResponse<ArticleData> => {
  return api.get(`articles/${id}`);
};

export const editArticle = (id: number, body : ArticleParams): APIResponse<ArticleData> => {
  return api.put(`articles/${id}`, body);
};

export const createArticle = (
  data: ArticleParams
): APIResponse<ArticleData> => {
  return api.post("articles", data);
};

export const deleteArticleById = (id: number): APIResponse<ArticleData> => {
  return api.delete(`articles/${id}`);
};

export const uploadArticleImage = (file: File): APIResponse<string> => {
  const formData = new FormData();
  formData.append("image", file);
  return api.post("articles/imageUpload", formData);
};
