import { Article } from "src/app/models/article.model";

export interface dataState{
    isLoading: boolean;
    isSuccess: boolean;
    articleList: Article[];
    error:string;
}