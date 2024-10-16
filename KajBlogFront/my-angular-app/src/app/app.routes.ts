import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { FavoritesListComponent } from './components/favorites-list/favorites-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
    {path: '', component:MainPageComponent},
    // {path: '', component:BlogFormComponent},
    // {path: '', component:CategoryListComponent},
    // {path: '', component:FavoritesListComponent},
    // {path: '', component:NavBarComponent},
    // {path: '', component:PostListComponent},
    // {path: '', component:ReactiveFormsModule}
];


