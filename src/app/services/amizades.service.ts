import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserServiceService} from "./user-service.service";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AmizadesService {

  constructor(public http: HttpClient,
              public userService: UserServiceService) {}

  getFriends(user) {

    return new Promise((resolve, reject) => {

      this.http.get( `${environment.appUrl}/amizades/listar/${user.id}?token=${user.token}`)
        .subscribe((data:any) => resolve(data), (err:any) => reject(err));

    });

  }

  unfriend(user, friend_id) {

    return new Promise((resolve, reject) => {
      this.http.delete(`${environment.appUrl}/amizades/${user.id}/${friend_id}/desfazer-amizade?token=${user.token}`)
        .subscribe((data:any) => resolve(data), (err:any) => reject(err));
    })
  }
}
