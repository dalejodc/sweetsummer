import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../services/category.service'
import { Category } from '../../../models/category'

declare var $: any;

@Component({
    selector: 'app-categories-detail',
    templateUrl: './categories-detail.component.html',
    styles: ['./categories-detail.component.css'],
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

        $('.ui.rating')
            .rating({maxRating: 5});
    }

    getCategoryById() {
        this._route.params.subscribe(params => {
            this.id = params['id'];
        })

        this._categoryService.getCategoryById(this.id).subscribe(
            response=>{
                this.category = response;
                console.log(response);
            }
        )
    }

}
