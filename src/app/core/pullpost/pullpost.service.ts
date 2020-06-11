import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PullpostService {

  posts: String[];

  constructor(private http: HttpClient) { }

  pull = () => {
    return this.http.get<any>('	https://d2hdty2j6b.execute-api.us-east-1.amazonaws.com/prod/pullRandomPost');
  }
  
}
