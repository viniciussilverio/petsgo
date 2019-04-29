import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {
  constructor(public afAuth: AngularFireAuth) { }
  SignOut() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    })
  }
}
