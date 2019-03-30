import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

    sticky: boolean = false;
    showMobileMenu: boolean = false;
    constructor() { }

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

}
