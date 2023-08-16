//subir el archivo al servidor y como resultado devolver la url para almacenarla en la bd PosgreSQL

import { Component, OnInit, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
// aca esta la coneccion a firebase
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/compat/storage';
import { UploadTaskSnapshot } from '@angular/fire/storage';
// objetos de desempaquete
import {Observable, Subject, lastValueFrom} from 'rxjs';
// operadores
import {finalize, takeUntil} from 'rxjs/operators';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit, OnDestroy {

  @Input() file !: File;
  @Output() completed = new EventEmitter<string>();
  //monitorear la subida del archivo a firebase
  task !: AngularFireUploadTask;
  // porcentaje de subida para saber con que porcentaje se ha subido
  percentage$ !: Observable<number | undefined>;

  // almacenar la url dentro de la base de datos
  downloadURL !: string;
  // se declara el objeto observable usado en el metod startUpload
  snapshot$ !: Observable<UploadTaskSnapshot | undefined>;

 


  private destroy = new Subject<void>();

  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.startUpload();
  }
// metodo que se encarga de subir el archivo al firebase
  startUpload(): void {
    // carpeta o directorio donde se va a guardar el archivo
      const path = `${this.file.type.split('/')[0]}/${Date.now()}_${this.file.name}`;
    // inicializar el path
      const storageRef = this.storage.ref(path);
    // tarea de subida
      this.task = this.storage.upload(path, this.file);
    // porcentaje en el cual se esta subiendo el archivo
      this.percentage$ = this.task.percentageChanges();
    // snapshot del estado actual del archivo
      this.snapshot$ = this.task.snapshotChanges() as Observable<UploadTaskSnapshot | undefined>
    // evaluando la subida al servidor
      this.snapshot$.pipe(
        takeUntil(this.destroy),
        finalize(async () => {
          const storageRefObservable$ = storageRef.getDownloadURL();
          //el objetivo de subir un archivo a firebase es obtener url de la imagen porque yo necesito guardar la url en 
          //la base de datos de django
          this.downloadURL = await lastValueFrom(storageRefObservable$);
          this.completed.next(this.downloadURL);
        })
      ).subscribe();

  }

  ngOnDestroy() : void {
    this.destroy.next();
    this.destroy.complete()
  }



}
