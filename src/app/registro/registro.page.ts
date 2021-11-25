import { Component, OnInit } from '@angular/core';
//importamos estas las herramientos a utilizar para el login
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
 } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
 
  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }
  async onRegister(email, password) {
    try {
      const user = await this.authSvc.register(email.value, password.value);
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log('Error', error);
    }
  }
  private redirectUser(isVerified: boolean): void {
    if (isVerified) {
      this.router.navigate(['Folder/Bienvenidos']);
    } else {
      Swal.fire('Verificación de Correo',
      'Revisar su correcto electronico','info');
      this.router.navigate(['login']);
    }
  }
}

