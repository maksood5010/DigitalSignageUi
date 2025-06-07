import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FileDetailsComponent } from "./file-details/file-details.component";
import { UploadFormComponent } from "./upload-form/upload-form.component";
//Router
import { FullscreenSlideshowComponent } from './fullscreen-slideshow/fullscreen-slideshow.component';
import { SendmessageComponent } from "./sendmessage/sendmessage.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FileDetailsComponent, UploadFormComponent, FullscreenSlideshowComponent, SendmessageComponent,RouterOutlet,RouterLink,RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DigitalSignageUi';
}
