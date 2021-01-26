import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() customProperty: string;
  @Output() myCustomOutput = new EventEmitter<string>();
  constructor() { }

  handleCustomEvent(){
    this.myCustomOutput.emit('Sending custom output')
  }

  ngOnInit(): void {
  }

}
