import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any = {usuario_perfil: {}};
  control:string = 'conversas';
  friend_list:any = [];

  constructor(private router: Router,
              public userService: UserServiceService) {

    this.user = this.userService.getAuthUser();
    this.friend_list = this.userService.getLocalFriends();

  }

  ngOnInit(): void {

    this.buscaDadosUser();
    //this.getScore();


  }


  getImage() {
    return this.user.usuario_perfil && this.user.usuario_perfil.profilePic ? this.user.usuario_perfil.profilePic : "/assets/img/profilepic.png";

  }

  getScore(){
    return new Promise((resolve, reject) => {
      this.userService.getScore().then((data: any) => {
        this.user = data;
        console.log(data);
        resolve(data);

      }).catch((err: any) => {
        console.log(err);
        reject(err);
      })
    })
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

  listFriends() {
    this.userService.listFriends().then((data:any) => {

      this.userService.storeFriends(data);

      this.friend_list = data;

    })
  }

  friendStatus(destinatario) {
    if(this.friend_list.length == 0)
      return "not_friend";
    else {
      let aux:any = this.friend_list.filter(e => e.id_usuario_1 == destinatario.id || e.id_usuario_2 == destinatario.id);

      if(aux.length == 0)
        return "not_friend";
      else
        return aux[0].ativa ? "friend" : "sent_request";
    }
  }

}
