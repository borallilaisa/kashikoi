import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service'; 
import { ValidationService } from '../../services/validation.service'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperarsenha',
  templateUrl: './recuperarsenha.component.html',
  styleUrls: ['./recuperarsenha.component.css']
})
export class RecuperarsenhaComponent implements OnInit {

  errors:any = {};
  user:any = {};

  constructor(public userService: UserServiceService,
              public validation: ValidationService) { }

  ngOnInit(): void {
  }

  recoverPassword(user) {

    let loading:any = Swal.fire(
      {
        didOpen: () => {
          Swal.showLoading()
        }
      });

    //validacoes
    this.validationRecover(user).then((data) => {

      this.userService.recoverPassword(user.email).then((data:any) => {
        Swal.fire(
          'Prontinho!',
          'Um e-mail foi enviado para você!',
          'success'
        );

        loading.close();

      }).catch((err:any) => {
        Swal.fire(
          'Eita!',
          'Houve um equivoco!',
          'error'
        );

        loading.close();

      })

    }).catch((err:any) => {
      loading.close();
    })

  }

  validationRecover(user:any) {
    return new Promise((resolve, reject) => {
      this.errors = {email: []};

        if(!user.email)
          this.errors.email.push("O campo e-mail não está preenchido! Verifique o campo e tente novamente.");

        if(!this.validation.emailIsValid(user.email))
          this.errors.email.push("O formato do e-mail é incorreto.");

        setTimeout(() => this.errors.email.length == 0 ? resolve(user) : reject(user));
    })
  }

}
