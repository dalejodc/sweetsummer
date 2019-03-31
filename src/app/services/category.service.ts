import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Category } from '../models/category';

@Injectable({
    providedIn: 'root'
})

export class CategoryService {

    private url: string = "http://localhost:5000"

    constructor(private _http: HttpClient) { }

    getCategories(): Observable<Category[]>{
        return this._http.get<Category[]>('http://localhost:8080/categories');
    }
    
}
