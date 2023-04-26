import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  name= "";
  email= "";
  password= "";
usuariologado: any;
  getEmail: any;
  getPassword: any;


  ngOnInit(): void {
    console.log(this.enviar)
    this.getNome
    this.getEmail
    this.password
    // this.name();
    // this.email();
    // this.password()
    // localStorage.setItem('usuarioLogado', JSON.stringify({name: this.name, email: this.email, password:this.password}))
    // usuarioLogado= JSON.parse (localStorage.getItem('usuarioLogado'));
}
getNome( email: string, password:string){
  return
}

enviar(): void{
  this.email
  this.password
}
cadastrar(){
  console.log('cadastrar')
}
}
