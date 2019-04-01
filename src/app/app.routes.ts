import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home/home.component";
import { CategoriesDetailComponent } from "./components/home/categories/categories-detail.component";
import { CategoriesComponent } from "./components/home/categories/categories.component";

import { DashboardComponent } from "./components/admin/dashboard/dashboard.component";
import { CategoryComponent } from "./components/admin/dashboard/category/category.component";


const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'category/:id', component: CategoriesDetailComponent },
	{ path: 'categories', component: CategoriesComponent },
	{
		path: 'dashboard', component: DashboardComponent, children: [
			{
				path: 'category',
				component: CategoryComponent
			},
		]
	},
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }


