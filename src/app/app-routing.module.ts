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
import {AjudaComponent} from "./pages/ajuda/ajuda.component";
import {IsLoggedGuardGuard} from "./guards/is-logged/is-logged-guard.guard";
import {IntroIsLoggedGuard} from "./guards/intro-is-logged/intro-is-logged.guard";
import {IsAdminGuard} from "./guards/is-admin/is-admin.guard";
import {WaitLoginComponent} from "./pages/wait-login/wait-login.component";
import {HomeAdministrativaComponent} from "./pages/adm/home-administrativa/home-administrativa.component";


const routes: Routes = [

    {path:"", component: InicialComponent, canActivate:[IntroIsLoggedGuard]},
    {path:"recuperar-senha", component: RecuperarsenhaComponent, canActivate:[IntroIsLoggedGuard]},
    {path:"recuperar-senha/:token", component: RecuperarsenhafinalizarComponent, canActivate:[IntroIsLoggedGuard]},
    {path:"ajuda", component: AjudaComponent, canActivate:[IsLoggedGuardGuard]},
    {path:"inicio", component: HomeComponent, canActivate:[IsLoggedGuardGuard]},
    {path:"selecionar-assuntos", component: SearchAssuntosComponent, canActivate:[IsLoggedGuardGuard]},
    {path:"editar-perfil", component: EditarperfilComponent, canActivate:[IsLoggedGuardGuard]},
    {path:"editar-perfil/:assunto", component: EditarperfilComponent, canActivate:[IsLoggedGuardGuard]},
    {path:"perfil/:id", component: PerfilPessoalComponent, canActivate:[IsLoggedGuardGuard]},
    {path:"chat/:hash", component: ChatComponent, canActivate:[IsLoggedGuardGuard]},
    {path:"denuncia/:id", component: DenunciaComponent, canActivate:[IsLoggedGuardGuard]},
    {path:"adm", component: HomeAdministrativaComponent, canActivate:[IsAdminGuard]},
    {path:"adm/usuarios", component: ControlarUsuarioComponent, canActivate:[IsAdminGuard]},
    {path:"adm/assuntos", component: ControlarAssuntoComponent, canActivate:[IsAdminGuard]},
    {path:"adm/denuncias", component: ControlarDenunciaComponent, canActivate:[IsAdminGuard]},
    {path:"adm/contato", component: CaixaDeContatoComponent, canActivate:[IsAdminGuard]},
    {path:'oauth/login/:token', component: WaitLoginComponent},
    {path: '404', component: Error404Component},
    {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
