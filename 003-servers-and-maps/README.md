# 003 - Servers and Maps

The Purpose of this example is to understand how to interact with servers in a real life application. We will work with [Open Wheater API][1] to retrive data. You'll also learn a little about [ui-leaflet][2] and [Angular Materials][3]. We are going to cover the following subjects: 

*  Data Services and Factories
* `$http` and `$resource`
* `ui-leaflet`
* `$mdDialog`

### To Do
Perform the following in the current example:
* Capture the map click [event][4], and get the [lat,lng].
* Bring the [Weather][5] or [UV][8] of the location selected.
* Place a [marker][6] in the locaton selected.
* Promp a modal using `$mdDialog` [service][7], to show the weather data.

### Solution

You might notice that the example is not completed - that's part of the challenge! Figure it out and don't forget the best practices! If you've already completed it, take a look at the solution [here][3].

[1]:https://openweathermap.org/api
[2]: http://angular-ui.github.io/ui-leaflet/#!/
[3]: https://material.angularjs.org/latest/
[4]: http://angular-ui.github.io/ui-leaflet/#!/examples/events
[5]: https://openweathermap.org/current
[6]: http://angular-ui.github.io/ui-leaflet/#!/examples/marker
[7]: https://material.angularjs.org/latest/api/service/$mdDialog
[8]: https://openweathermap.org/api/uvi
[9]: https://openweathermap.org/api/pollution/co