import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { GiphySearchComponent } from "../../giphy-search/giphy-search.component";



@Component({
  selector: 'app-blog-form',
  standalone: true,
  imports: [ReactiveFormsModule, GiphySearchComponent],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css'
})
export class BlogFormComponent {

  postForm!: FormGroup;
onSubmit: any;
myForm: any;

  constructor(private fb: FormBuilder,
    private router: Router){}


    ngOnInit(){
      this.postForm = this.fb.group({
        subject: ['', Validators.required],
        body: ['', Validators.required, Validators.maxLength(10000)],
       // img: ['', Validators.required],
        userName: ['', Validators.required]
      })
    }
}
