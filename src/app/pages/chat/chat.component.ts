import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Pusher from 'pusher-js';
import {environment} from "../../environments/environment";
import {ChatService} from "../../services/chat.service";
import Swal from "sweetalert2";
import {UserServiceService} from "../../services/user-service.service";
import * as moment from "moment";
import {ActivatedRoute, Router} from "@angular/router";
import {switchAll} from "rxjs/operators";

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
  pagination: any = {
    page: 1,
    last: 1,
    total: 10,
    max: 10
  }

  constructor(public chatService: ChatService,
              public userService: UserServiceService,
              private router: Router,
              private route: ActivatedRoute) {

    this.user = this.userService.getAuthUser();

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      let hash = params.get("hash");

      if (hash) {

        this.chatService.openChat(hash).then((data:any) => {

          this.chat = data;

          if(this.user.id == data.aluno.id) {
            this.destinatario = data.professor;
            this.remetente = data.aluno;
          }
          else {
            this.destinatario = data.aluno;
            this.remetente = data.professor;
          }

          this.getMessages();

          Pusher.logToConsole = true;

          let pusher = new Pusher(environment.pusher_app_key, {
            cluster: environment.pusher_app_cluster
          });

          this.channel = pusher.subscribe('chat-channel');
          this.channel.bind(`${data.hash}`, (resp) => {
            this.messages.push(resp.message);

            setTimeout(() => {
              this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
            }, 200)
          });

        }).catch((err:any) => {
          Swal.fire('Atenção', 'Chat inválido', 'error')
          this.router.navigate([`/inicio`]);
        })

      } else {
        this.router.navigate([`/inicio`]);
      }
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
        mensagem: message+""
      }

      this.message = "";

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
