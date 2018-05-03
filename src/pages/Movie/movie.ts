import { Component } from '@angular/core';
import { MovieProvider } from '../../providers/movie/movie';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
})
export class MoviePage {

  movies: any[]=[];
  constructor(public navCtrl: NavController, private mp:MovieProvider) {

  }
ionViewDidLoad(){
this.mp.getMovieData().subscribe(data =>
{
this.movies = data.Search;
});
}
}
