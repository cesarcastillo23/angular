import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiY2VzYXJjYXN0aWxsbzIzIiwiYSI6ImNsanRmcTV6NDB2cmgzcnJ3bmhhbG1wNG8ifQ.T4eOE_G7AIoJDutSRPidbA';


if(!navigator.geolocation){
  throw new Error('El navergador no soporta la Geolocalizacion');

}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
