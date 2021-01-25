import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserServiceService} from "./user-service.service";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(public http: HttpClient,
              public userService: UserServiceService) {}

  getNumeroConversasDIaChart() {

    let user:any = this.userService.getAuthUser();

    return new Promise((resolve, reject) => {

      this.http.get( `${environment.appUrl}/dashboard/chart/numero-conversa-dia?token=${user.token}`)
        .subscribe((data:any) => resolve(data), (err:any) => reject(err));

    });

  }

  getNumeroAmizadesDiaChart() {

    let user:any = this.userService.getAuthUser();

    return new Promise((resolve, reject) => {

      this.http.get( `${environment.appUrl}/dashboard/chart/numero-amizade-dia?token=${user.token}`)
        .subscribe((data:any) => resolve(data), (err:any) => reject(err));

    });

  }

  getNumeroUsuariosDiaChart() {

    let user:any = this.userService.getAuthUser();

    return new Promise((resolve, reject) => {

      this.http.get( `${environment.appUrl}/dashboard/chart/numero-usuario-dia?token=${user.token}`)
        .subscribe((data:any) => resolve(data), (err:any) => reject(err));

    });

  }

  getNumeroDenunciaDiaChart() {

    let user:any = this.userService.getAuthUser();

    return new Promise((resolve, reject) => {

      this.http.get( `${environment.appUrl}/dashboard/chart/numero-denuncia-dia?token=${user.token}`)
        .subscribe((data:any) => resolve(data), (err:any) => reject(err));

    });

  }

  getAssuntosMaisPopularesChart() {

    let user:any = this.userService.getAuthUser();

    return new Promise((resolve, reject) => {

      this.http.get( `${environment.appUrl}/dashboard/chart/assuntos-mais-populares?token=${user.token}`)
        .subscribe((data:any) => resolve(data), (err:any) => reject(err));

    });

  }

  getTotalConversasTrimestreChart() {

    let user:any = this.userService.getAuthUser();

    return new Promise((resolve, reject) => {

      this.http.get( `${environment.appUrl}/dashboard/chart/total-conversas-trimestre?token=${user.token}`)
        .subscribe((data:any) => resolve(data), (err:any) => reject(err));

    });

  }

}
