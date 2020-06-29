import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit {

  public WeatherData: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getCityWeatherData('Samara');
  }

  getCityWeatherData(city: string) {
    this.weatherService.getWeatherDataByCity(city).subscribe((data) => {
      this.WeatherData = data;
    });
  }

}
