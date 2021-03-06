import { Component, OnInit } from '@angular/core';
import { BuscaAssuntosService } from '../../services/busca-assuntos.service'; 
import { CadastraAssuntosService } from '../../services/cadastra-assuntos.service'; 
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { UserServiceService } from '../../services/user-service.service';


@Component({
  selector: 'app-search-assuntosonly',
  templateUrl: './search-assuntosonly.component.html',
  styleUrls: ['./search-assuntosonly.component.css']
})

export class SearchAssuntosOnlyComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  assuntosCtrl = new FormControl();
  assuntosFiltrados: any = [];
  allAssuntos:any = [];
  assuntos:any = [];
  q:string = "";
  f:string = "";
  assuntosEnsinarCtrl = new FormControl();
  assuntosEnsinarFiltrados: any = [];
  assuntosEnsinar:any = [];
  public loading = false;
 

  @ViewChild('assuntoInput') assuntoInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  

  
  constructor(public assuntosService: BuscaAssuntosService,
              public userService: UserServiceService,
              public cadastrarAssuntos: CadastraAssuntosService) { 

    this.getUserAssuntos();
  }

  ngOnInit(): void {
    

  
  }

  getUserAssuntos() {
    this.userService.getAssuntosVinculados().then((data:any) => {
      if(data) {

          let ensinar:any = data.filter(e => e.tipo == 2);

          if(ensinar.length > 0)
            this.assuntosEnsinar = ensinar.map(e => e.assunto.titulo);

          let aprender:any = data.filter(e => e.tipo == 1);

          if(aprender.length > 0)
            this.assuntos = aprender.map(e => e.assunto.titulo);

      }
    }).catch((err:any) => {
      console.log(err);
    })
  }

  getAssuntos(q:string = null) {

    return new Promise((resolve, reject) => {
      this.assuntosService.get(q).then((data:any) => {
          this.allAssuntos = data;
          console.log(data);
          resolve(data);
      }).catch((err:any) => {
          reject(err);
      })
    })
  }

  assuntosRegister(assuntos:any, assuntosEnsinar:any):void{
    this.loading = true;
      this.cadastrarAssuntos.storeAssuntos({aprender: assuntos, ensinar: assuntosEnsinar}).then((data:any) => {
          console.log(data);
          this.loading = false;
          
      }).catch((err:any) => {
        console.log(err);
        this.loading = false;
      })
  }

  searchAssuntos(q) {
    if(q && q.length > 3)
        this.getAssuntos(q);
    else
    this.allAssuntos = [];
  
  }


  add(event: MatChipInputEvent, aux:any): void {

    console.log(aux);

    const input = event.input;
    const value = event.value;

    // Add our assunto
    if ((value || '').trim()) {
      aux.push(value.trim());
      alert(aux);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.assuntosCtrl.setValue(null);
  }

  remove(assunto: string, aux:any): void {
    
    const index = aux.indexOf(assunto);

    if (index >= 0) {
      aux.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent, aux:any, inputId: any): void {
    
    aux.push(event.option.viewValue);
    inputId.nativeElement.value = '';
    inputId.setValue(null);
    
  }

  private _filter(value: string): string[] {
    let filterValue = value.toLowerCase();

    return this.allAssuntos.filter(assunto => assunto.toLowerCase().indexOf(filterValue) === 0);
  }
}








