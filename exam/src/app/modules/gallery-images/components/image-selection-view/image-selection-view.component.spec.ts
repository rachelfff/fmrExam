import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSelectionViewComponent } from './image-selection-view.component';

describe('ImageSelectionViewComponent', () => {
  let component: ImageSelectionViewComponent;
  let fixture: ComponentFixture<ImageSelectionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSelectionViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSelectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
