import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


export const routes: Routes = [
    {path: '', component:MainPageComponent},
    {path: '', component:BlogCardComponent},
    {path: '', component:BlogDetailsComponent},
    {path: '', component:CreateBlogComponent},
    {path: '', component:NavBarComponent}
];


