import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { baseurl } from 'src/app/models/base';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user: any;
  private loggedIn = false;
  private token: any;
  
  constructor(
    private http: HttpClient,
    private router: Router,
    public jwtHelper: JwtHelperService
  ) {}

  setLoggedIn(loggedIn: boolean, token?: string) {
    this.loggedIn = loggedIn;
    this.token = token;
  };

  getToken(): string {
    const token = localStorage.token;
    return token;
  }

  login(user:any) {
    if (user.email !== "" && user.password !== "") {
      return this.request("POST", "login", {
        email: user.email,
        password: user.password,
      }).subscribe((response) => {
        console.log(response)
        this.token = response;
        this.setLoggedIn(true, this.token);

        const userData = {
          token: this.token,

        };

        localStorage.setItem("token", this.token);
        var decoded:any = jwt_decode(this.token);
        console.log(decoded);
        localStorage.setItem("id",decoded['nameid']);
        if  (decoded['role'] == "Employee") {
          this.router.navigateByUrl("", { replaceUrl: true });

        }
        if(decoded['role']=="Admin"){
          this.router.navigateByUrl("admin-nav",{replaceUrl:true})
        }
        


          });
        }
        return 1
  }

  request(method: string, route: string, data?: any) {
    const header = this.loggedIn
      ? { Authorization: `Bearer ${this.token}` }
      : undefined;

    return this.http.request(method, baseurl + route,{
      body: data,
      responseType: "text",
      observe: "body",
      headers: header,
    }).pipe(catchError(error => {
      console.log(error.error)
      if (error.error instanceof ErrorEvent) {
        window.alert(`Error: ${error.error}`);
      } else {
        window.alert(`Error: ${error.error}`);
      }
      return of([]);
    }));
  }
}
