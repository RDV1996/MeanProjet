import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    post = {
        url: "https://i.imgur.com/h1LyCaz.jpg",
        author: "Roby",
        title: "HAlleloujhah!"
    }
}