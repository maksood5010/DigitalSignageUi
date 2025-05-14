import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenSlideshowComponent } from './fullscreen-slideshow.component';

describe('FullscreenSlideshowComponent', () => {
  let component: FullscreenSlideshowComponent;
  let fixture: ComponentFixture<FullscreenSlideshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullscreenSlideshowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullscreenSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
