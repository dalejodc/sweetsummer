import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-offers',
    templateUrl: './offers.component.html',
    styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        $('.ui.rating')
            .rating({maxRating: 5});
    }

}
