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
}


export class BuscaAssuntosCadastradosService {

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
}
