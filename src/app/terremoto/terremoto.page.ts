import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FirebaseServiceService} from '../Services/firebase-service.service';

@Component({
  selector: 'app-terremoto',
  templateUrl: './terremoto.page.html',
  styleUrls: ['./terremoto.page.scss'],
})
export class TerremotoPage implements OnInit {

  constructor(private services: FirebaseServiceService ) { }
 
  ngOnInit() {
    this.services.getTerremoto();
   
  }
  OnSubmit(terremotoForm: NgForm){
   this.services.insertarTerremoto(terremotoForm.value);
  
  }

}
