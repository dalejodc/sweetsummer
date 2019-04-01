import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Category } from '../models/category';

@Injectable({
    providedIn: 'root'
})

export class CategoryService {

    private url: string = "https://cozumel-api.herokuapp.com"
    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

    constructor(private _http: HttpClient) { }

    getCategories(): Observable<Category[]>{
        return this._http.get<Category[]>('https://cozumel-api.herokuapp.com/categories');
    }

    getCategorieById(id): Observable<Category>{
        return this._http.get<Category>("https://cozumel-api.herokuapp.com/category/"+id );
    }

    saveCategory(category: Category):Observable<Category>{
        return this._http.post<Category>("https://cozumel-api.herokuapp.com/category", category);
    }

    
}
