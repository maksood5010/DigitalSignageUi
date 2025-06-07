import { Routes } from '@angular/router';
import { FullscreenSlideshowComponent } from './fullscreen-slideshow/fullscreen-slideshow.component';
import { AppComponent } from './app.component';
import { SendmessageComponent } from './sendmessage/sendmessage.component';
import { MessageComponent } from './message/message.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { FileDetailsComponent } from './file-details/file-details.component';

export const routes: Routes = [
  {
    path: '',
    component: FileDetailsComponent,
  },
  {
    path: 'home',
    component: FileDetailsComponent,
  },
  {
    path: 'fileupload',
    component: UploadFormComponent,
  },
  {
    path: 'slide',
    component: FullscreenSlideshowComponent,
  },
  {
    path: 'sendmessage',
    component: SendmessageComponent,
  },
  {
    path: 'message',
    component: MessageComponent,
  },
];
