import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Logica } from '../models/logica';
import {FirebaseServiceService} from '../Services/firebase-service.service';

@Component({
  selector: 'app-inundaciones',
  templateUrl: './inundaciones.page.html',
  styleUrls: ['./inundaciones.page.scss'],
})
export class InundacionesPage implements OnInit {

  constructor(private services: FirebaseServiceService ) { }
 
  ngOnInit() {
    this.services.getAlerta();
    this.services.getReportes();
   
  }
  OnSubmit(InundacionForm: NgForm){
   this.services.insertarInundaciones(InundacionForm.value);
   this.resetForm(InundacionForm);
   this.services.mensaje();
  
  }
  resetForm(InundacionForm: NgForm){
    if(InundacionForm != null)
    InundacionForm.reset();
    this.services.selectTInundacion=new Logica();
  }
}
