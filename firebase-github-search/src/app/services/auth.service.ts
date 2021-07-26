import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private authFireAuth: AngularFireAuth) {}

  signUp(email: string, password: string) {
    return this.authFireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email: string, password: string) {
    return this.authFireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  getUser() {
    return this.authFireAuth.authState;
  }

  signOut() {
    return this.authFireAuth.auth.signOut();
  }
}
