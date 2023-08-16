import { Component,OnInit } from '@angular/core';
//logica para leer los datos de firebase
//referenciar al paquete utilitario que permite conectar con la base de datos de firebase
import {AngularFirestore} from '@angular/fire/compat/firestore';

import {NotificationService} from '@app/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  //cargar el spinner
  showSpinner=false;

  title = 'client-tienda-app';


//se inicializar la base de datos de firebase
constructor(private fs:AngularFirestore,
  private notification: NotificationService
  ){}
ngOnInit(): void {
    //hago referencia a la variable fs que es la de base de datos de firebase
    // utilizo el collection para referenciar a la coleccion que quiero leer en este caso test
    // darle lectura a los datos con stateChanges
    // para poder extraer los datos de esos cambios se llama el subscribe
    // creo una variable de tipo personas que representa los documentos 
    // si se tiene problemas al compilar revisar esta pagina https://lightrun.com/answers/angular-angularfire-angular-v15-support
    this.fs.collection('test').stateChanges().subscribe(personas =>{
      console.log(personas.map(x=>x.payload.doc.data()))
    })
}

onToggleSpinner() : void {
  this.showSpinner =!this.showSpinner;
}

onFilesChanged(urls: string | string[]) : void {
  console.log('urls', urls);
}

onSuccess() : void {
  this.notification.success("El procedimiento fue exitoso");
}

onError() : void {
  this.notification.error("Se encontraron errores en el proceso");
}

}
