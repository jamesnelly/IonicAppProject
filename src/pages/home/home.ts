import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnimalsPage } from'./../animals/animals'; 
import { CropsPage } from'./../crops/crops';
import { MachineryPage } from'./../machinery/machinery';
import { MoviePage } from '../movie/movie';
import {FlashlightPage} from '../flashlight/flashlight';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  openAnimal() {
    this.navCtrl.push(AnimalsPage);
    }
    openCrops() {
      this.navCtrl.push(CropsPage);
      }
      openMachinery() {
        this.navCtrl.push(MachineryPage);
        }
          openMovie() {
            this.navCtrl.push(MoviePage);
            }
            openFlashlight() {
              this.navCtrl.push(FlashlightPage);
              }
}
