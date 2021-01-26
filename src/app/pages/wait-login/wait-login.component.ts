import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserServiceService} from "../../services/user-service.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-wait-login',
  templateUrl: './wait-login.component.html',
  styleUrls: ['./wait-login.component.css']
})
export class WaitLoginComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,
              private router : Router,
              public userService: UserServiceService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      let token = params.get("token");

      if(token) {

        let loading: any = Swal.fire({didOpen: () => Swal.showLoading()})

        this.userService.loginWithToken(token).then((data:any) => {

          loading.close();

          if(data.deleted_at)
            this.router.navigate(['/404']);
          else {
            localStorage.setItem('isLoggedIn', "true");
            localStorage.setItem('user', JSON.stringify(data));
            this.listFriends();

            if(data.level == 1)
              this.router.navigate(['/inicio'])
            else
              this.router.navigate(['/adm'])
          }

        }).catch((err:any) => {
          loading.close();
          this.router.navigate(['/404']);
        })
      }
      else
        this.router.navigate(['/404']);

    })
  }

  listFriends() {
    this.userService.listFriends().then((data:any) => {
      this.userService.storeFriends(data);
    });
  }

}
