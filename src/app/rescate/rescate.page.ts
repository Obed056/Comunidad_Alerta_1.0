import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Logica } from '../models/logica';
import { FirebaseServiceService } from '../Services/firebase-service.service';

@Component({
  selector: 'app-rescate',
  templateUrl: './rescate.page.html',
  styleUrls: ['./rescate.page.scss'],
})
export class RescatePage implements OnInit {

  constructor(private services: FirebaseServiceService ) { }
 
  ngOnInit() {
    this.services.getAlerta();
    this.services.getReportes();
   
  }
  OnSubmit(RescateForm: NgForm){
   this.services.insertarRescate(RescateForm.value);
   this.resetForm(RescateForm)
   this.services.mensaje();
  
  }
  resetForm(RescateForm: NgForm){
    if(RescateForm != null)
    RescateForm.reset();
    this.services.selectRescate=new Logica();
  }
}
