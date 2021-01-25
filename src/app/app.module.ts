import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MenutopoComponent } from './layouts/menutopo/menutopo.component';
import { InicialComponent } from './pages/inicial/inicial.component';
import { HomeComponent } from './pages/home/home.component';
import { StarterpageComponent } from './pages/starterpage/starterpage.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { AuthGuard } from './guards/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { LoggedInStarterPageComponent } from './pages/logged-in-starter-page/logged-in-starter-page.component';
import { LoggedMenuComponent } from './layouts/logged-menu/logged-menu.component';
import { SearchAssuntosComponent } from './pages/search-assuntos/search-assuntos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AssuntosPipe } from './pipes/assuntos.pipe';
import { EditarperfilComponent } from './pages/editarperfil/editarperfil.component';
import { SearchAssuntosOnlyComponent } from './pages/search-assuntosonly/search-assuntosonly.component';
import { BrMaskerModule } from 'br-mask';
import { TipoAssuntoPipe } from './pipes/tipo-assunto.pipe';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { PerfilPessoalComponent } from './pages/perfil-pessoal/perfil-pessoal.component';
import { ChatComponent } from './pages/chat/chat.component';
import { DenunciaComponent } from './pages/denuncia/denuncia.component';
import { RecuperarsenhaComponent } from './pages/recuperarsenha/recuperarsenha.component';
import { AjudaComponent } from './pages/ajuda/ajuda.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { RecuperarsenhafinalizarComponent } from './pages/recuperarsenhafinalizar/recuperarsenhafinalizar.component';
import { PainelAdministrativoComponent } from './pages/adm/painel-administrativo/painel-administrativo.component';
import { ControlarUsuarioComponent } from './pages/adm/controlar-usuario/controlar-usuario.component';
import { ControlarAssuntoComponent } from './pages/adm/controlar-assunto/controlar-assunto.component';
import { ControlarDenunciaComponent } from './pages/adm/controlar-denuncia/controlar-denuncia.component';
import { CaixaDeContatoComponent } from './pages/adm/caixa-de-contato/caixa-de-contato.component';
import { ConversasComponent } from './components/conversas/conversas.component';
import { AmizadesComponent } from './components/amizades/amizades.component';
import { EncontrarPessoasModalComponent } from './components/modal/encontrar-pessoas-modal/encontrar-pessoas-modal.component';
import { Error404Component } from './pages/error404/error404.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NotificationCompleteComponent } from './components/modal/notification-complete/notification-complete.component';
import {environment} from "./environments/environment";
import { WaitLoginComponent } from './pages/wait-login/wait-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenutopoComponent,
    InicialComponent,
    HomeComponent,
    StarterpageComponent,
    LoggedInStarterPageComponent,
    LoggedMenuComponent,
    SearchAssuntosComponent,
    AssuntosPipe,
    EditarperfilComponent,
    SearchAssuntosOnlyComponent,
    TipoAssuntoPipe,
    PerfilPessoalComponent,
    ChatComponent,
    DenunciaComponent,
    RecuperarsenhaComponent,
    AjudaComponent,
    SobreComponent,
    RecuperarsenhafinalizarComponent,
    PainelAdministrativoComponent,
    ControlarUsuarioComponent,
    ControlarAssuntoComponent,
    ControlarDenunciaComponent,
    CaixaDeContatoComponent,
    ConversasComponent,
    AmizadesComponent,
    EncontrarPessoasModalComponent,
    Error404Component,
    NotificationsComponent,
    NotificationCompleteComponent,
    WaitLoginComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,//Add if needed
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        BrMaskerModule,
        NgxLoadingModule.forRoot({
          animationType: ngxLoadingAnimationTypes.wanderingCubes,
            backdropBackgroundColour: 'rgba(0,0,0,0.1)',
            backdropBorderRadius: '4px',
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
        }),

    ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
