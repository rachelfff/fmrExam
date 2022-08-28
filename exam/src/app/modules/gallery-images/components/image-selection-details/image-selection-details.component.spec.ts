import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSelectionDetailsComponent } from './image-selection-details.component';

describe('ImageSelectionDetailsComponent', () => {
  let component: ImageSelectionDetailsComponent;
  let fixture: ComponentFixture<ImageSelectionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSelectionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSelectionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
