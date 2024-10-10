import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogUrl: string = environment.apiUrl + "/Blogs";

  constructor(private httpClient: HttpClient) { }

  GetAllBlogs(): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>(this.blogUrl);
  }

  GetBlogById(id:number): Observable<Blog> {
    return this.httpClient.get<Blog>(`${this.blogUrl}/${id}`);
  }

  CreateBlog(blog: Omit<Blog, 'blogId'>): Observable<Blog> {
    return this.httpClient.post<Blog>(this.blogUrl, blog );
  }

  DeleteBlogById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.blogUrl}/${id}`);
  }

  UpdateBlog(blog:Blog){
    return this.httpClient.put(`${this.blogUrl}/${blog.BlogId}`, blog);
  }
}
