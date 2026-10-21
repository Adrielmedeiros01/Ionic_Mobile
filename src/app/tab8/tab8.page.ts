import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab8',
  templateUrl: './tab8.page.html',
  styleUrls: ['./tab8.page.scss'],
  standalone: false,
})
export class Tab8Page implements OnInit {

  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;
  nota4: number = 0;

  result: number = 0;

  situ: string = "Aguardando notas...";

  cor: string = "";

  constructor() { }

  ngOnInit() {}

  media(){
    this.result = (this.nota1 + this.nota2 + this.nota3 + this.nota4) / 4;

    if(this.result >= 7) {
      this.situ = "Aprovado!";
      this.cor = "success";
    }
    else{
      this.situ = "Reprovado!";
      this.cor = "danger";
    }
    return this.result;


  }


}
