import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class VotingService {
public url:string;
  constructor(
   private _http: HttpClient
   /*  private __http: Http*/
  ){
    this.url = Global.url
  }
  testService(){
    return 'probando el servicio de Angular';
  }
  getStudents(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'students', {headers: headers});
  }
}