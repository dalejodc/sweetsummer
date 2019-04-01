import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../services/category.service'
import { Category } from '../../../../models/category'
import { Router } from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

    categories: Category[] = [];
    category: Category = new Category();

    constructor(
        private _categoryService: CategoryService,
        private _route: Router
    ) { }

    ngOnInit() {
        this.getCategories();
    }

    getCategories() {
        this._categoryService.getCategories().subscribe(
            response => {
                console.log(response);
                this.categories = response;
            })
    }

    save(){
        console.log(this.category);
    }

    openModal() {
        console.log("viene");

        $('.ui.modal').modal('show');
    }

}
