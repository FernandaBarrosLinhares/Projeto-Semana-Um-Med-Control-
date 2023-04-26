import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroPacienteComponent } from './pages/cadastro-paciente/cadastro-paciente.component';
import { CadastroMedicamentoComponent } from './pages/cadastro-medicamento/cadastro-medicamento.component';
import { ListagemMedicamentoComponent } from './pages/listagem-medicamento/listagem-medicamento.component';
import { ListagemHistoricoMedicamentoComponent } from './pages/historico-medicamento/listagem-historico-medicamento.component';
import { FormularioLoginComponent } from './components/formulario-login/formulario-login.component';
import { FormularioCadastroComponent } from './components/formulario-cadastro/formulario-cadastro.component';
// import { AlertComponent } from './components/alert/alert.component';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { MenuComponent } from './pages/menu/menu.component';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { ButtonBoxComponent } from './components/button-box/button-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LogoComponent } from './components/logo/logo.component';
import { BotaoCadastarComponent } from './components/botao-cadastar/botao-cadastar.component';
import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';




@NgModule({
  declarations: [ //Importação: Componentes, diretivas e pipes
    AppComponent,
    LoginComponent,
    HomeComponent,
    CadastroPacienteComponent,
    CadastroMedicamentoComponent,
    ListagemMedicamentoComponent,
    ListagemHistoricoMedicamentoComponent,
    FormularioLoginComponent,
    FormularioCadastroComponent,
    // AlertComponent,
    ToolbarComponent,
    MenuComponent,
    InputBoxComponent,
    ButtonBoxComponent,
    LogoComponent,
    BotaoCadastarComponent,
    CardComponent,
    ModalComponent,



  ],
  imports: [//importação somente modulo
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    // HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent,AppRoutingModule,LoginComponent,FormularioLoginComponent,FormularioCadastroComponent]
})
export class AppModule { }
