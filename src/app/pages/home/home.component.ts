import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() name: string | undefined;
  @Input() icone: string | undefined;
  @Output() cardSelecionado: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clickCard() {
    console.log('clickCard');
    //Exemplo do envio do dado tituloCard através de uma variavel de Output (cardSelecionado) para o componente pai
    this.cardSelecionado.emit(this.name);
  }
}
