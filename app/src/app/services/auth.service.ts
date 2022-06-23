import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logIn(json: JSON) : Observable<Object> {
    let req =  this.http.post(environment.PUBLIC_API + "login", json)

    req.subscribe({
      next: (info: any) => {
        console.log("sucesso", info)
        localStorage.setItem('token', info["token"]);

      }, 
      error: (error) => {
        console.log("[ERROR]", error);
      }
    });
    
    return req
  }

  register(json: JSON) {
    return this.http.post(environment.PUBLIC_API + "business", json);
  }

}