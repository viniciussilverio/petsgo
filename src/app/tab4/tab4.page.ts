import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  constructor(public afAuth: AngularFireAuth) { }
  SignOut() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    })
  }
}
