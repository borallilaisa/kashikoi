import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  assuntos:any = [];
  select_assunto:any = 2;
  user:any = {}

  constructor(private router: Router, public userService: UserServiceService) { 

    this.user = this.userService.getAuthUser();

    this.userService.getAssuntosVinculados().then((data:any) => {
      if(data)
        this.assuntos = data;
    }).catch((err:any) => {
      console.log(err);
    })
  }

  ngOnInit(): void {
  }

  openPerfil(id) {
    this.router.navigate([`/perfil/${id}`]);
  }

}
