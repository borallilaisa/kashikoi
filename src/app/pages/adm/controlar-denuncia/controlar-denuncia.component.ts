import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BuscaAssuntosService} from "../../../services/busca-assuntos.service";
import {UserServiceService} from "../../../services/user-service.service";
import {DenunciaService} from "../../../services/denuncia.service";
import Swal from "sweetalert2";
import * as moment from "moment";

@Component({
  selector: 'app-controlar-denuncia',
  templateUrl: './controlar-denuncia.component.html',
  styleUrls: ['./controlar-denuncia.component.css']
})
export class ControlarDenunciaComponent implements OnInit {
  denuncia:any = {};
  denuncias: any = [];
  q:string = "";
  selected_denuncia:any = {};

  constructor(private http : HttpClient, public userService: UserServiceService, public denunciaService: DenunciaService) { }

  ngOnInit(): void {
    this.searchDenuncias();
  }

  searchDenuncias(q = "") {

    let loading:any = Swal.fire({didOpen: () => Swal.showLoading()})

    this.denunciaService.getAllDenuncias(q).then((data:any) => {
      this.denuncias = data;

      console.log(data);

      loading.close();
    }).catch((err:any) => {
      loading.close();
    })

  }

  validateKeyPress(event) {
    if(event.code == "Enter")
      this.searchDenuncias(this.q);
  }

  formatDate(date) {
    moment.locale('pt-br');

    return moment(date, 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY HH:mm')
  }

  softdeleteUser(id){
    Swal.fire({
      title: 'Você tem certeza de que deseja bloquear esse usuário?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dd3333',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, bloquear!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.userService.softDeleteUser(id).then((data:any) => {

          let aux = this.denuncias.map(e => e.id).indexOf(data.id);
          if(aux >= 0) this.denuncia[aux] = data;


        }).catch((err:any) => {
          console.log(err);


        })

        Swal.fire(
          'Bloqueado!',
          'Esse usuário foi bloqueado com sucesso!.',
          'success'

        )

      }
    })
  }

  confirmDenuncia(denuncia) {
    if(confirm('Deseja confirmar esta denuncia?')) {

      let loading: any = Swal.fire({didOpen: () => Swal.showLoading()});

      this.denunciaService.confirmDenuncia(denuncia.id).then((data:any) => {

        loading.close();
        Swal.fire('Sucesso!', 'Denuncia confirmada com sucesso!', 'success');
        this.searchDenuncias(this.q);

      }).catch((err:any) => {
        loading.close();
        Swal.fire('Atenção!', 'Erro ao confirmar denuncia!', 'error');
      })
    }
  }

  ignoreDenuncia(denuncia){

    if(confirm('Deseja ignorar esta denuncia?')) {

      let loading: any = Swal.fire({didOpen: () => Swal.showLoading()});

      this.denunciaService.ignoreDenuncia(denuncia.id).then((data:any) => {

        loading.close();
        Swal.fire('Sucesso!', 'Denuncia confirmada com sucesso!', 'success');
        this.searchDenuncias(this.q);

      }).catch((err:any) => {
        loading.close();
        Swal.fire('Atenção!', 'Erro ao confirmar denuncia!', 'error');
      })
    }

  }

}
