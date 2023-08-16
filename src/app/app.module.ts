import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// paquete principal de integracion con Firebase
import {AngularFireModule} from '@angular/fire/compat';
// enlazarme con los servicios de storage o almacenamiento de archivos de firebase
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
// coneccion a la base de datos de firebase
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
// servicio de autenticacion de firebase
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// paquetes de inicializacion de los servicios 
import { provideFirebaseApp,initializeApp } from '@angular/fire/app';
// servicios de instancia
import { getFirestore,provideFirestore } from '@angular/fire/firestore';
// servicios de autenticacion
import {getAuth,provideAuth} from '@angular/fire/auth';
// referencias hacia el storage
import {getStorage,provideStorage} from '@angular/fire/storage';

// importo el environment donde estan los datos para inicializar la app
// manejarlo asi en modo local funciona pero en un servidor no import { environment } from 'environments/environment';
//por eso se pone la variable que se creo en el tsconfig
import { environment } from '@src/environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NotificationModule } from './services';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
//shared components
import { IndicatorsModule } from './shared/indicators';
import { PopupsModule } from './shared/popups';
import { PlantillasModule } from './shared/plantillas';



@NgModule({
  declarations: [
    AppComponent,
   
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    

    provideFirebaseApp(()=> initializeApp(environment.firebase.config)),
    provideFirestore(()=> getFirestore()),
    provideStorage(()=> getStorage()),
    provideAuth(()=> getAuth()),

    AngularFireModule.initializeApp(environment.firebase.config),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule,

    IndicatorsModule,
    PlantillasModule,

    BrowserAnimationsModule,
    PopupsModule,
    NotificationModule.forRoot(),
    
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
