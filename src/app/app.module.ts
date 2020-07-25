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

const config = {
  apiKey: "AIzaSyCA86EO2xjYrUNXdw-1Qk6-MgbVLm7rDdQ",
    authDomain: "crudinfirebase-bbfa7.firebaseapp.com",
    databaseURL: "https://crudinfirebase-bbfa7.firebaseio.com",
    projectId: "crudinfirebase-bbfa7",
    storageBucket: "crudinfirebase-bbfa7.appspot.com",
    messagingSenderId: "335657921739",
    appId: "1:335657921739:web:efc9314436c2e4aae23f4e",
    measurementId: "G-159L214YKX"
  };


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ListaAddComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
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
