import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ResultService {

  _url = environment.pathService;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private _http: HttpClient) { }

  register(data) {
    return this._http.post<any>(this._url, data, { headers: this.httpHeaders });
  }


}