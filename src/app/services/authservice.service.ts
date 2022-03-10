import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfirmAccountRequest,ConfirmAccountResponse } from '../services/LoginModel';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  ConfirmAccountUrl=environment.confirmaccounturl;

  constructor(public http:HttpClient ) { }

  ConfirmAccountNo(data:ConfirmAccountRequest): Observable<ConfirmAccountResponse>{
    return this.http.post<ConfirmAccountResponse>(this.ConfirmAccountUrl,data,{responseType:'json'});
  }
}
