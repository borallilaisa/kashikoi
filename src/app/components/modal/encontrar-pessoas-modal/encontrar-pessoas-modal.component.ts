import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../../../services/user-service.service";
import Swal from "sweetalert2";
import {ChatService} from "../../../services/chat.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-encontrar-pessoas-modal',
  templateUrl: './encontrar-pessoas-modal.component.html',
  styleUrls: ['./encontrar-pessoas-modal.component.css']
})
export class EncontrarPessoasModalComponent implements OnInit {

  assuntos:any = [];
  select_assunto:any = 2;
  user:any = {};
  selected_assunto:any = null;
  users:any = [];

  constructor(public userService: UserServiceService,
              private router: Router,
              public chatService: ChatService) { }

  ngOnInit(): void {
    this.user = this.userService.getAuthUser();

    setTimeout(() => {
      this.getAssuntos(this.assuntos);
    }, 200)
  }

  getAssuntos(user) {
    this.userService.getAssuntosVinculados().then((data:any) => {
      if(data)
        this.assuntos = data;
    }).catch((err:any) => {
      console.log(err);
    })
  }

  findUsers(select_assunto, selected_assunto) {

    let loading:any = Swal.fire({didOpen: () => Swal.showLoading()})

    this.userService.getUsersByAssuntos(select_assunto, selected_assunto).then((data:any) => {
      this.users = data;
      loading.close();
    }).catch((err:any) => loading.close());
  }

  startChat(other_user_id) {
    let config = {
      usuario_aluno: +this.select_assunto == 1 ? this.user.id : other_user_id,
      usuario_professor: +this.select_assunto == 2 ? this.user.id : other_user_id,
      assunto_id: this.selected_assunto
    }

    let loading:any = Swal.fire({didOpen: () => Swal.showLoading()})

    this.chatService.startNewChat(config).then((data:any) => {

      loading.close();


      this.router.navigate([`/chat/${data.hash}`]);

    }).catch((err:any) => loading.close());
  }

}