import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { UserServiceService } from './user-service.service';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public http: HttpClient,
              public userService: UserServiceService) {}

  getChats(user) {

    return new Promise((resolve, reject) => {

      this.http.get( `${environment.appUrl}/chat/listar/${user.id}?token=${user.token}`)
        .subscribe((data:any) => resolve(data), (err:any) => reject(err));

    });

  }

  openChat(id_professor, id_aluno) {
    let user:any = this.userService.getAuthUser();

    return new Promise((resolve, reject) => {

      this.http.get( `${environment.appUrl}/chat/abrir/${id_professor}/${id_aluno}?token=${user.token}`)
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
}
