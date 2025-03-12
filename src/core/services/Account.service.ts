import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, of, ReplaySubject, catchError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { IUser } from '../../shared/models/user';
import { IAddress } from '../../shared/models/address';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<IUser | null>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  loadCurrentUser(token: string) {
    if (token == null) {
      this.currentUserSource.next(null);
      return of(null);
    }

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get<IUser>(this.baseUrl + 'account', { headers }).pipe(
      map((user: IUser | null) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
        }
      }),
      catchError((error) => {
        console.error('Error loading current user:', error);
        return of(null);
      })
    );
  }

  login(values: any) {
    return this.http.post<IUser>(this.baseUrl + 'account/login', values).pipe(
      map((user: IUser | null) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
        }
      }),
      catchError((error) => {
        console.error('Error logging in:', error);
        return of(null);
      })
    );
  }

  register(values: any) {
    return this.http.post<IUser>(this.baseUrl + 'account/register', values).pipe(
      map((user: IUser | null) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
        }
      }),
      catchError((error) => {
        console.error('Error registering user:', error);
        return of(null);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
    this.router.navigateByUrl('/');
  }

  checkEmailExists(email: string) {
    return this.http.get(this.baseUrl + 'account/emailexists?email=' + email).pipe(
      catchError((error) => {
        console.error('Error checking email existence:', error);
        return of(null);
      })
    );
  }

  getUserAddress() {
    return this.http.get<IAddress>(this.baseUrl + 'account/address').pipe(
      catchError((error) => {
        console.error('Error fetching user address:', error);
        return of(null);
      })
    );
  }

  updateUserAddress(address: IAddress) {
    return this.http.put<IAddress>(this.baseUrl + 'account/address', address).pipe(
      catchError((error) => {
        console.error('Error updating user address:', error);
        return of(null);
      })
    );
  }
}
