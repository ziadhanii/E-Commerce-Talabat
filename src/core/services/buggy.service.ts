import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuggyService {

  baseUrl = environment.apiUrl + '/Buggy';

  constructor(private http: HttpClient) { }

  get400Error(): Observable<any> {
    return this.http.get(this.baseUrl + '/bad-request');
  }

  get404Error(): Observable<any> {
    return this.http.get(this.baseUrl + '/not-found');
  }


  get401Error(): Observable<any> {
    return this.http.get(this.baseUrl + '/unauthorized');
  }


  get500Error(): Observable<any> {
    return this.http.get(this.baseUrl + '/server-error');
  }


  get400ValidationError() {
    return this.http.post(this.baseUrl + '/validation-error', {});
  }

}
