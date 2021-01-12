import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'; 
import { ValidationService } from '../../services/validation.service'; 
import { UserServiceService } from '../../services/user-service.service'; 
import Swal from 'sweetalert2';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-recuperarsenhafinalizar',
  templateUrl: './recuperarsenhafinalizar.component.html',
  styleUrls: ['./recuperarsenhafinalizar.component.css']
})
export class RecuperarsenhafinalizarComponent implements OnInit {

  user:any = {};
  errors:any = {};
  token:any;
  
  constructor(public userService: UserServiceService,
    public validation: ValidationService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.token = params.get("token");

           
    })
  }

  savePassword(user) {

    let loading:any = Swal.fire(
      {
        didOpen: () => {
          Swal.showLoading()
        }
      });

      let tokenSenha = this.token;

    
    this.validationNewPassword(user).then((data) => {

      this.userService.savePassword(tokenSenha, user.senha).then((data:any) => {
        Swal.fire(
          'Prontinho!',
          'Sua senha está salva, clique aqui para voltar a tela inicial!',
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

  validationNewPassword(user:any) {
    return new Promise((resolve, reject) => {
      this.errors = {email: []};

      if(user.senha != user.confirmaSenha)
      this.errors.email.push("A senhas não são iguais.");

      if(!this.validation.passwordIsValid(user.senha))
      this.errors.email.push("A senha precisa ter no minimo 8 caracteres, sendo no minimo uma letra maiúscula, uma letra minuscula, um digito (0..9) e um carácter especial (@#$%^&+=)..");
    

        setTimeout(() => this.errors.email.length == 0 ? resolve(user) : reject(user));
        
    })
  }

}
