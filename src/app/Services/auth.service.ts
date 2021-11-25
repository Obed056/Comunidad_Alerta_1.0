import { Injectable } from '@angular/core';
import { User } from '../shared/user.interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import {GoogleAuthProvider,FacebookAuthProvider} from 'firebase/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import firebase from '@firebase/app-compat';
import { getAuth, setPersistence, signInWithRedirect, inMemoryPersistence} from "firebase/auth";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user$: Observable<User>;
  storage: any;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
   /*  gapi.load('auth2',()=>{
      gapi.auth2.init({
         client_id: '998486407017-nopdm7tuesd395au2bfca3jn67e2ovaj.apps.googleusercontent.com'
      })
    }); */
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async loginGoogle(): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
       user.getIdToken().then(function(token){
        localStorage.setItem("token",token);
        localStorage.setItem("correo", user.email);
        sessionStorage.setItem("token",token);
        sessionStorage.setItem("correo", user.email);

        window.addEventListener('storage', () => {
          // When local storage changes, dump the list to
          // the console.
          console.log(JSON.parse(window.localStorage.getItem(token)));
        });
    
      });
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log('Error->', error);
    }
  }
  gooogle(){
      const auth = getAuth();
      setPersistence(auth, inMemoryPersistence)
        .then(() => {
          const provider = new GoogleAuthProvider();
          // In memory persistence will be applied to the signed in Google user
          // even though the persistence was set to 'none' and a page redirect
          // occurred.
          return signInWithRedirect(auth, provider);
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
        });
  }
  async loginFacebook(): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithPopup(new FacebookAuthProvider());
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async register(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await this.sendVerifcationEmail();
      return user;
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async login(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async sendVerifcationEmail(): Promise<void> {
    try {
      return (await this.afAuth.currentUser).sendEmailVerification();
    } catch (error) {
      console.log('Error->', error);
    }
  }

  isEmailVerified(user: User): boolean {
    return user.emailVerified === true ? true : false;
  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log('Error->', error);
    }
  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
    };

    return userRef.set(data, { merge: true });
  }
}
