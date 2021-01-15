import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import * as moment from "moment";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BuscaAssuntosService} from "../../../services/busca-assuntos.service";

@Component({
  selector: 'app-controlar-assunto',
  templateUrl: './controlar-assunto.component.html',
  styleUrls: ['./controlar-assunto.component.css']
})
export class ControlarAssuntoComponent implements OnInit {

  assunto:any = {};
  assuntos: any = [];
  q:string = "";

  constructor(private http : HttpClient, public buscaAssuntos: BuscaAssuntosService) {
    this.searchAssuntos(this.q);
  }

  ngOnInit(): void {
  }


  searchAssuntos(q) {

    let loading:any = Swal.fire({didOpen: () => Swal.showLoading()})

    this.buscaAssuntos.getAllAssuntos(q).then((data:any) => {
      this.assuntos = data;

      console.log(data);

      loading.close();
    }).catch((err:any) => {
      loading.close();
    })

  }

  validateKeyPress(event) {
    if(event.code == "Enter")
      this.searchAssuntos(this.q);
  }

  formatDate(date) {
    moment.locale('pt-br');

    return moment(date, 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY HH:mm')
  }

  aprovarAssunto(assunto){
    Swal.fire({
      title: 'Você deseja aprovar a utilização desse assunto?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, aprovar!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.buscaAssuntos.approveAssunto(assunto.id).then((data:any) => {

          let aux = this.assuntos.map(e => e.id).indexOf(data.id);
          if(aux >= 0) this.assuntos[aux] = data;


        }).catch((err:any) => {
          console.log(err);


        })

        Swal.fire(
          'Aprovado!',
          'Esse assunto agora está disponivel para seus usuários!.',
          'success'

        )

      }
    })

  }
  inativarAssunto(assunto){
    Swal.fire({
      title: 'Você tem certeza de gostaria de inativar esse assunto?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dd3333',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, inativar!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.buscaAssuntos.softDeleteAssunto(assunto.id).then((data:any) => {

          let aux = this.assuntos.map(e => e.id).indexOf(data.id);
          if(aux >= 0) this.assuntos[aux] = data;


        }).catch((err:any) => {
          console.log(err);


        })

        Swal.fire(
          'Pronto!',
          'Esse assunto foi inativado com sucesso!.',
          'success'

        )

      }
    })


  }


}
