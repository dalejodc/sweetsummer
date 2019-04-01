import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

    sticky: boolean = false;
    showMobileMenu: boolean = false;
    
    constructor(private router: Router) { }

    ngOnInit() {
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll($event) {
        let navbar = document.getElementById("navbar");

        if (window.scrollY > 73) {
            navbar.classList.add("sticky", "animated", "slideInDown");
        } else {
            navbar.classList.remove("sticky", "animated", "slideInDown");
        }

    }

    show() {
        this.showMobileMenu = true;

        // this.checkCurrentRoute();
    }

    hide() {
        this.showMobileMenu = false;
    }

    goTo(route: string) {
        // To check if it is the same route
        if (this.router.url === `/${route}`) {
            this.hide();
        } else {
            this.router.navigateByUrl(`/${route}`);
        }
    }


}
