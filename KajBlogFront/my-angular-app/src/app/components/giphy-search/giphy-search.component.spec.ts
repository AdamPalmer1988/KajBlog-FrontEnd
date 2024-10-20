import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphySearchComponent } from './giphy-search.component';

describe('GiphySearchComponent', () => {
  let component: GiphySearchComponent;
  let fixture: ComponentFixture<GiphySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiphySearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiphySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
