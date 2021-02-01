import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { UserServiceService } from './user-service.service';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  obj_chat:any = {};

  constructor(public http: HttpClient,
              public userService: UserServiceService) {}

  getChats(user) {

    return new Promise((resolve, reject) => {

      this.http.get( `${environment.appUrl}/chat/listar/${user.id}?token=${user.token}`)
        .subscribe((data:any) => resolve(data), (err:any) => reject(err));

    });

  }

  openChat(hash) {
    let user:any = this.userService.getAuthUser();

    return new Promise((resolve, reject) => {

      this.http.get( `${environment.appUrl}/chat/abrir/${hash}?token=${user.token}`)
        .subscribe((data:any) => resolve(data), (err:any) => reject(err));

    });
  }

  getMessages(chat_id, page = 1) {

    let user:any = this.userService.getAuthUser();

    return new Promise((resolve, reject) => {

      this.http.get( `${environment.appUrl}/chat/${chat_id}/mensagens?page=${page}&token=${user.token}`)
        .subscribe((data:any) => resolve(data), (err:any) => reject(err));

    });

  }

  sendMessage(chat_id, data) {
    let user:any = this.userService.getAuthUser();

    return new Promise((resolve, reject) => {

      this.http.post( `${environment.appUrl}/chat/${chat_id}/mensagens?token=${user.token}`, data)
        .subscribe((data:any) => resolve(data), (err:any) => reject(err));

    });
  }

  startNewChat(config) {
    return new Promise((resolve, reject) => {

      let user:any = this.userService.getAuthUser();

      this.http.post(`${environment.appUrl}/chat/novo-chat?token=${user.token}`, config)
        .subscribe((data:any) => resolve(data), err => reject(err))
    })
  }

  sendScore(id_destinatario, id_remetente, score) {
    return new Promise((resolve, reject) => {

      let user:any = this.userService.getAuthUser();
      this.http.post(`${environment.appUrl}/chat/remetente/${id_remetente}/destinatario/${id_destinatario}/save-score?token=${user.token}`, {score: score})
        .subscribe((data:any) => resolve(data), err => reject(err))
    })
  }

  startChatByFriend(friend_id) {
    let user:any = this.userService.getAuthUser();

    return new Promise((resolve, reject) => {

      this.http.post( `${environment.appUrl}/chat/amigo/${friend_id}/${user.id}?token=${user.token}`, {})
        .subscribe((data:any) => resolve(data), (err:any) => reject(err));

    });
  }
}
