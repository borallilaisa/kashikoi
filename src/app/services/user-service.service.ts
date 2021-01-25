import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient, public router : Router) { }

  getUser(): Promise<unknown> {

      return new Promise((resolve, reject) => {

          this.http.get('/user')
            .subscribe((data) => resolve(data),
              (err) => reject(err));
      });

  }

  register(user) {

    return new Promise((resolve, reject) =>{

      console.log(environment.appUrl);

      this.http.post(`${environment.appUrl}/user`, user).subscribe((data)=> {

        resolve(data);

      }, (err) =>{
        reject(err);
      });
    })

  }


  login(user) {

    return new Promise((resolve, reject) =>{
      this.http.post(`${environment.appUrl}/login`, user).subscribe((data:any)=> {

        resolve(data);

      }, (err) =>{
        reject(err);
      });
    })

  }

  loginWithToken(token) {
    return new Promise((resolve, reject) =>{
      this.http.post(`${environment.appUrl}/login/token/${token}`, {}).subscribe((data:any)=> {

        resolve(data);

      }, (err) =>{
        reject(err);
      });
    })
  }

  logOut() {

    return new Promise((resolve, reject) =>{
      window.localStorage.clear();
      this.router.navigate(['/']);
    })

  }

  getAuthUser() {

    if(window.localStorage.getItem('user'))
      return JSON.parse(window.localStorage.getItem('user'));
  }

  getUserData() {

    let user:any = this.getAuthUser();

    return new Promise((resolve, reject) => {
      this.http.get( `${environment.appUrl}/user/editarusuario?token=${user.token}`)
        .subscribe((data:any) => resolve(data), (err:any) => reject(err));

    })

  }

  registerInfoPerfil(aux_user) {

    return new Promise((resolve, reject) =>{

      let user:any = this.getAuthUser();

      this.http.post(`${environment.appUrl}/user/salvar-perfil?token=${user.token}`, aux_user).subscribe((data)=> {

        resolve(data);

      }, (err) =>{
        reject(err);
      });
    })

  }

  uploadPhoto(photo) {
    return new Promise((resolve, reject) =>{

      let user:any = this.getAuthUser();

      this.http.post(`${environment.appUrl}/user/upload-foto?token=${user.token}`, {foto: photo}).subscribe((data)=> {

        resolve(data);

      }, (err) =>{
        reject(err);
      });
    })
  }

  getAssuntosVinculados() {

    return new Promise((resolve, reject) => {

        let user:any = this.getAuthUser();

        this.http.get(`${environment.appUrl}/assunto/vinculados?token=${user.token}`).subscribe((data:any) => {
            resolve(data);
        }, (err:any) => reject(err));
    })

  }

  getUserSubjects(id) {
    return new Promise((resolve, reject) => {

      let user:any = this.getAuthUser();

      this.http.get(`${environment.appUrl}/user/${id}/assuntos?token=${user.token}`)
        .subscribe((data:any) => resolve(data), (err:any) => reject(err));
    })
  }

  getUserById(id) {
    return new Promise((resolve, reject) => {

      let user:any = this.getAuthUser();

      this.http.get(`${environment.appUrl}/user/${id}?token=${user.token}`)
      .subscribe((data:any) => resolve(data), err => reject(err))
    })
  }



  recoverPassword(email) {

    return new Promise((resolve, reject) => {

      this.http.post(`${environment.appUrl}/user/recuperar-senha`, {email: email})
      .subscribe((data:any) => resolve(data), err => reject(err))
    })

  }


  savePassword(token, senha) {

    return new Promise((resolve, reject) => {

       this.http.post(`${environment.appUrl}/user/recuperar-senha-finalizar`, {token: token, senha: senha})
      .subscribe((data:any) => resolve(data), err => reject(err))
    })

  }

  findUser(q) {
    return new Promise((resolve, reject) => {

      let user:any = this.getAuthUser();

      this.http.get(`${environment.appUrl}/user/pesquisar?q=${q}&token=${user.token}`)
        .subscribe((data:any) => resolve(data), err => reject(err))
    })
  }


  unblockUser(userid){
   return new Promise((resolve, reject) => {

     let user:any = this.getAuthUser();
      this.http.post(`${environment.appUrl}/user/desbloquear-usuario?token=${user.token}`, {id: userid})
        .subscribe((data:any) => resolve(data), err => reject(err))
    })

  }

  softDeleteUser(userid){

    return new Promise((resolve, reject) => {
      let user:any = this.getAuthUser();
      this.http.post(`${environment.appUrl}/user/deletar-usuario?token=${user.token}`, {id: userid})
        .subscribe((data:any) => resolve(data), err => reject(err))
    })

  }

  getUsersByAssuntos(tipo_assunto, assunto) {
    return new Promise((resolve, reject) => {

      let user:any = this.getAuthUser();

      this.http.get(`${environment.appUrl}/user/${user.id}/listar/${assunto}/${tipo_assunto}?token=${user.token}`)
        .subscribe((data:any) => resolve(data), err => reject(err))
    })
  }

  addFriend(friend_id) {
    return new Promise((resolve, reject) => {

      let user:any = this.getAuthUser();

      this.http.post(`${environment.appUrl}/user/${user.id}/add-amigo/${friend_id}?token=${user.token}`, {})
        .subscribe((data:any) => resolve(data), err => reject(err))
    })
  }

  listFriends() {
    return new Promise((resolve, reject) => {

      let user:any = this.getAuthUser();

      this.http.get(`${environment.appUrl}/user/${user.id}/amigos?token=${user.token}`)
        .subscribe((data:any) => resolve(data), err => reject(err))
    })
  }

  storeFriends(data) {
    window.localStorage.setItem('friends', JSON.stringify(data));
  }

  getLocalFriends() {
    if(window.localStorage.getItem('friends'))
      return JSON.parse(window.localStorage.getItem('friends'));
    else
      return [];
  }

  verifyFriend(friend, friend_list) {

    if(friend_list.length == 0)
      return "not_friend";
    else if(!friend)
      return "not_friend";
    else {
      let aux:any = friend_list.filter(e => e.id_usuario_1 == friend.id || e.id_usuario_2 == friend.id);

      if(aux.length == 0)
        return "not_friend";
      else {
        if(aux[0].ativa == 1) return "friend";
        else if(aux[0].ativa == 2) return "unfriend"
        else return "sent_request";
      }
    }
  }

  checkData(key) {
    if(window.localStorage.getItem('user')) {
      let user:any = this.getAuthUser();

      return !!user.token;
    }
    else return false;
  }
}
