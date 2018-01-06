import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-makePage',
    templateUrl: './makePage.component.html',
    styleUrls: ['./makePage.component.css']
})
export class MakePageComponent {

    constructor(public sanitizer: DomSanitizer){}
}