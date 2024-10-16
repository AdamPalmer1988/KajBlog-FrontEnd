import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';
import { Blog } from '../../models/blog';
import { SearchComponent } from "../search/search.component";
import { GifsComponent } from "../gifs/gifs.component";


@Component({
  selector: 'app-blog-form-part2',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchComponent, GifsComponent],
  templateUrl: './blog-form-part2.component.html',
  styleUrl: './blog-form-part2.component.css'
})
export class BlogFormPart2Component {

  blogId: number = 0;
  userId: string = 'G0f6MzIJs1wjD2GvdzbMdarN4yOMUNIt@clients';
  category: string = '';
  subjectLine: string = '';
  blogBody: string = '';
  giphyPull: string = '';



  constructor(private blogService: BlogService, private router: Router) {}

  createBlog() {
    var newBlog: Omit<Blog, 'blogId'> = {
      userId: this.userId,
      category: this.category,
      subjectLine: this.subjectLine,
      blogBody: this.blogBody,
      giphyPull: this.giphyPull,
   
    }

  }
}


