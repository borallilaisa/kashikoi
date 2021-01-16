import {Component, Input, OnInit} from '@angular/core';
import {AmizadesService} from "../../services/amizades.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-amizades',
  templateUrl: './amizades.component.html',
  styleUrls: ['./amizades.component.css']
})
export class AmizadesComponent implements OnInit {

  @Input('user') user:any;
  friends:any = [];

  constructor(public amizadesService: AmizadesService) { }

  ngOnInit(): void {
    this.getFriends();
  }

  sliceMessage(message) {
    if(message.length > 30)
      return message.slice(0, 30)+"..."
    else
      return message;
  }

  getFriends() {
    let loading:any = Swal.fire({didOpen: () => Swal.showLoading()})

    this.amizadesService.getFriends(this.user).then((data:any) => {
      this.friends = data;
      loading.close();
    }).catch((err:any) => {
      loading.close();
    })
  }

  unfriend(friend) {

    if(confirm(`Realmente deseja desfazer a sua amizade com ${friend.name}?`)) {
      let loading:any = Swal.fire({didOpen: () => Swal.showLoading()})

      this.amizadesService.unfriend(this.user, friend.id).then((data:any) => {

        loading.close();
        Swal.fire('Sucesso!', 'Amizade desfeita com sucesso!', 'success');
        this.getFriends();

      }).catch((err:any) => {
        loading.close();
        Swal.fire('Atenção!', 'Houve um erro ao desfazer amizade!', 'error');
      })
    }
  }
}
