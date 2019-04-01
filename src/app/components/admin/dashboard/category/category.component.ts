import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../services/category.service'
import { Category } from '../../../../models/category'
import { Router } from '@angular/router';
import swal from 'sweetalert2'

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

    save() {
        // console.log(this.category);

        this._categoryService.saveCategory(this.category).subscribe(response => {
            console.log(response);
            const toast = swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            });

            toast({
                type: 'success',
                title: 'Category Saved'
            })

            this.getCategories();
        })
    }

    edit(id){
        console.log(id);

        this._categoryService.getCategoryById(id).subscribe(response=>{
            console.log(response);
            this.category = response;

            this.openModal();
        })
    }

    cancel(){
        this.category = new Category();
    }

    openModal() {
        console.log("viene");

        $('.ui.modal').modal('show');
    }

}
