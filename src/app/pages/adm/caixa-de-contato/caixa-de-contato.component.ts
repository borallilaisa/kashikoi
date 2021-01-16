import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {HttpClient} from "@angular/common/http";
import {UserServiceService} from "../../../services/user-service.service";
import {ContatoService} from "../../../services/contato.service";
import * as moment from "moment";

@Component({
  selector: 'app-caixa-de-contato',
  templateUrl: './caixa-de-contato.component.html',
  styleUrls: ['./caixa-de-contato.component.css']
})
export class CaixaDeContatoComponent implements OnInit {

  contato:any = {};
  contatos: any = [];
  respostaMensagem:any = {};
  q:string = "";

  constructor(private http : HttpClient, public userService: UserServiceService, public contatoService: ContatoService) { }

  ngOnInit(): void {
  }


  searchContact(q) {

    let loading:any = Swal.fire({didOpen: () => Swal.showLoading()})

    this.userService.findUser(q).then((data:any) => {
      this.contatos = data;

      console.log(data);

      loading.close();
    }).catch((err:any) => {
      loading.close();
    })

  }


  validateKeyPress(event) {
    if(event.code == "Enter")
      this.searchContact(this.q);
  }

  formatDate(date) {
    moment.locale('pt-br');

    return moment(date, 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY HH:mm')
  }


  gravarMensagem(respostaMensagem){
    this.contatoService.enviarMensagem(respostaMensagem).then((data:any) => {
      this.contato = data;


    }).catch((err:any) => {
      console.log(err);


    })

  }
}
