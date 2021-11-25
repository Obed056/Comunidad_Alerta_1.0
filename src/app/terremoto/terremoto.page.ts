import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Logica } from '../models/logica';
import {FirebaseServiceService} from '../Services/firebase-service.service';

@Component({
  selector: 'app-terremoto',
  templateUrl: './terremoto.page.html',
  styleUrls: ['./terremoto.page.scss'],
})
export class TerremotoPage implements OnInit {

  constructor(private services: FirebaseServiceService ) { }
 
  ngOnInit() {
    this.services.getAlerta();
    this.services.getReportes();
   
  }
  OnSubmit(terremotoForm: NgForm){
   this.services.insertarTerremoto(terremotoForm.value);
   this.resetForm(terremotoForm);
    this.services.mensaje();

  }

  resetForm(terremotoForm: NgForm){
    if(terremotoForm != null)
     terremotoForm.reset();
    this.services.selectTerremoto=new Logica();
  }
}
