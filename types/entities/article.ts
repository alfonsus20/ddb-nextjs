import { Data } from ".";

export type Article = {
  blurHash: string;
} & ArticleParams;

export type ArticleParams = {
  title: string;
  content: string;
  imageURL: string;
};

export type ArticleData = Article & Data;