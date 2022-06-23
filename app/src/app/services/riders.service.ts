import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Rider } from '../classes/Rider';
import { Delivery } from '../classes/Delivery';
import { Page } from '../classes/Page';

@Injectable({
  providedIn: 'root'
})
export class RidersService {

  constructor(private http: HttpClient) { }

  getRiders() : Observable<Rider[]>{
    return this.http.get<Rider[]>(environment.PUBLIC_API + "couriers");
  }

  getActiveRiders() : Observable<Page<Delivery>>{
    return this.http.get<Page<Delivery>>(environment.PUBLIC_API + "couriers/listen");
  }

  accept(id: number) {
    return this.http.post(environment.PUBLIC_API + "couriers/"+ id +"/accept", {});
  }

  block(id: number) {
    return this.http.post(environment.PUBLIC_API + "couriers/"+ id +"/block", {});
  }

  applied() : Observable<Map<string, any>[]> {
    return this.http.get<Map<string, any>[]>(environment.PUBLIC_API + "couriers/applied");
  }

  active() : Observable<Map<string, any>[]> {
    return this.http.get<Map<string, any>[]>(environment.PUBLIC_API + "couriers/active");
  }

}