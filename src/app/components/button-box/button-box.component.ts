import { Component, EventEmitter, Input, OnInit, Output,  } from '@angular/core';

@Component({
  selector: 'app-button-box',
  templateUrl: './button-box.component.html',
  styleUrls: ['./button-box.component.css']
})
export class ButtonBoxComponent implements OnInit {
  @Output() clicou: EventEmitter<any> = new EventEmitter();

  @Input() titulo: string = "";

  constructor(){}

  ngOnInit(): void {

  }
//No componente do evento,criei
  clicouFunction(){
    this.clicou.emit();
  }

}
