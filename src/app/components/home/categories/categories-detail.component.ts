import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../services/category.service'
import { Category } from '../../../models/category'

@Component({
    selector: 'app-categories-detail',
    templateUrl: './categories-detail.component.html',
    styles: ['./categories.component.css'],
    providers: [CategoryService]
})
export class CategoriesDetailComponent implements OnInit {

    id: any;
    category: Category;

    constructor(
        private _categoryService: CategoryService,
        private _route: ActivatedRoute) { }

    ngOnInit() {
        this.getCategoryById();
    }

    getCategoryById() {
        this._route.params.subscribe(params => {
            this.id = params['id'];
        })

        this._categoryService.getCategorieById(this.id).subscribe(
            response=>{
                this.category = response;
                console.log(response);
            }
        )
    }

}
