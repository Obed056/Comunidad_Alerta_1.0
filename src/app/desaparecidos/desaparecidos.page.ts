import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseServiceService } from '../Services/firebase-service.service';

@Component({
  selector: 'app-desaparecidos',
  templateUrl: './desaparecidos.page.html',
  styleUrls: ['./desaparecidos.page.scss'],
})
export class DesaparecidosPage implements OnInit {

  constructor(private services: FirebaseServiceService ) { }
 
  ngOnInit() {
    this.services.getDesaparecido();
   
  }
  OnSubmit(DesaparecidoForm: NgForm){
   this.services.insertarDesaparecido(DesaparecidoForm.value);
  
  }
}
