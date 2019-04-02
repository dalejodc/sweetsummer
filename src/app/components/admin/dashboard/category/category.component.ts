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

    errorMessage: boolean = false;

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
        console.log(this.category)

        if (Object.keys(this.category).length === 0) {
            
            const Toast = swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
              });
              
              Toast({
                type: 'error',
                title: 'All fields are required'
              })
        }

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

            this.category = new Category();

            this.getCategories();
        })
    }

    edit(id) {
        console.log(id);

        this._categoryService.getCategoryById(id).subscribe(response => {
            console.log(response);
            this.category = response;

            this.openModal();

        })
    }

    cancel() {
        this.category = new Category();
    }

    openModal() {
        $('.ui.modal').modal('show');
    }

}
