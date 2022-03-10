import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DashboardCustomerDetailsRequest,DashboardCustomerDetailsResponse,FundAccountRequest,FundAccountResponse,TransHistoryReq,TransHistoryResp } from '../services/DashboardModel';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  CustomerDetailsUrl=environment.customerdetailsurl;
  fundaccounturl=environment.fundaccounturl;
  transhistoryurl=environment.transhistoryurl;
  constructor(public http:HttpClient) { }


  CustomerDetails(data:DashboardCustomerDetailsRequest): Observable<DashboardCustomerDetailsResponse>{
    return this.http.post<DashboardCustomerDetailsResponse>(this.CustomerDetailsUrl,data,{responseType:'json'});
  }

  CreditCustomersAccount(data:FundAccountRequest):Observable<FundAccountResponse>{
    return this.http.post<FundAccountResponse>(this.fundaccounturl,data,{responseType:'json'});
  }
  TransHistory(data:TransHistoryReq):Observable<TransHistoryResp[]>{
    return this.http.post<TransHistoryResp[]>(this.transhistoryurl,data,{responseType:'json'});
  }
}
