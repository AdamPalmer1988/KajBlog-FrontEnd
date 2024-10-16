

import { Component } from '@angular/core';
import { BlogFormComponent } from "../blog-form/blog-form.component";
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { PostListComponent } from '../post-list/post-list.component';
import { GiphySearchComponent } from "../giphy-search/giphy-search.component";
import { BlogFormPart2Component } from "../blog-form-part2/blog-form-part2.component";
import { GifsComponent } from '../gifs/gifs.component';
import { SearchComponent } from "../search/search.component";
import { HeaderComponent } from "../header/header.component";


  @Component({
    selector: 'app-main-page',
    standalone: true,
    imports: [BlogFormComponent, NavBarComponent, PostListComponent, GiphySearchComponent, BlogFormPart2Component, GifsComponent, SearchComponent, HeaderComponent],
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.css'
  })
export class MainPageComponent {
  
}

