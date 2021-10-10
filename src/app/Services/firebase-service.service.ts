import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore"
import {AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Terremoto } from '../models/terremoto';
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
   return this.TerremotoList=this.firebase.list('Terremoto')
   }
  insertarTerremoto(terremoto: Logica){
    this.TerremotoList.push({
      name: terremoto.name,
      location: terremoto.locacion,
      telefono: terremoto.telefone,
      descripcion: terremoto.description
    });
  } 
   getInundaciones(){
    return this.InundacionesList=this.firebase.list('Inundacion')
    }
  insertarInundaciones(inundaciones: Logica){
    this.InundacionesList.push({
      name: inundaciones.name,
      location: inundaciones.locacion,
      telefono: inundaciones.telefone,
      descripcion: inundaciones.description
    });
  }
  getDespeje(){
    return this.DespejeList=this.firebase.list('DespejeDeArbol')
    }
  insertarDespeje(logica: Logica){
    this.DespejeList.push({
      name: logica.name,
      location: logica.locacion,
      telefono: logica.telefone,
      descripcion: logica.description
    });
  }

  getDeslizamiento(){
    return this.DeslizamientoList=this.firebase.list('Deslizamiento')
    }
  insertarDeslizamiento(logica: Logica){
    this.DeslizamientoList.push({
      name: logica.name,
      location: logica.locacion,
      telefono: logica.telefone,
      descripcion: logica.description
    });
  }
  
  getRescate(){
    return this.RescateList=this.firebase.list('Rescate')
    }
  insertarRescate(logica: Logica){
    this.RescateList.push({
      name: logica.name,
      location: logica.locacion,
      telefono: logica.telefone,
      descripcion: logica.description
    });
  }

  getDesaparecido(){
    return this.DesaparecidoList=this.firebase.list('Desaparecido')
    }
  insertarDesaparecido(logica: Logica){
    this.DesaparecidoList.push({
      name: logica.name,
      location: logica.locacion,
      telefono: logica.telefone,
      descripcion: logica.description
    });
  }
}
