import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { element } from '@angular/core/src/render3/instructions';
import { not } from '@angular/compiler/src/output/output_ast';

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

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        // console.log(event.target.innerWidth);

        if(event.target.innerWidth < 823){
            $('.sidebar').sidebar('hide', true);
        }if(event.target.innerWidth > 823){
            // $('.sidebar').sidebar('toggle', true);
        }
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
        this.showSidenav = false;
    }

}
