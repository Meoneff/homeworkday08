import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getArticle(){
    return this.http.get<Article[]>(
      'https://social.runwayclub.dev/api/articles/latest'
    )
  }
}
