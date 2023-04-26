import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { CadastroPacienteComponent } from "./pages/cadastro-paciente/cadastro-paciente.component";
import { CadastroMedicamentoComponent } from "./pages/cadastro-medicamento/cadastro-medicamento.component";
import { RotaGuard } from "./rota.guard";



const routes: Routes = [

  //Criacão de rotas das aplicacao e guarda de rotas
    {path:'', pathMatch: 'full', redirectTo: 'login'},



    {
        path: 'login',
        component: LoginComponent

    },

    {
        path: 'home',
        component: HomeComponent,
        canActivate:[RotaGuard]

    },
    {
        path: 'cadastro-paciente',
        component: CadastroPacienteComponent,
        canActivate:[RotaGuard]

    },
    {
        path: 'cadastro-medicamento',
        component: CadastroMedicamentoComponent,
        canActivate:[RotaGuard]

    },
    {
        path: 'historico-medicamento',
        component: CadastroMedicamentoComponent,
        canActivate:[RotaGuard]

    },

    {
        path: 'not-found?login',
        component: LoginComponent
    }


]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
