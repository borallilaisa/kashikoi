import { Component, OnInit } from '@angular/core';
import {NotificationsService} from "../../services/notifications.service";
import {UserServiceService} from "../../services/user-service.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications:any = [];
  user:any = {};
  friend_list:any = [];
  selected_notification:any = {};

  constructor(public notificationsService: NotificationsService,
              public userService: UserServiceService) {

    this.user = this.userService.getAuthUser();
    this.friend_list = this.userService.getLocalFriends();
  }

  ngOnInit(): void {
    this.getNotifications();
  }

  getNotifications() {

    let loading:any = Swal.fire({didOpen: () => Swal.showLoading()})

    this.notificationsService.getNotifications().then((data:any) => {
      loading.close();
      this.notifications = data;
    }).catch((err:any) => loading.close());
  }

  listFriends() {
    this.userService.listFriends().then((data:any) => {

      this.userService.storeFriends(data);

      this.friend_list = data;
      console.log(data);
    })
  }

  friendStatus(friend) {
    return this.userService.verifyFriend(friend, this.friend_list);
  }

  openNotification(notification) {
    this.selected_notification = notification;

    this.notificationsService.setReadNotification(notification.id).then((data:any) => {
      this.getNotifications();
    })
  }

  confirmFriend(friend, notification) {
    let loading:any = Swal.fire({didOpen: () => Swal.showLoading()})

    let aux:any = this.friend_list.filter(e => e.id_usuario_1 == friend.id || e.id_usuario_2 == friend.id);

    console.log(friend);

    if(aux.length > 0 && aux[0].id) {
      this.notificationsService.confirmFriend(notification.id, aux[0].id).then((data:any) => {
        loading.close();
        Swal.fire('Sucesso!', `Você e ${friend.name} agora são amigos!`, 'success');

        this.notificationsService.setReadNotification(notification.id).then((data:any) => {
          this.getNotifications();
        })
        this.listFriends();

      }).catch((err:any) => {
        loading.close();
      })
    }
    else
      loading.close();
  }

  refuseFriend(friend, notification) {

    if(confirm(`Deseja mesmo recusar o pedido de amizade de ${friend.name}?`)) {
      let loading:any = Swal.fire({didOpen: () => Swal.showLoading()})

      let aux:any = this.friend_list.filter(e => e.id_usuario_1 == friend.id || e.id_usuario_2 == friend.id);

      if(aux.length > 0 && aux[0].id) {
        this.notificationsService.refuseFriend(notification.id, aux[0].id).then((data:any) => {
          loading.close();
          Swal.fire('Sucesso!', `Você recusou o pedido de amizade de ${friend.name}`, 'success');

          this.getNotifications();
          this.listFriends();

        }).catch((err:any) => {
          loading.close();
        })
      }
      else
        loading.close();
    }
  }

}
