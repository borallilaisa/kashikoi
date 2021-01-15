import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../../../services/user-service.service";
import {Router} from "@angular/router";
import {ValidationService} from "../../../services/validation.service";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-painel-administrativo',
  templateUrl: './painel-administrativo.component.html',
  styleUrls: ['./painel-administrativo.component.css']
})
export class PainelAdministrativoComponent implements OnInit {

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

    })}


}
