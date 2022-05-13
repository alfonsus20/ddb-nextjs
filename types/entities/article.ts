import { Data } from ".";

export type Article = {
  title: string;
  content: string;
  imageURL: string;
};

export type ArticleData = Article & Data;
