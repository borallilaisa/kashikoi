import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../../../services/user-service.service";
import Swal from "sweetalert2";
import * as moment from "moment";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-controlar-usuario',
  templateUrl: './controlar-usuario.component.html',
  styleUrls: ['./controlar-usuario.component.css']
})
export class ControlarUsuarioComponent implements OnInit {

  user:any = {usuario_perfil: {}};
  usuarios: any = [];
  q:string = "";

  constructor(private http : HttpClient, public userService: UserServiceService) {
    this.searchUser(this.q);
  }

  ngOnInit(): void {
  }

  searchUser(q) {

    let loading:any = Swal.fire({didOpen: () => Swal.showLoading()})

    this.userService.findUser(q).then((data:any) => {
      this.usuarios = data;

      console.log(data);

      loading.close();
    }).catch((err:any) => {
      loading.close();
    })

  }

 validateKeyPress(event) {
    if(event.code == "Enter")
      this.searchUser(this.q);
  }

 formatDate(date) {
    moment.locale('pt-br');

    return moment(date, 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY HH:mm')
  }

  desbloquearUsuario(user){
    Swal.fire({
      title: 'Deseja desbloquear esse usuário?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, desbloquear!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.userService.unblockUser(user.id).then((data:any) => {

          let aux = this.usuarios.map(e => e.id).indexOf(data.id);
          if(aux >= 0) this.usuarios[aux] = data;


        }).catch((err:any) => {
          console.log(err);


        })

        Swal.fire(
          'Desbloqueado!',
          'Esse usuário agora está livre para aproveitar o site!.',
          'success'

        )

      }
    })

  }
  deletarUsuario(user){
    Swal.fire({
      title: 'Você tem certeza de que deseja bloquear esse usuário?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, bloquear!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.userService.softDeleteUser(user.id).then((data:any) => {

          let aux = this.usuarios.map(e => e.id).indexOf(data.id);
          if(aux >= 0) this.usuarios[aux] = data;


        }).catch((err:any) => {
          console.log(err);


        })

        Swal.fire(
          'Bloqueado!',
          'Esse usuário foi bloqueado com sucesso!.',
          'success'

        )

      }
    })


  }

}
