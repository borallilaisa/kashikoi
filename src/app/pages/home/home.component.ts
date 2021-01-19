import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  control:string = 'conversas';
  user:any = {usuario_perfil: {}};

  constructor(private router: Router, public userService: UserServiceService) {
    this.buscaDadosUser();
    this.user = this.userService.getAuthUser();

  }

  ngOnInit(): void {



  }


  getImage() {
    return this.user.usuario_perfil && this.user.usuario_perfil.profilePic ? this.user.usuario_perfil.profilePic : "/assets/img/profilepic.png";

  }


  buscaDadosUser() {
    return new Promise((resolve, reject) => {
      this.userService.getUserData().then((data: any) => {
        this.user = data;
        console.log(data);
        resolve(data);

      }).catch((err: any) => {
        console.log(err);
        reject(err);
      })
    })
  }

  openPerfil(id) {
    this.router.navigate([`/perfil/${id}`]);
  }



}
