import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Logica } from '../models/logica';
import { FirebaseServiceService } from '../Services/firebase-service.service';

@Component({
  selector: 'app-deslizamiento',
  templateUrl: './deslizamiento.page.html',
  styleUrls: ['./deslizamiento.page.scss'],
})
export class DeslizamientoPage implements OnInit {

  constructor(private services: FirebaseServiceService ) { }
 
  ngOnInit() {
    this.services.getAlerta();
    this.services.getReportes();
   
  }
  OnSubmit(DeslizamientoForm: NgForm){
   this.services.insertarDeslizamiento(DeslizamientoForm.value);
   this.resetForm(DeslizamientoForm);
  
   Swal.fire(
    'Alerta Enviada',
    'Reporte Enviado',
    'success'
  )
  
  }
  resetForm(DeslizamientoForm: NgForm){
    if(DeslizamientoForm != null)
    DeslizamientoForm.reset();
    this.services.selectDeslizamiento=new Logica();
  }
}
