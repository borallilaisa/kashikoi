import {Component, Input, OnInit} from '@angular/core';
import {ChatService} from "../../services/chat.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-conversas',
  templateUrl: './conversas.component.html',
  styleUrls: ['./conversas.component.css']
})
export class ConversasComponent implements OnInit {

  @Input('user') user:any;
  chats:any = [];

  constructor(public chatService: ChatService) { }

  ngOnInit(): void {

    let loading:any = Swal.fire({didOpen: () => Swal.showLoading()})

    this.chatService.getChats(this.user).then((data:any) => {
        this.chats = data;
        loading.close();
    }).catch((err:any) => {
        loading.dismiss();
    })
  }

  sliceMessage(message) {
      if(message.length > 20)
        return message.slice(0, 20)+"..."
      else
        return message;
  }

}
