import { Injectable } from '@angular/core';
import articleJson from '../assets/articles.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadArticlesService {

  private jsonURL = '../../assets/articles.json';
  constructor(private http: HttpClient) {
    this.getArticles().subscribe(data => {
      return data;
    });
  }
  public getArticles(): Observable<any> {
    return this.http.get(this.jsonURL);
  }
}
