import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.css']
})
export class FormularioCadastroComponent implements OnInit{
  @Output() cadastrarOutput: EventEmitter<any> = new  EventEmitter();
  executeFunction(){
    this.cadastrarOutput.emit();
  }

  loginFormModel: { nome: string; senha: string; confirmarSenha: string; } = {
    nome:'',
    senha:'',
    confirmarSenha:'',
  };


  constructor(){ }

  ngOnInit(): void {
      this.resetFormTemplate();
      this.criarForm();

  }


  resetFormTemplate() {
    this.loginFormModel = {
      nome: '',
      senha: '',
      confirmarSenha: '',
    };
  }

  criarForm(){
    this.loginFormModel={
      nome:'',
      senha:'',
      confirmarSenha:'',
    }
  }

  cadastrar(){
    return this.cadastrar
  }

  onSubmit(): void{
    console.log('Template Driven Forms');
    if(this.loginFormModel.senha !== this.loginFormModel.confirmarSenha){
      window.alert('erro');
    } else {
      window.alert('ok')
    }
    // console.log( 'loginFormModel:', this.loginFormModel);
  }
}
