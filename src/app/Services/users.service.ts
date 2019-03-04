import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  urlGet = 'https://reqres.in/api/users?page=2';
  urlPost = 'https://reqres.in/api/users';

  constructor(private http:HttpClient) { }


  getUsers() {
    return this.http.get<any>( this.urlGet );
  }

  postUser( user:User ): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<User>( this.urlPost, user , httpOptions );
  }

  putUser(id:number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const url = `${this.urlPost}/${id}`;
    return this.http.put(url, httpOptions);
  }

  deleteUser(id:number): Observable<{}> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const url = `${this.urlPost}/${id}`;
    return this.http.delete(url, httpOptions);
  }
}
