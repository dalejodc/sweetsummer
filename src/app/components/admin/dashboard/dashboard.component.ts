import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    showSidenav: boolean = true;

    constructor(private _router: Router) { }

    ngOnInit() {
        // this.showSidenav = true;
        
        setTimeout(() => {
            $('.sidebar').sidebar('scrollLock', true);
        }, 90);

    }

    logout() {
        // $('.sidebar').sidebar('scrollLock', false);
        $('.sidebar').sidebar('hide', true);
        this.showSidenav = false;
        this._router.navigateByUrl(`/`);
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.showSidenav=false;
    }

}
