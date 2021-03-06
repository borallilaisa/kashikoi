import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { NgxLoadingModule} from 'ngx-loading';
import { ngxLoadingAnimationTypes} from 'ngx-loading';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class CadastraAssuntosService {
  public loading = false;
  constructor(public http: HttpClient,
              public userService: UserServiceService) { }

  storeAssuntos(assuntos) {
    let user:any = this.userService.getAuthUser();

    return new Promise((resolve, reject) => {
     
      this.http.post( `${environment.appUrl}/assunto/store?token=${user.token}`, assuntos)
        .subscribe((data:any) => resolve(data), (err:any) => reject(err));
      
    })
  }
}
