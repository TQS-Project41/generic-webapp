import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Delivery } from '../classes/Delivery';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient) { }

  getDeliveries() : Observable<Delivery[]>{
    return this.http.get<Delivery[]>(environment.PUBLIC_API + "delivery");
  }

  getDeliveriesByRiderID(id: number) : Observable<Delivery[]>{
    return this.http.get<Delivery[]>(environment.PUBLIC_API + "/courier/"+ id);
  }

}