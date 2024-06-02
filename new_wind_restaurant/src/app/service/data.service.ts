import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private SQL_TO_JSON = "http://localhost/project/new_wind_restaurant/sql_to_json.php";
  private JSON_TO_SQL = "http://localhost/project/new_wind_restaurant/json_to_sql.php";
  private DATA_JSON = "http://localhost:3000";

  accountToDisplay: string = "phat";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getDataFromJson(): Observable<any> {
    const url = `${this.DATA_JSON}/account`;
    return this.http.get<any>(url);
  }

  getDataFromSQL(): Observable<any> {
    return this.http.get<any>(this.SQL_TO_JSON);
  }

  pushToJson(account: any): Observable<any> {
    const url = `${this.DATA_JSON}/account`;
    return this.http.post<any>(url, account, this.httpOptions);
  }

  pushToSQL(): Observable<any> {
    return this.http.get<any>(this.JSON_TO_SQL);
  }

  sendAccount() {
    return this.accountToDisplay;
  }
}
