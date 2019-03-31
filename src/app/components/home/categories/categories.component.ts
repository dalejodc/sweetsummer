import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoryService } from '../../../services/category.service'
import { Category } from '../../../models/category'

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css'],
    providers: [CategoryService]
})
export class CategoriesComponent implements OnInit {

    categories: Category[] = [];
    showExtraContent: boolean = false;

    constructor(
        private _categoryService: CategoryService,
        private _route: Router) { }

    ngOnInit() {
        this.getCategories();
        this.checkRoute();
    }

    getCategories() {
        this._categoryService.getCategories().subscribe(
            response => {
                console.log(response);
                this.categories = response;
            })
    }

    checkRoute(){
        console.log(this._route.url)
        if(this._route.url === '/categories'){
            this.showExtraContent = true;
        }
    }

}
