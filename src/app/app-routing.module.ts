import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarterpageComponent } from './pages/starterpage/starterpage.component';
import {InicialComponent } from './pages/inicial/inicial.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchAssuntosComponent } from './pages/search-assuntos/search-assuntos.component';
import { SearchAssuntosOnlyComponent } from './pages/search-assuntosonly/search-assuntosonly.component';
import { EditarperfilComponent } from './pages/editarperfil/editarperfil.component';
import { PerfilPessoalComponent } from './pages/perfil-pessoal/perfil-pessoal.component';
import { ChatComponent } from './pages/chat/chat.component';
import { DenunciaComponent } from './pages/denuncia/denuncia.component';
import { PainelAdministrativoComponent } from './pages/adm/painel-administrativo/painel-administrativo.component';
import { RecuperarsenhaComponent } from './pages/recuperarsenha/recuperarsenha.component';
import { RecuperarsenhafinalizarComponent } from './pages/recuperarsenhafinalizar/recuperarsenhafinalizar.component';
import { ControlarUsuarioComponent } from './pages/adm/controlar-usuario/controlar-usuario.component';
import { ControlarAssuntoComponent } from './pages/adm/controlar-assunto/controlar-assunto.component';
import {ControlarDenunciaComponent} from "./pages/adm/controlar-denuncia/controlar-denuncia.component";
import {CaixaDeContatoComponent} from "./pages/adm/caixa-de-contato/caixa-de-contato.component";
import {Error404Component} from "./pages/error404/error404.component";


const routes: Routes = [

    {path:"inicio", component: HomeComponent},
    {path:"selecionar-assuntos", component: SearchAssuntosComponent},
    {path:"editar-perfil", component: EditarperfilComponent},
    {path:"", component: InicialComponent},
    {path:"perfil/:id", component: PerfilPessoalComponent},
    {path:"chat/:hash", component: ChatComponent},
    {path:"denuncia/:id", component: DenunciaComponent},
    {path:"recuperar-senha", component: RecuperarsenhaComponent},
    {path:"recuperar-senha/:token", component: RecuperarsenhafinalizarComponent},
    {path:"adm", component: PainelAdministrativoComponent},
    {path:"adm/usuarios", component: ControlarUsuarioComponent},
    {path:"adm/assuntos", component: ControlarAssuntoComponent},
    {path:"adm/denuncias", component: ControlarDenunciaComponent},
    {path:"adm/contato", component: CaixaDeContatoComponent},
    {path: '404', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
