import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../model/user.model';
import { Login } from '../model/login.model';
import { MatSnackBar } from '@angular/material'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  // user : User;
  private token: string;
  private authStatusListener = new Subject<boolean>();
   private isAuthenticated: boolean = false; 
  private tokenTimer:  any;
  private type: string;
  private email: string;
  private name: string;

  constructor(private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar) { }

    getToken(){ return this.token; }
   
    getIsAuth(){ return this.isAuthenticated; }
    getAuthStatusListener(){ return this.authStatusListener.asObservable(); }

    getUserType(){ return this.type };
    
    createUser( user:User ){
      console.log(user)
      return this.http.post('http://localhost:5000/api/v1/users/register', user);
    }
    
    userLogin(user : Login){
      this.http.post<{token: string, expiresIn: number, name: string, type: string,
                      }>('http://localhost:5000/api/v1/users/login', user)
        .subscribe(res => {
          const token = res.token;
          this.token = token;
          console.log(token);
          if(token){
            const expiresInDuration = res.expiresIn;
            this.setAuthTimer(expiresInDuration); 
            this.name = res.name;
            console.log(this.name); 
            this.type = res.type;
            console.log(this.type);         
            this.isAuthenticated = true;
            this.authStatusListener.next(true);
            const now = new Date();
            const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
            //console.log(expirationDate);
            this.saveAuthData(token, expirationDate, this.name, this.type);
            this.router.navigate(['/gallery'])
            } this.snackBar.open(res['message'], '', {
              duration: 50,
              verticalPosition: 'top'
          });
        });
      }  
      
  autoAuthUser(){
    const authInformation = this.getAuthData();
    if(!authInformation){
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    //console.log(authInformation, expiresIn);
    if(expiresIn > 0){
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.name = authInformation.name;
      this.type = authInformation.type;
      this.setAuthTimer( expiresIn / 1000 );
      this.authStatusListener.next(true);
    }
  }
                    
  logout(){
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.type = null;
    this.name = null;
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/home']);
  }
                    
  private setAuthTimer(duration: number){
    //console.log("setting timer:" + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }
                    
  // to save data to local storage so that token should not expire when pages gets refresh
  private saveAuthData(token: string, expirationDate: Date, name: string, type: string){
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('lastname', name);
    localStorage.setItem('type', type);
  }
                      
  // clear the data after logout
  private clearAuthData(){
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("name");
    localStorage.removeItem("type");
  }
                    
  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    let name = localStorage.getItem("name");
    let type = localStorage.getItem("type");
    if(!token || !expirationDate){
      return;
    } return {
      token: token,
      expirationDate: new Date(expirationDate),
      name: name,
      type: type
    }
  }
                    
                    
  private _listners = new Subject<any>();
  listen(): Observable<any> {
    return this._listners.asObservable();
  }
  filter(filterBy : string){
    this._listners.next(filterBy);
  }
}
