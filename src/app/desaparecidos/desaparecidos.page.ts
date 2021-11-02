import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Logica } from '../models/logica';
import { FirebaseServiceService } from '../Services/firebase-service.service';

@Component({
  selector: 'app-desaparecidos',
  templateUrl: './desaparecidos.page.html',
  styleUrls: ['./desaparecidos.page.scss'],
})
export class DesaparecidosPage implements OnInit {

  constructor(private services: FirebaseServiceService ) { }
 
  ngOnInit() {
    this.services.getAlerta();
    this.services.getReportes();
   
  }
  OnSubmit(DesaparecidoForm: NgForm){
   this.services.insertarDesaparecido(DesaparecidoForm.value);
  
   this.resetForm(DesaparecidoForm);
  
   Swal.fire(
    'Alerta Enviada',
    'Reporte Enviado',
    'success'
  )
  
  }
  resetForm(DesaparecidoForm: NgForm){
    if(DesaparecidoForm != null)
    DesaparecidoForm.reset();
    this.services.selectDesaparecido=new Logica();
  }
}
