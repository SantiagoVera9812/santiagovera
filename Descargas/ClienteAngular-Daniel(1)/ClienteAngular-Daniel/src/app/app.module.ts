import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListarComponent } from './front-admin/album-listar/album-listar.component';
import { CancionListarComponent } from './front-admin/cancion-listar/cancion-listar.component';
import { EditarAlbumComponent } from './front-admin/editar-album/editar-album.component';
import { EditarCancionComponent } from './front-admin/editar-cancion/editar-cancion.component';
import { EditarGeneroComponent } from './front-admin/editar-genero/editar-genero.component';
import { FormAlbumComponent } from './front-admin/form-album/form-album.component';
import { FormCancionComponent } from './front-admin/form-cancion/form-cancion.component';
import { FormGeneroComponent } from './front-admin/form-genero/form-genero.component';
import { GeneroListarComponent } from './front-admin/genero-listar/genero-listar.component';
import { LoginAdminFormComponent } from './front-admin/login-admin/login-admin-form.component';
import { LoginAdminComponent } from './front-admin/login-admin/login-admin.component';
import { MenuAdminAlbumComponent } from './front-admin/menu-admin-album/menu-admin-album.component';
import { MenuAdminCancionComponent } from './front-admin/menu-admin-cancion/menu-admin-cancion.component';
import { MenuAdminGeneroComponent } from './front-admin/menu-admin-genero/menu-admin-genero.component';
import { MenuAdminComponent } from './front-admin/menu-admin/menu-admin.component';
import { LoginFormComponent } from './front-cliente/login-cliente/login-cliente-form.component';
import { LoginClienteComponent } from './front-cliente/login-cliente/login-cliente.component';
import { MenuClienteComponent } from './front-cliente/menu-cliente/menu-cliente.component';
import { RegistrarUsuarioComponent } from './front-cliente/registrar-usuario/registrar-usuario.component';
import { GeneroListaComponent } from './genero-lista/genero-lista.component';
import { HomeComponent } from './home/home.component';
import { RecomendarListaComponent } from './recomendar-lista/recomendar-lista.component';
import { AlbumService } from './service/album.service';
import { GeneroService } from './service/genero.service';
import { RecomendacionService } from './service/recomendacion.service';
import { TrackService } from './service/track.service';
import { TokenAuthService } from './token-auth.service';
import { TokenPostBackendService } from './token-post-backend.service';
import { ToolBarHeaderComponent } from './tool-bar-header/tool-bar-header.component';
import { UsuarioVotanteListService } from './usuario-votante-list.service';
import { UsuarioVotanteListComponent } from './usuario-votante-list/usuario-votante-list.component';
import { VotoListaService } from './voto-lista.service';
import { VotoListaComponent } from './voto-lista/voto-lista.component';
import { ClienteSomeAlbumComponent } from './front-cliente/cliente-some-album/cliente-some-album.component';
import { MenuClienteAlbumComponent } from './front-cliente/menu-cliente-album/menu-cliente-album.component';
import { MenuClienteCancionComponent } from './front-cliente/menu-cliente-cancion/menu-cliente-cancion.component';
import { MenuClienteCancionDetalleComponent } from './front-cliente/menu-cliente-cancion-detalle/menu-cliente-cancion-detalle.component';
import { MenuClienteGeneroComponent } from './front-cliente/menu-cliente-genero/menu-cliente-genero.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneroListaComponent,
    UsuarioVotanteListComponent,
    RecomendarListaComponent,
    AlbumListarComponent,
    CancionListarComponent,
    VotoListaComponent,
    LoginFormComponent,
    MenuClienteComponent,
    LoginClienteComponent,
    LoginAdminComponent,
    LoginAdminFormComponent,
    HomeComponent,
    ToolBarHeaderComponent,
    MenuAdminComponent,
    MenuAdminAlbumComponent,
    MenuAdminGeneroComponent,
    MenuAdminCancionComponent,
    FormAlbumComponent,
    EditarAlbumComponent,
    EditarCancionComponent,
    EditarGeneroComponent,
    FormGeneroComponent,
    FormCancionComponent,
    GeneroListarComponent,
    RegistrarUsuarioComponent,
    MenuClienteGeneroComponent,
    MenuClienteAlbumComponent,
    MenuClienteCancionComponent,
    MenuClienteCancionDetalleComponent,
    ClienteSomeAlbumComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule

  ],
  providers: [
    UsuarioVotanteListService,
    RecomendacionService,
    VotoListaService,
    AlbumService,
    GeneroService,
    TrackService,
    TokenAuthService,
    TokenPostBackendService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
