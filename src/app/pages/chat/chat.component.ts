import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Pusher from 'pusher-js';
import {environment} from "../../environments/environment";
import {ChatService} from "../../services/chat.service";
import Swal from "sweetalert2";
import {UserServiceService} from "../../services/user-service.service";
import * as moment from "moment";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  channel:any = null;
  chat:any = {};
  message:string = "";
  messages:any = [];
  destinatario:any = {};
  remetente:any = {};
  user:any = {};
  aluno:any = {id: 1};
  professor:any = {id: 2};
  pagination: any = {
    page: 1,
    last: 1,
    total: 10,
    max: 10
  }

  constructor(public chatService: ChatService,
              public userService: UserServiceService) {

    this.user = this.userService.getAuthUser();

    if(this.user.id == this.aluno.id) {
      this.destinatario = this.professor;
      this.remetente = this.aluno;
    }
    else {
      this.destinatario = this.aluno;
      this.remetente = this.professor;
    }

    Pusher.logToConsole = true;
    let pusher = new Pusher(environment.pusher_app_key, {
      cluster: environment.pusher_app_cluster
    });

    this.channel = pusher.subscribe('chat-channel');
    this.channel.bind(`chat-a${this.aluno.id}-p${this.professor.id}`, (data) => {
      this.messages.push(data.message);

      setTimeout(() => {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      }, 200)
    });

  }

  ngOnInit(): void {
    this.openChat().then((data:any) => {

      this.getMessages(this.pagination.page);

    }).catch((err:any) => {

    });
  }

  openChat() {

    let loading:any = Swal.fire({didOpen: () => Swal.showLoading()})

    return new Promise((resolve, reject) => {

      this.chatService.openChat(2, 1).then((data:any) => {

        this.chat = data;

        loading.close();
        resolve(data);

      }).catch((err) => {

        loading.close();
        reject(err)

      });
    })
  }

  getMessages(page = 1, reload:boolean = false) {

    let loading:any = null;

    if(reload)
      loading = Swal.fire({didOpen: () => Swal.showLoading()})

    this.chatService.getMessages(this.chat.id, page).then((data:any) => {

      for(let aux of data.data)
        this.messages.unshift(aux);

      this.pagination.page = data.current_page;
      this.pagination.last = data.last_page;
      this.pagination.total = data.total;

      if(reload)
        loading.close();

      setTimeout(() => {
        if(!reload)
          this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      }, 200)
    }).catch((err:any) => {
      if(reload)
        loading.close();
    });

  }

  sendMessage(message) {

    if(message) {
      let aux = {
        idRemetente: this.remetente.id,
        idDestinatario: this.destinatario.id,
        mensagem: message
      }

      this.chatService.sendMessage(this.chat.id, aux).then((data) => {
        this.message = "";
      })
    }

  }

  groupBy(xs, key) {

    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  formatDate(date) {
    moment.locale('pt-br');

    return moment(date, 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY HH:mm')
  }

  getSize(message) {
    if(message.length <= 10) return "col-md-3 col-sm-6 col-10";
    if(message.length > 10 && message.length <= 20) return "col-md-4 col-sm-6 col-10";
    else return "col-md-6 col-12";
  }

  verifyKey(event) {
    if(event.code == "Enter")
      this.sendMessage(this.message);
  }
}
