

import { Component } from '@angular/core';
import { BlogFormComponent } from "../blog-form/blog-form.component";
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { PostListComponent } from '../post-list/post-list.component';
import { GiphySearchComponent } from "../../giphy-search/giphy-search.component";

  @Component({
    selector: 'app-main-page',
    standalone: true,
    imports: [BlogFormComponent, NavBarComponent, PostListComponent, GiphySearchComponent],
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.css'
  })
export class MainPageComponent {
  
}

