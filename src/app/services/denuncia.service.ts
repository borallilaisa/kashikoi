import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserServiceService} from "./user-service.service";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {

  constructor(public http: HttpClient,
              public userService: UserServiceService) { }

  getAllDenuncias(q){
    return new Promise((resolve, reject) => {

      let user:any = this.userService.getAuthUser();

      this.http.get(`${environment.appUrl}/user/pesquisar-denuncias?q=${q}&token=${user.token}`)
        .subscribe((data:any) => resolve(data), err => reject(err))
    })
  }

  enviarDenuncia(denuncia, idDenunciador, idDenunciado){
    return new Promise((resolve, reject) => {

      let user:any = this.userService.getAuthUser();

      this.http.post(`${environment.appUrl}/denuncia/enviar-denuncia/${idDenunciador}/${idDenunciado}?token=${user.token}`, denuncia)
        .subscribe((data:any) => resolve(data), err => reject(err))
    })
  }


}
