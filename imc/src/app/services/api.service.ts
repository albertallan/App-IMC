import { Injectable } from '@angular/core';
import {  HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient : HttpClient) { }

  public getCalculos(){
    return this.httpClient.get('http://localhost:3000/api/todo/');
  }
  public postCalculos(calculos){
    return this.httpClient.post('http://localhost:3000/api/todo', calculos);
  }
}
