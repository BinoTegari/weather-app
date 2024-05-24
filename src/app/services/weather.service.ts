import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    constructor(private http: HttpClient){}

    getWeatherDataByCity(city: string): Observable<any> {
       return this.http.get<any>(`http://api.weatherstack.com/current?access_key=a5ba2bbc44f4cef2db525bd2a4563282&query=${city}`);
    }
}
