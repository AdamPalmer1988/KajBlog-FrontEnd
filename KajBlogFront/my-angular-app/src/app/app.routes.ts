import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { FavoritesListComponent } from './components/favorites-list/favorites-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { BlogFormPart2Component } from './components/blog-form-part2/blog-form-part2.component';

export const routes: Routes = [
    {path: '', component:MainPageComponent},
    {path: 'login', component:LoginComponent},
    {path: 'blog-form-part2', component:BlogFormPart2Component},
    {path: 'post-list', component:PostListComponent},
    {path: 'favorite-list', component:FavoritesListComponent}
];


