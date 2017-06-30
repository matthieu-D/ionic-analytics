import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  hasAnswered = false;

  constructor(public navCtrl: NavController, public ga: GoogleAnalytics) {
    this.ga.startTrackerWithId('UA-101858534-1')
      .then(() => {
        console.log('Google analytics is ready now');
        this.ga.trackView('home');
      })
      .catch(e => console.log('Error starting GoogleAnalytics', e));
  }

  answer(number) {
    this.ga.trackEvent('form', 'vote', number)
    .then(() => {
      this.hasAnswered = true;
    });
  }
}
