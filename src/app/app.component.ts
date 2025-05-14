import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileDetailsComponent } from "./file-details/file-details.component";
import { UploadFormComponent } from "./upload-form/upload-form.component";
//Router
import { FullscreenSlideshowComponent } from './fullscreen-slideshow/fullscreen-slideshow.component';

@Component({
  selector: 'app-root',
  imports: [FileDetailsComponent, UploadFormComponent, FullscreenSlideshowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DigitalSignageUi';
}
