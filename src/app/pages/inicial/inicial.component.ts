import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/login';
import { AuthService } from '../../services/auth.service';
import { ValidationService } from '../../services/validation.service';
import {ContatoService} from '../../services/contato.service';
import * as $ from 'jquery';
import Swal from "sweetalert2";


@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})

export class InicialComponent implements OnInit {

  open:boolean = false;
  errors:any = []
  contato: any =[]
  user:any = { email: "admin", senha: "admin@123" };
  message: string;
  public loading = false;

  constructor(public userService: UserServiceService,
              public contatoService: ContatoService,
              public router : Router,
              public validation: ValidationService,
              private authService : AuthService) {
      if(window.localStorage.getItem('user')) {
        console.log(window.localStorage.getItem('user'));
      }
  };

  ngOnInit(): void {


  }

  login() {
    this.loading = true;
    this.validationRegister(this.user, true).then((data:any) => {

        this.userService.login(this.user).then((data:any) => {
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('user', JSON.stringify(data));
          this.loading = false;

          if(data.level == 1)
          this.router.navigate(['/inicio']);

          else
          this.router.navigate(['/adm']);

        }).catch((err:any) => {
            console.log(err);
          alert('Erro ao efetuar login');
            this.loading = false;
        })
    }).catch((err:any) => {
      alert('Erro ao efetuar login');
      this.loading = false;
    })
  }

  changeBox() {


        if(!this.open){

          this.open = !this.open;

          $("#newUserButton").addClass('opened');
          $("#closeButtonRegister").css("display", "inline");
          $("#hidden-form").fadeIn();
          $("#final-banner").addClass('biggerBackground');

        }
  }

  closeBox(){
    if(this.open){

      this.open = !this.open;

      $("#newUserButton").removeClass('opened');
      $("#hidden-form").fadeOut();
      $("#closeButtonRegister").css("display", "none");
      $("#final-banner").removeClass('biggerBackground');
  }


  }

  userRegister(user:any){
    this.loading = true;

    this.validationRegister(user).then((data:any) => {

           this.userService.register(user).then((data:any) => {

            localStorage.setItem('user', JSON.stringify(data));

            this.router.navigate(['/inicio']);

            // this.userLogin(user);
             this.loading = false;


           }).catch((err:any) => {
            this.loading = false;

            if(err.error && err.error.message)
              this.errors.push(err.error.message);

              setTimeout(() => {
                if(this.errors.length > 0) {
                  $("#validateMessage").addClass('ativo');
                  $("#final-banner").css("min-height","900px;");
                  $("#userEmail").focus();
                }
              }, 200);
      });

    }).catch((err:any) => {
      this.loading = false;


      console.log(err);

    })
  }

  EnviarContato(contato){

    this.contatoService.enviarContato({contato: contato}).then((data:any) => {
      console.log(data);


    }).catch((err:any) => {
      console.log(err);

    })

  }

  userLogin(user:any){

    this.validationRegister(user).then((data:any) => {

           this.userService.login(user).then((data:any) => {

              window.localStorage.set('user', data);

              this.router.navigate(['/inicio']);

           }).catch((err:any) => {

      });

    }).catch((err:any) => {

      console.log(err);

    })
  }

  validationRegister(user:any, isLogin:boolean = false) {
    return new Promise((resolve, reject) => {
      this.errors = [];

        if(!user.email)
          this.errors.push("O campo e-mail não está preenchido! Verifique o campo e tente novamente.");

        //console.log(this.validation.emailIsValid(user.email));

        if(!this.validation.emailIsValid(user.email))
          this.errors.push("O formato do e-mail é incorreto.");

        if(!user.senha)
          this.errors.push("O campo senha não está preenchido! Verifique o campo e tente novamente.");

        if(!isLogin) {

          if(!user.nome)
            this.errors.push("O campo nome não está preenchido! Verifique o campo e tente novamente.");

          if(user.senha != user.confirmasenha)
            this.errors.push("A senhas não são iguais.");

        }

         /*if(!this.validation.passwordIsValid(user.senha))
          this.errors.push("A senha precisa ter no minimo 8 caracteres, sendo no minimo uma letra maiúscula, uma letra minuscula, um digito (0..9) e um carácter especial (@#$%^&+=)..");
        */

          if(this.errors.length > 0) {
            $("#validateMessage").addClass('ativo');
            $("#final-banner").css("min-height","900px;");
            $("#userEmail").focus();
          }


        setTimeout(() => this.errors.length == 0 ? resolve(user) : reject(user));
    })
  }

}
