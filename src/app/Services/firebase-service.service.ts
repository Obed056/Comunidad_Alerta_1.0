import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Logica } from '../models/logica';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  
  TerremotoList: AngularFireList<any>;
  selectTerremoto: Logica = new Logica();
  
  InundacionesList: AngularFireList<any>;
  selectTInundacion: Logica = new Logica();

  DespejeList: AngularFireList<any>;
  selectDespeje: Logica = new Logica();

  DeslizamientoList: AngularFireList<any>;
  selectDeslizamiento: Logica = new Logica();

  RescateList: AngularFireList<any>;
  selectRescate: Logica = new Logica();

  DesaparecidoList: AngularFireList<any>;
  selectDesaparecido: Logica = new Logica();

  constructor(private firebase: AngularFireDatabase) { }

  getTerremoto(){
   return this.TerremotoList=this.firebase.list('Emergencias')
   }
  insertarTerremoto(logica: Logica){
    logica.tipoemergencia = "Terremoto";
    this.TerremotoList.push({
      tipoemergencia: logica.tipoemergencia,
      nombredepersona: logica.nombrepersona,
      direccion: logica.direccion,
      telefono: logica.telefono,
      descripcion: logica.descripcion
    });
  } 
   getInundaciones(){
    return this.InundacionesList=this.firebase.list('Emergencias')
    }
  insertarInundaciones(logica: Logica){
    logica.tipoemergencia="Inundación"
    this.InundacionesList.push({
      tipoemergencia: logica.tipoemergencia,
      nombredepersona: logica.nombrepersona,
      direccion: logica.direccion,
      telefono: logica.telefono,
      descripcion: logica.descripcion
    });
  }
  getDespeje(){
    return this.DespejeList=this.firebase.list('Emergencias')
    }
  insertarDespeje(logica: Logica){
    logica.tipoemergencia="DespejeDeArbol"
    this.DespejeList.push({
      tipoemergencia: logica.tipoemergencia,
      nombredepersona: logica.nombrepersona,
      direccion: logica.direccion,
      telefono: logica.telefono,
      descripcion: logica.descripcion
    });
  }

  getDeslizamiento(){
    return this.DeslizamientoList=this.firebase.list('Emergencias')
    }
  insertarDeslizamiento(logica: Logica){
    logica.tipoemergencia="Deslizamiento"
    this.DeslizamientoList.push({
      tipoemergencia: logica.tipoemergencia,
      nombredepersona: logica.nombrepersona,
      direccion: logica.direccion,
      telefono: logica.telefono,
      descripcion: logica.descripcion
    });
  }
  
  getRescate(){
    return this.RescateList=this.firebase.list('Emergencias')
    }
  insertarRescate(logica: Logica){
    logica.tipoemergencia="Rescate"
    this.RescateList.push({
      tipoemergencia: logica.tipoemergencia,
      nombredepersona: logica.nombrepersona,
      direccion: logica.direccion,
      telefono: logica.telefono,
      descripcion: logica.descripcion
    });
  }

  getDesaparecido(){
    return this.DesaparecidoList=this.firebase.list('Emergencias')
    }
  insertarDesaparecido(logica: Logica){
    logica.tipoemergencia="Desaparecido"
    this.DesaparecidoList.push({
      tipoemergencia: logica.tipoemergencia,
      nombredepersona: logica.nombrepersona,
      direccion: logica.direccion,
      telefono: logica.telefono,
      descripcion: logica.descripcion
    });
  }
}
