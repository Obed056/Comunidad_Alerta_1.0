import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Logica } from '../models/logica';
import { FirebaseServiceService } from '../Services/firebase-service.service';

@Component({
  selector: 'app-despeje',
  templateUrl: './despeje.page.html',
  styleUrls: ['./despeje.page.scss'],
})
export class DespejePage implements OnInit {

  constructor(private services: FirebaseServiceService ) { }
 
  ngOnInit() {
    this.services.getAlerta();
    this.services.getReportes();
   
  }
  OnSubmit(DespejeForm: NgForm){
   this.services.insertarDespeje(DespejeForm.value);
   this.resetForm(DespejeForm);
  
   this.services.mensaje();
  
  }
  resetForm(DespejeForm: NgForm){
    if(DespejeForm != null)
    DespejeForm.reset();
    this.services.selectDespeje=new Logica();
  }

}
