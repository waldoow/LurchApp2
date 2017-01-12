import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {ParispremierPage} from '../parispremier/parispremier';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    parispremierPage = ParispremierPage;

  constructor(public navCtrl: NavController) {

  }

}
