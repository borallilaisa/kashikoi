import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserServiceService} from "../../services/user-service.service";

@Injectable({
  providedIn: 'root'
})
export class IntroIsLoggedGuard implements CanActivate {

  constructor( private userService : UserServiceService, private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let user:any = this.userService.getAuthUser()

    if(user && user.token) {
      return user.level > 0 ? this.router.parseUrl('/inicio') : this.router.parseUrl('/adm');
    }

    return true;

  }

}
