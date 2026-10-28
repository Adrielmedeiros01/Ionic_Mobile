import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab9',
  templateUrl: './tab9.page.html',
  styleUrls: ['./tab9.page.scss'],
  standalone: false,
})
export class Tab9Page implements OnInit {

  rock: boolean = false;
  forro: boolean = false;
  samba: boolean = false;
  escolha: boolean = true;


  alunos: string[] = ["Adriel", "Marcos", "Daniel"];

  constructor() { }

  ngOnInit() {
  }

  // rockfunc(){
  //   this.forro = false;
  //   this.samba = false;
  //   this.escolha = false;
  //   return this.rock = true;

  // }
  // forrofunc(){
  //   this.rock = false;
  //   this.samba = false;
  //   this.escolha = false;
  //   return this.forro = true;
  // }
  // sambafunc(){
  //   this.forro = false;
  //   this.rock = false;
  //   this.escolha = false;
  //   return this.samba = true;
  // }

  
}
