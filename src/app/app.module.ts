import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { ConexionService } from './services/conexion.service';
import { ListaComponent } from './components/lista/lista.component';
import { ListaAddComponent } from './components/lista-add/lista-add.component';

// para poder usar el forms model 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ListaAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFirestoreModule,
    AngularFireStorageModule

  ],
  providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
