# OpenWeatherFront

App made in Angular 11, RXJS 6, Akita 6, to search for a city and show line chart of temperature and humidity forecast, for the next 5 days, from https://openweathermap.org/forecast5

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deploy

The app is configured to be deployed in heroku, using express and serving the build folder from the server.js, by only pushing the changes using the heroku CLI.
This app uses the backend created in the other repo named: open-weather-back

# Sample Routes
http://localhost:4200/home
http://localhost:4200/forecast/city/miami
http://localhost:4200/forecast/shared/6098b70f121f0c0015b6d81d
