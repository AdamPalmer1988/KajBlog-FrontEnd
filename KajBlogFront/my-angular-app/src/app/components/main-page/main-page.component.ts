

import { Component } from '@angular/core';
import { BlogFormComponent } from "../blog-form/blog-form.component";
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { PostListComponent } from '../post-list/post-list.component';

  @Component({
    selector: 'app-main-page',
    standalone: true,
    imports: [BlogFormComponent, NavBarComponent, PostListComponent],
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.css'
  })
export class MainPageComponent {
  
}

