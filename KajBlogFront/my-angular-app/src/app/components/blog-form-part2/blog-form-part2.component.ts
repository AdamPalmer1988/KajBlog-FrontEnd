import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';
import { Blog } from '../../models/blog';
import { SearchComponent } from "../search/search.component";
import { GifsComponent } from "../gifs/gifs.component";
import { response } from 'express';


@Component({
  selector: 'app-blog-form-part2',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './blog-form-part2.component.html',
  styleUrl: './blog-form-part2.component.css'
})
export class BlogFormPart2Component {
  blogForm: FormGroup;
  blog: Blog | undefined;


  constructor(private fb: FormBuilder, private blogService: BlogService) {
    this.blogForm = this.fb.group({
      category: [''],
      subjectLine: [''],
      blogBody: [''],
    })
  }

  onSubmit() {
    if (this.blogForm.valid){
      this.blog = this.blogForm.value as Blog;

      this.blogService.CreateBlog(this.blog).subscribe({
        next: (response) => {
          console.log('Blog Succesfully added', response);
        },
        error: (err) => {
          console.error('Error occurred while adding blog', err)
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }

}


