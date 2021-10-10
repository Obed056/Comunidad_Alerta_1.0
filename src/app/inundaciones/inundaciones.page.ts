import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FirebaseServiceService} from '../Services/firebase-service.service';

@Component({
  selector: 'app-inundaciones',
  templateUrl: './inundaciones.page.html',
  styleUrls: ['./inundaciones.page.scss'],
})
export class InundacionesPage implements OnInit {

  constructor(private services: FirebaseServiceService ) { }
 
  ngOnInit() {
    this.services.getInundaciones();
   
  }
  OnSubmit(InundacionForm: NgForm){
   this.services.insertarInundaciones(InundacionForm.value);
  
  }
}
