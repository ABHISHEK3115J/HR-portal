import { Injectable } from '@angular/core';
import { of as observableOf, Observable} from 'rxjs';
import { AngularFireAuth} from '@angular/fire/auth'
import {map, switchMap} from 'rxjs/operators';
import { auth } from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
/* use userName as potter@magic.co and password 123123 for admin authorization*/
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: Observable<firebase.User>;
 
 
/* Sign up */
SignUp(email: string, password: string) {
this.afAuth
.createUserWithEmailAndPassword(email, password)
.then(res => {
this.route.navigate(['Employees']);
console.log('You are Successfully signed up!', res);
})
.catch(error => {
console.log('Something is wrong:', error.message);
});
}
 
/* Sign in */
SignIn(email: string, password: string) {
this.afAuth
.signInWithEmailAndPassword(email, password)
.then((data) => {
this.route.navigate(['Employees'])
})
.catch(err => {
console.log('Something is wrong:',err.message);
});
}
 

  uid= this.afAuth.authState.pipe(map(authState=>
    {
      if(!authState)
         return null;
         else
          return authState.uid;
    }));
  isAdmin: Observable<Boolean> = this.uid.pipe(
 switchMap(uid=>
    {
      if(!uid){
          return observableOf(false);
      }
          else{
         return this.db.object<boolean>('/admin/'+uid).valueChanges();
           }})


  );
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase,public route: Router) {
    this.userData = afAuth.authState;

   }
  login(){
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider()).then((data)=>{
      this.route.navigate(['Employees']);
    });
   
  }
  logout(){
    this.afAuth.signOut().then((data)=>{
      this.route.navigate(['login'])

   })
  }
}
