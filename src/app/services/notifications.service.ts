import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {UserServiceService} from "./user-service.service";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(public http: HttpClient,
              public userService: UserServiceService) { }

  getNotifications(){
    return new Promise((resolve, reject) => {

      let user:any = this.userService.getAuthUser();

      this.http.get(`${environment.appUrl}/notificacoes/${user.id}?token=${user.token}`)
        .subscribe((data:any) => resolve(data), err => reject(err))
    })
  }

  setReadNotification(notification_id){
    return new Promise((resolve, reject) => {

      let user:any = this.userService.getAuthUser();

      this.http.post(`${environment.appUrl}/notificacoes/${notification_id}/lido?token=${user.token}`, {})
        .subscribe((data:any) => resolve(data), err => reject(err))
    })
  }

  confirmFriend(notification_id, friendship_id) {
    return new Promise((resolve, reject) => {

      let user:any = this.userService.getAuthUser();

      this.http.post(`${environment.appUrl}/notificacoes/${notification_id}/add-amigo/${friendship_id}?token=${user.token}`, {})
        .subscribe((data:any) => resolve(data), err => reject(err))
    })
  }

  refuseFriend(notification_id, friendship_id) {
    return new Promise((resolve, reject) => {

      let user:any = this.userService.getAuthUser();

      this.http.post(`${environment.appUrl}/notificacoes/${notification_id}/recusar-amigo/${friendship_id}?token=${user.token}`, {})
        .subscribe((data:any) => resolve(data), err => reject(err))
    })
  }
}
