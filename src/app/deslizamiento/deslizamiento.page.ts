import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseServiceService } from '../Services/firebase-service.service';

@Component({
  selector: 'app-deslizamiento',
  templateUrl: './deslizamiento.page.html',
  styleUrls: ['./deslizamiento.page.scss'],
})
export class DeslizamientoPage implements OnInit {

  constructor(private services: FirebaseServiceService ) { }
 
  ngOnInit() {
    this.services.getDeslizamiento();
   
  }
  OnSubmit(DeslizamientoForm: NgForm){
   this.services.insertarDeslizamiento(DeslizamientoForm.value);
  
  }
}
