import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileDetailsComponent } from "./file-details/file-details.component";
import { UploadFormComponent } from "./upload-form/upload-form.component";

@Component({
  selector: 'app-root',
  imports: [ FileDetailsComponent,UploadFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DigitalSignageUi';
}
