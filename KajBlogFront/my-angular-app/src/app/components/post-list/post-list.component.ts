import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {

    blogService = inject(BlogService)

    blogs:Blog[] = [];

    ngOnInit(){
      this.loadBlogs();
    }

    loadBlogs(){
      this.blogService.GetAllBlogs().subscribe(
        (blogs) => {
          console.log(blogs)
          this.blogs = blogs;
        }
      )
    }

}
