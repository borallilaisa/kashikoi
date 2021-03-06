import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  reEmail:any = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*\s+<(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3})>$|^(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3})$/;
  reSenha:any = /^.*(?=.{6,})(?=.*[@#$%^&+=])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;
  reTelefone:any = /^(\(11\) [9][0-9]{4}-[0-9]{4})|(\(1[2-9]\) [5-9][0-9]{3}-[0-9]{4})|(\([2-9][1-9]\) [5-9][0-9]{3}-[0-9]{4})$/;
 
  constructor() { }

  emailIsValid(email) {
    return this.reEmail.test(email)
  }
  
  passwordIsValid(password) {
    return this.reSenha.test(password);
  }

  phoneIsValid(password) {
    //return this.reTelefone.test(phone);
  }
}
