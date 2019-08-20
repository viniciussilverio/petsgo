import { Component, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(public afAuth: AngularFireAuth) { }
  @ViewChild('mySlider') slides: IonSlides;
  SignOut() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    })
  }
  
  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }
}
