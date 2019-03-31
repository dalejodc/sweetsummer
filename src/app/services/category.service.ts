import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Category } from '../models/category';

@Injectable({
    providedIn: 'root'
})

export class CategoryService {

    private url: string = "https://cozumel-api.herokuapp.com"

    constructor(private _http: HttpClient) { }

    getCategories(): Observable<Category[]>{
        return this._http.get<Category[]>('https://cozumel-api.herokuapp.com/categories');
    }

    getCategorieById(id): Observable<Category>{
        return this._http.get<Category>("https://cozumel-api.herokuapp.com/category/"+id );
    }
    
}
