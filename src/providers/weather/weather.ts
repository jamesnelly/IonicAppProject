import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';   
/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

  getWeather(): Observable<any>{
    return this.http.get("http://api.apixu.com/v1/current.json?key=d8a478ba49ac46fab21173454183004&q=Dublin")
   
  }
    }
