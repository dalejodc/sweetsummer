import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [CategoryService]
})
export class HomeComponent implements OnInit {

    categories: any;

    constructor(private _categoryService: CategoryService) { }

    ngOnInit() {
        // this._categoryService.getCategoriesNode().subscribe(response => {
        //     console.log(response);
        //     this.categories = response.data;
        // })
    }

}
