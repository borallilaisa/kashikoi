import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserServiceService} from "../../services/user-service.service";
import {DenunciaService} from "../../services/denuncia.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.component.html',
  styleUrls: ['./denuncia.component.css']
})
export class DenunciaComponent implements OnInit {

  denunciado:any = {};
  user:any = {};
  denuncia: any = {};

  constructor(private route: ActivatedRoute,
              public userService: UserServiceService,
              public denunciaService: DenunciaService,
              private router: Router) {

    this.user = this.userService.getAuthUser();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      if(!params.get("id")) this.router.navigate([`/inicio`]);

      let id_denunciado = params.get("id");

      if(id_denunciado)
        this.getUser(id_denunciado)
    })
  }

  getUser(id) {
    this.userService.getUserById(id).then((data:any) => {
      this.denunciado  = data;
    }).catch((err:any) => {
      console.log(err);
    })
  }

  enviarDenuncia(denuncia){

    let loading:any = Swal.fire({didOpen: () => Swal.showLoading()})

    this.denunciaService.enviarDenuncia(denuncia, this.user.id, this.denunciado.id).then((data:any)=>{

      loading.close();

      Swal.fire('Sucesso!', 'Denuncia realizada com sucesso!', 'success');

      console.log(data);

    }).catch((err:any) =>{
      console.log(err);
      Swal.fire('Arenção!', 'Erro ao realizar denuncia!', 'error');

      loading.close();

    })
  }

}
