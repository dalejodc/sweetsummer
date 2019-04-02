import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../.././../models/user'
import { userInfo } from 'os';

@Component({
     selector: 'app-login',
     templateUrl: './login.component.html',
     styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

     user: User = new User();

     constructor(private _router: Router) { }

     ngOnInit() {
     }

     login() {

          console.log(this.user.username)

          if(this.user.username === "admin" && this.user.password ==="admin"){
               this._router.navigateByUrl('/dashboard/category')
               console.log("here");
          }

          
     }

}
