import { Component, OnInit } from '@angular/core';
//importamos estas las herramientos a utilizar para el login
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
 } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //declaramos un atributo
  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder) {
    //inicializamos el formulario pasando los campos del form

    this.formularioLogin=this.fb.group({
      nombre: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });

   }

  ngOnInit() {
  }

}
