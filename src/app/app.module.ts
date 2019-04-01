import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { HeaderComponent } from './components/home/header/header.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CategoriesComponent } from './components/home/categories/categories.component';
import { OffersComponent } from './components/home/offers/offers.component';
import { FeedbacksComponent } from './components/home/feedbacks/feedbacks.component';
import { LoginComponent } from './components/admin/login/login.component';
import { CategoriesDetailComponent } from './components/home/categories/categories-detail.component';
import { NewsletterComponent } from './components/shared/newsletter/newsletter.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { CategoryComponent } from './components/admin/dashboard/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    CategoriesComponent,
    OffersComponent,
    FeedbacksComponent,
    LoginComponent,
    CategoriesDetailComponent,
    NewsletterComponent,
    DashboardComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
