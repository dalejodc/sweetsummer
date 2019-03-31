import { Component, OnInit } from '@angular/core';
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

    constructor(private _categoryService: CategoryService) { }

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

}
