import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit{
  nome: string = "";
  @Input() titulo: string = "";
  @Input() tipo: string ="";
  constructor(){}

  ngOnInit():void{

  }
}

