import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the FavAnimalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fav-animal',
  templateUrl: 'fav-animal.html',
})
export class FavAnimalPage {
myFavAnimal:string;

constructor(private storage: Storage, public navCtrl: NavController) {
}


saveFavAnimal(){
  console.log(this.myFavAnimal);
  this.storage.set("FavAnimal", this.myFavAnimal);
  this.navCtrl.pop();
}

ionViewWillEnter(){
this.storage.get("FavAnimal")
.then((data)=>{
  this.myFavAnimal = data;
})
.catch((err) =>{
console.log("Database retrieval error")
})
}
}
