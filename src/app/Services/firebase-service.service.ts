import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import Swal from 'sweetalert2';
import { Logica } from '../models/logica';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  
  

  Reportes: AngularFireList<any>;
  Alerta: AngularFireList<any>;
  selectTerremoto: Logica = new Logica();
  selectTInundacion: Logica = new Logica();
  selectDespeje: Logica = new Logica();
  selectDeslizamiento: Logica = new Logica();
  selectRescate: Logica = new Logica();

  DesaparecidoList: AngularFireList<any>;
  selectDesaparecido: Logica = new Logica();

  constructor(private firebase: AngularFireDatabase) { }

 
   getReportes(){
    return this.Reportes=this.firebase.list('Reportes')   
    }
    getAlerta(){
      return this.Alerta=this.firebase.list('Emergencias')   
      }
  insertarTerremoto(logica: Logica){
    logica.tipoemergencia = "Terremoto";
    this.Alerta.push({
      tipoemergencia: logica.tipoemergencia,
      nombredepersona: logica.nombrepersona,
      direccion: logica.direccion,
      telefono: logica.telefono,
      descripcion: logica.descripcion
    });
    this.Reportes.push({
      tipoemergencia: logica.tipoemergencia,
      nombredepersona: logica.nombrepersona,
      direccion: logica.direccion,
      telefono: logica.telefono,
      descripcion: logica.descripcion
    });
  } 

  insertarInundaciones(logica: Logica){
    logica.tipoemergencia="Inundación"
    this.Alerta.push({
      tipoemergencia: logica.tipoemergencia,
      nombredepersona: logica.nombrepersona,
      direccion: logica.direccion,
      telefono: logica.telefono,
      descripcion: logica.descripcion
    });
    this.Reportes.push({
      tipoemergencia: logica.tipoemergencia,
      nombredepersona: logica.nombrepersona,
      direccion: logica.direccion,
      telefono: logica.telefono,
      descripcion: logica.descripcion
    });
  }
  insertarDespeje(logica: Logica){
    logica.tipoemergencia="Despeje de Arbol"
    this.Alerta.push({
      tipoemergencia: logica.tipoemergencia,
      nombredepersona: logica.nombrepersona,
      direccion: logica.direccion,
      telefono: logica.telefono,
      descripcion: logica.descripcion
    });
    this.Reportes.push({
      tipoemergencia: logica.tipoemergencia,
      nombredepersona: logica.nombrepersona,
      direccion: logica.direccion,
      telefono: logica.telefono,
      descripcion: logica.descripcion
    });
  }

  insertarDeslizamiento(logica: Logica){
    logica.tipoemergencia="Deslizamiento"
    this.Alerta.push({
      tipoemergencia: logica.tipoemergencia,
      nombredepersona: logica.nombrepersona,
      direccion: logica.direccion,
      telefono: logica.telefono,
      descripcion: logica.descripcion
    });
    this.Reportes.push({
      tipoemergencia: logica.tipoemergencia,
      nombredepersona: logica.nombrepersona,
      direccion: logica.direccion,
      telefono: logica.telefono,
      descripcion: logica.descripcion
    });
  }
  

  insertarRescate(logica: Logica){
    logica.tipoemergencia="Rescate"
    this.Alerta.push({
      tipoemergencia: logica.tipoemergencia,
      nombredepersona: logica.nombrepersona,
      direccion: logica.direccion,
      telefono: logica.telefono,
      descripcion: logica.descripcion
    });
    this.Reportes.push({
      tipoemergencia: logica.tipoemergencia,
      nombredepersona: logica.nombrepersona,
      direccion: logica.direccion,
      telefono: logica.telefono,
      descripcion: logica.descripcion
    });
  }

  insertarDesaparecido(logica: Logica){
    logica.tipoemergencia="Desaparecido"
    this.Alerta.push({
      tipoemergencia: logica.tipoemergencia,
      nombredepersona: logica.nombrepersona, 
      direccion: logica.direccion,
      telefono: logica.telefono,
      descripcion: logica.descripcion
    });
    this.Reportes.push({
      tipoemergencia: logica.tipoemergencia,
      nombredepersona: logica.nombrepersona,
      direccion: logica.direccion,
      telefono: logica.telefono,
      descripcion: logica.descripcion
    });
  }
  public mensaje(){
    Swal.fire(
      'Se ha enviado su mensaje!',
      'En unos momentos un representante se pondrá en contacto con usted, mantenga su número de contacto al alcance',
      'success'
    )
  }
}
