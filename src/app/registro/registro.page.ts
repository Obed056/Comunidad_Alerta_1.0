import { Component, OnInit } from '@angular/core';
//importamos estas las herramientos a utilizar para el login
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
 } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  //declaramos un atributo
  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController) {
    //inicializamos el formulario pasando los campos del form
    this.formularioRegistro = this.fb.group({
        nombre: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required),
        confirmacionPassword: new FormControl('',Validators.required)
    });

   }

  ngOnInit(){
  }
  //mensage de los datos de registros si es invalido//
  async guardar(){
    const f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header:'"ERROR DE CASILLAS"',
        message: 'Debes completar los datos.',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }
  }

}
