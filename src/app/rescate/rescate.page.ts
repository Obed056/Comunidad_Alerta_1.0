import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseServiceService } from '../Services/firebase-service.service';

@Component({
  selector: 'app-rescate',
  templateUrl: './rescate.page.html',
  styleUrls: ['./rescate.page.scss'],
})
export class RescatePage implements OnInit {

  constructor(private services: FirebaseServiceService ) { }
 
  ngOnInit() {
    this.services.getRescate();
   
  }
  OnSubmit(DeslizamientoForm: NgForm){
   this.services.insertarRescate(DeslizamientoForm.value);
  
  }

}
