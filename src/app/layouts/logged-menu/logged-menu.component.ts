import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../../services/user-service.service";
import {ValidationService} from "../../services/validation.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-logged-menu',
  templateUrl: './logged-menu.component.html',
  styleUrls: ['./logged-menu.component.css']
})
export class LoggedMenuComponent implements OnInit {

  constructor(public userService: UserServiceService,
              public router : Router,
              public validation: ValidationService,
              private authService : AuthService) { }

  ngOnInit(): void {
  }

  logOut(){
      this.userService.logOut().then(() => {
        this.router.navigate(['/']);
      }).catch((err:any) => {
        console.log(err);

      })

  }
}
