import { Component, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  animal: number;
  sexo: number;
  constructor(public afAuth: AngularFireAuth) {
    this.animal = 0;
    this.sexo = 0;
  }
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

  dog() {
    this.animal = 0;
  }

  cat() {
    this.animal = 1;
  }

  menino() {
    this.sexo = 0;
  }

  menina() {
    this.sexo = 1;
  }

  done() {
    console.log("Sending");
  }
}
