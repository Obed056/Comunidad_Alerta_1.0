import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseServiceService } from '../Services/firebase-service.service';

@Component({
  selector: 'app-despeje',
  templateUrl: './despeje.page.html',
  styleUrls: ['./despeje.page.scss'],
})
export class DespejePage implements OnInit {

  constructor(private services: FirebaseServiceService ) { }
 
  ngOnInit() {
    this.services.getDespeje();
   
  }
  OnSubmit(DespejeForm: NgForm){
   this.services.insertarDespeje(DespejeForm.value);
  
  }

}
