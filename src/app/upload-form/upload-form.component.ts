import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilesDetailService } from '../shared/files-detail.service';
import { HttpClient } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import { ToastMessageComponent } from '../toast-message/toast-message.component';

@Component({
  selector: 'app-upload-form',
  imports: [CommonModule, FormsModule, ToastMessageComponent],
  templateUrl: './upload-form.component.html',
  styleUrl: './upload-form.component.css'
})
export class UploadFormComponent {
  @ViewChild(ToastMessageComponent) toast!: ToastMessageComponent;
  selectedFile: File | null = null;
  duration: number = 0;
  message: string = '';

  constructor(private fileService: FilesDetailService) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (!this.selectedFile || !this.duration) return;

    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('duration', this.duration.toString());

    this.fileService.uploadFile(this.selectedFile, this.duration).subscribe({
      next: () =>{
        this.toast.show('Upload successful!');
        this.fileService.refreshList();
      },
      error: err => this.toast.show('Upload failed!' + err.message)
    });
  }
}
