import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service'; 
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-perfil-pessoal',
  templateUrl: './perfil-pessoal.component.html',
  styleUrls: ['./perfil-pessoal.component.css']
})
export class PerfilPessoalComponent implements OnInit {

  user:any = {usuario_perfil: {}};
  user_id:any = null;
  ensinar:any = [];
  aprender:any = [];

  constructor(public userService: UserServiceService, private route: ActivatedRoute) {
    this.buscaDadosUser();
    moment.locale('pt-br');
    console.log(moment().format('LLLL'));
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.user_id = params.get("id");

      if(this.user_id) {
        this.getUser(this.user_id);
        this.getUserAssuntos(this.user_id);
      }
      
    })
  }

  getImage() {

    return this.user.usuario_perfil.profilePic ? this.user.usuario_perfil.profilePic : "/assets/img/profilepic.png";

  }

  getUser(id) {
    this.userService.getUserById(this.user_id).then((data:any) => {
      this.user = data;
    }).catch((err:any) => {
      console.log(err);
    })
  }


  getUserAssuntos(id) {
    this.userService.getUserSubjects(id).then((data:any) => {
      if(data) {

          let aux_ensinar:any = data.filter(e => e.tipo == 2);

          if(aux_ensinar.length > 0)
            this.ensinar = aux_ensinar.map(e => e.assunto.titulo);

          let aux_aprender:any = data.filter(e => e.tipo == 1);

          if(aux_aprender.length > 0)
            this.aprender = aux_aprender.map(e => e.assunto.titulo);

      }
    }).catch((err:any) => {
      console.log(err);
    })
  }

  buscaDadosUser() {
    return new Promise((resolve, reject) => {
      this.userService.getUserData().then((data:any) => {
        this.user = data;
        console.log(data);
         resolve(data);

      }).catch((err:any) => {
        console.log(err);
        reject(err);
      })
    })
}



}
