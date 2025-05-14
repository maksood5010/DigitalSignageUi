import { Routes } from '@angular/router';
import { FullscreenSlideshowComponent } from './fullscreen-slideshow/fullscreen-slideshow.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'slide',
    component: FullscreenSlideshowComponent,
  },
];
