import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})

export class BuscaAssuntosService {

  constructor(public http: HttpClient,
              public userService: UserServiceService) { }

  get(q:string = null) {

      let user:any = this.userService.getAuthUser();

      q = q ? q : "";

      return new Promise((resolve, reject) => {
        this.http.get( `${environment.appUrl}/assunto?token=${user.token}&q=${q}`)
          .subscribe((data:any) => resolve(data), (err:any) => reject(err));
      })
  }

  approveAssunto(id){

    return new Promise((resolve, reject) => {

      let user:any = this.userService.getAuthUser();
      this.http.post(`${environment.appUrl}/assunto/liberar-assunto?token=${user.token}`, {id: id})
        .subscribe((data:any) => resolve(data), err => reject(err))
    })

  }

  reativarAssunto(id){

    return new Promise((resolve, reject) => {

      let user:any = this.userService.getAuthUser();
      this.http.post(`${environment.appUrl}/assunto/ativar-assunto?token=${user.token}`, {id: id})
        .subscribe((data:any) => resolve(data), err => reject(err))
    })

  }

  softDeleteAssunto(id){
    return new Promise((resolve, reject) => {
      let user:any = this.userService.getAuthUser();
      this.http.post(`${environment.appUrl}/assunto/inativar-assunto?token=${user.token}`, {id: id})
        .subscribe((data:any) => resolve(data), err => reject(err))
    })
  }

  getAllAssuntos(q){
    return new Promise((resolve, reject) => {

      let user:any = this.userService.getAuthUser();

      this.http.get(`${environment.appUrl}/assunto/pesquisar-assunto?q=${q}&token=${user.token}`)
        .subscribe((data:any) => resolve(data), err => reject(err))
    })
  }
}
