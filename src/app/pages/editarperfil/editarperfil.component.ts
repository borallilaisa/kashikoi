import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import {ActivatedRoute, Router} from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.component.html',
  styleUrls: ['./editarperfil.component.css']
})
export class EditarperfilComponent implements OnInit {

  user:any = {usuario_perfil: {}};
  public loading = false;
  tab_control:string = 'nav-home';

  constructor(public userService: UserServiceService, private route: ActivatedRoute) {
    this.buscaDadosUser();
    moment.locale('pt-br');
    console.log(moment().format('LLLL'));
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if(params.get("assunto"))
        this.tab_control = params.get("assunto");
    })


  }


  onFileChanged(event) {

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>{

      this.userService.uploadPhoto(reader.result).then((data:any) => {
          this.user = data;
      }).catch((err:any) => {

      })

    }
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

  /**/

  getImage() {

    return this.user.usuario_perfil.profilePic ? this.user.usuario_perfil.profilePic : "/assets/img/profilepic.png";

  }


  async registraDados(user) {
   Swal.fire({
      title: 'Digite sua senha',
      input: 'password',
      inputLabel: 'Password',
      inputPlaceholder: 'Digite sua senha',

    }).then((data:any) => {

      /*isConfirmed: true
      isDenied: false
      isDismissed: false*/

      if(data.isConfirmed && data.value) {
        if (!user.name && !user.email){

        }
         else {
          let loading:any = Swal.fire({didOpen: () => Swal.showLoading()})

           user.password = data.value;
          this.userService.registerInfoPerfil(user).then((data:any)=>{
              console.log(data);

            loading.close();

            Swal.fire('Sucesso!', 'Informações salvas com sucesso!', 'success');
          }).catch((err:any) =>{
            console.log(err);
            loading.close();

            Swal.fire('Erro!', 'Não foi possível atualizar seu perfil, verifique os dados ou entre em contato com o suporte!', 'success');
          })
        }
      }

      console.log(data);
    });
  }

}
