import api from "../api";
import { APIResponse } from "../types/apiResponse";
import { Article, ArticleData } from "../types/entities/article";

export const getArticles = (params ?: string): APIResponse<Array<ArticleData>> => {
  return api.get(`articles?${params}`);
};

export const getArticleById = (id: number): APIResponse<ArticleData> => {
  return api.get(`articles/${id}`);
};
