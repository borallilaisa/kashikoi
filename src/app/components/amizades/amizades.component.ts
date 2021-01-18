import {Component, Input, OnInit} from '@angular/core';
import {AmizadesService} from "../../services/amizades.service";
import Swal from "sweetalert2";
import {UserServiceService} from "../../services/user-service.service";
import {ChatService} from "../../services/chat.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-amizades',
  templateUrl: './amizades.component.html',
  styleUrls: ['./amizades.component.css']
})
export class AmizadesComponent implements OnInit {

  @Input('user') user:any;
  friends:any = [];
  friend_list:any = [];

  constructor(public amizadesService: AmizadesService,
              public chatService: ChatService,
              private router: Router,
              public userService: UserServiceService) {

    this.friend_list = this.userService.getLocalFriends();
  }

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
      this.listFriends();
      loading.close();
    }).catch((err:any) => {
      loading.close();
    })
  }

  friendStatus(friend) {
    return this.userService.verifyFriend(friend, this.friend_list);
  }

  listFriends() {
    this.userService.listFriends().then((data:any) => {

      this.userService.storeFriends(data);

      this.friend_list = data;

    })
  }

  startChatByFriend(friend) {

    let loading: any = Swal.fire({didOpen: () => Swal.showLoading()})

    this.chatService.startChatByFriend(friend.id).then((data:any) => {
      loading.close();
      this.router.navigate([`/chat/${data.hash}`]);
    }).catch((err:any) => loading.close())

  }

  openPerfil(friend) {
    this.router.navigate([`/perfil/${friend.id}`]);
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
