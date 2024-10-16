import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFormPart2Component } from './blog-form-part2.component';

describe('BlogFormPart2Component', () => {
  let component: BlogFormPart2Component;
  let fixture: ComponentFixture<BlogFormPart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogFormPart2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogFormPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
