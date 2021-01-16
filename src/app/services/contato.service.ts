import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(public http: HttpClient) { }

  enviarContato(contato){
    return new Promise((resolve, reject) => {

      this.http.post( `${environment.appUrl}/contato/registra-contato`, contato)
        .subscribe((data:any) => resolve(data), (err:any) => reject(err));

    })
  }

  enviarMensagem(mensagem){
    return new Promise((resolve, reject) => {

      this.http.post( `${environment.appUrl}/contato/registra-contato`, mensagem)
        .subscribe((data:any) => resolve(data), (err:any) => reject(err));

    })
  }

}
