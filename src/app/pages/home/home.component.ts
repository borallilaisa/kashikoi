import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any = {};
  control:string = 'conversas';


  constructor(private router: Router, public userService: UserServiceService) {

    this.user = this.userService.getAuthUser();
  }

  ngOnInit(): void {
  }

  openPerfil(id) {
    this.router.navigate([`/perfil/${id}`]);
  }

}
