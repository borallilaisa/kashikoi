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

const routes: Routes = [

    {path:"inicio", component: HomeComponent},
    {path:"selecionar-assuntos", component: SearchAssuntosComponent},
    {path:"editar-perfil", component: EditarperfilComponent},
    {path:"", component: InicialComponent},
    {path:"perfil/:id", component: PerfilPessoalComponent},
    {path:"chat", component: ChatComponent},
    {path:"denuncia", component: DenunciaComponent},
    {path:"recuperar-senha", component: RecuperarsenhaComponent},
    {path:"recuperar-senha/:token", component: RecuperarsenhafinalizarComponent},
    {path:"adm", component: PainelAdministrativoComponent},
    {path:"adm/usuarios", component: ControlarUsuarioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
