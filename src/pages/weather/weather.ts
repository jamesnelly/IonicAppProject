import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {

  weather: any[]=[];
constructor(public navCtrl: NavController,private Wp:WeatherProvider) {
}
ionViewDidLoad(){
this.Wp.getWeather().subscribe(data =>
{
this.weather = data.Search;
});
}
}
