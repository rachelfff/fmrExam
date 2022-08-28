import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesScrollerComponent } from './images-scroller.component';

describe('ImagesScrollerComponent', () => {
  let component: ImagesScrollerComponent;
  let fixture: ComponentFixture<ImagesScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesScrollerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
