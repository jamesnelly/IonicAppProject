import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AnimalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animals',
  templateUrl: 'animals.html',
})
export class AnimalsPage {


FavAnimal:string;
  constructor(private storage: Storage, public navCtrl: NavController) {

  }

  openFavAnimalPage(){
    this.navCtrl.push("FavAnimalPage")
  }

  ionViewWillEnter(){
    this.storage.get("FavAnimal")
    .then((data) =>{
      this.FavAnimal = data;
    })
    .catch((err) =>{
    console.log("Database retrieval error")
  })

  }
}