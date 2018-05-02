import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavAnimalPage } from './fav-animal';

@NgModule({
  declarations: [
    FavAnimalPage,
  ],
  imports: [
    IonicPageModule.forChild(FavAnimalPage),
  ],
})
export class FavAnimalPageModule {}
