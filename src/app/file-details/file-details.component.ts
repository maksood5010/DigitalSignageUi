import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileDetailsFormComponent } from "./file-details-form/file-details-form.component";
import { FilesDetailService } from '../shared/files-detail.service';
import { ToastMessageComponent } from '../toast-message/toast-message.component';
import { FullscreenSlideshowComponent } from '../fullscreen-slideshow/fullscreen-slideshow.component';


@Component({
  selector: 'app-file-details',
  imports: [FileDetailsFormComponent, CommonModule, ToastMessageComponent,FullscreenSlideshowComponent],
  templateUrl: './file-details.component.html',
  styleUrl: './file-details.component.css'
})
export class FileDetailsComponent implements OnInit {
  @ViewChild(ToastMessageComponent) toast!: ToastMessageComponent;
  constructor(public service: FilesDetailService) {

  }
  ngOnInit(): void {
    this.service.refreshList();
  }
  // copyToClipboard(text: string): void {
  //   navigator.clipboard.writeText(text).then(() => {
  //     console.log('Copied to clipboard:', text);
  //     // Optional: toast or snackbar instead of alert
  //     alert('URL copied!');
  //   }).catch(err => {
  //     console.error('Failed to copy:', err);
  //   });
  // }
  showFullscreen = false;

  openFullscreen() {
    this.showFullscreen = true;
  }

  closeFullscreen() {
    this.showFullscreen = false;
  }
  openFullscreenInNewTab() {
  window.open(`${window.location.origin}/slide`, '_blank');
}

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.toast.show('URL copied to clipboard!');
    });
  }
  deleteFile(id: number) {
    if (confirm('Are you sure you want to delete this file?')) {
      this.service.deleteFile(id).subscribe({
        next: () => {
          this.service.refreshList(); // reload updated list
        },
        error: err => console.error('Delete failed', err)
      });
    }
  }


}
