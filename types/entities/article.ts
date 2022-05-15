import { Data } from ".";

export type Article = {
  title: string;
  content: string;
  imageURL: string;
  blurHash: string;
};

export type ArticleData = Article & Data;
