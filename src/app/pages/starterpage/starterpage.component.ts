import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { AuthService } from '../../services/auth.service'; 

@Component({
  selector: 'app-starterpage',
  templateUrl: './starterpage.component.html',
  styleUrls: ['./starterpage.component.css']
})
export class StarterpageComponent implements OnInit {
  title = 'kashikoi';
  id: string;  
  constructor(private router: Router, private authService: AuthService) {
    this.router.navigate(['/homes']);
   }

  ngOnInit(): void {
    this.id = localStorage.getItem('token');  
    //console.log(this.id);  
  }

  logout() {  
    console.log('logout');  
    this.authService.logout();  
    this.router.navigate(['/login']);  
  }  
}
