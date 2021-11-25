import { Component, OnInit } from '@angular/core';
//importamos estas las herramientos a utilizar para el login
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
 } from '@angular/forms';
import { Router } from '@angular/router';
import { menuController } from '@ionic/core';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //declaramos un atributo
  formularioLogin: FormGroup;

  constructor(private authSvc: AuthService, private router: Router,public fb: FormBuilder) {
    //inicializamos el formulario pasando los campos del form

    this.formularioLogin=this.fb.group({
      nombre: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });

   }

  ngOnInit() {
    menuController.enable(false);
  }
  async onLogin(email, password) {
    try {
      const user = await this.authSvc.login(email.value, password.value);
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }
  async onLoginGoogle() {
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }
  async onLoginFacebook() {
    try {
      const user = await this.authSvc.loginFacebook();
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }
  private redirectUser(isVerified: boolean): void {
    if (isVerified) {
      this.router.navigate(['folder/Bienvenidos']);
      menuController.enable(true);
    } else {
      Swal.fire('Verificación de Correo',
      'Revisar su correcto electronico','info');
    }
  }
}
