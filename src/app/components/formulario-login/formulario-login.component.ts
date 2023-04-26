import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {
onSubmit() {
throw new Error('Method not implemented.');
}
  name= "";
  email= "";
  password= "";
usuariodeslogado: any;

  ngOnInit(): void {
    this.getNome
   localStorage.getItem (this.name)
   localStorage.getItem (this.email)
   localStorage.getItem (this.password)

}
getNome(){
  this.name
}


   }




