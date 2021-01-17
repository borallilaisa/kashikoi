import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {UserServiceService} from "./user-service.service";

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(public http: HttpClient, public userService: UserServiceService) { }

  getAllContatos(q){
    return new Promise((resolve, reject) => {

      let user:any = this.userService.getAuthUser();

      this.http.get(`${environment.appUrl}/contato/pesquisar-contato?q=${q}&token=${user.token}`)
        .subscribe((data:any) => resolve(data), err => reject(err))
    })
  }

  enviarContato(contato){

    return new Promise((resolve, reject) => {

      this.http.post( `${environment.appUrl}/contato/registra-contato`, contato)
        .subscribe((data:any) => resolve(data), (err:any) => reject(err));

    })
  }

  enviarMensagem(mensagem){

    return new Promise((resolve, reject) => {

      this.http.post( `${environment.appUrl}/contato/enviar-mensagem`, mensagem)
        .subscribe((data:any) => resolve(data), (err:any) => reject(err));

    })
  }



}
