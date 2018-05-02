import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

/**
 * Generated class for the FlashlightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flashlight',
  templateUrl: 'flashlight.html',
})
export class FlashlightPage {
  isOn: boolean = true;

  constructor(private flashlight: Flashlight,public navCtrl: NavController) {
  }

 async isAvailable():Promise<boolean>{
   try{
     return await this.flashlight.available();
   }
   catch(e){
     console.log(e);
   }
 }

 async toggleFlash():Promise<void>{
   try{
     let available = await this.isAvailable();
     if(available){
       await this.flashlight.toggle();
       this.isOn = !this.isOn;
     }
       else{
         console.log("Ins't available");  
     }
   }
   catch(e){
    console.log(e);
   }
  }

  async turnOnFlash():Promise<void>{
    await this.flashlight.switchOn();
  }

  async turnOffFlash():Promise<void>{
    await this.flashlight.switchOff();
  }
}