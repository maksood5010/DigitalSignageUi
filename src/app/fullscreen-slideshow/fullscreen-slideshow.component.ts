import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesDetailService } from '../shared/files-detail.service';
import { FilesDetail } from '../shared/files-detail.model';

@Component({
  selector: 'app-fullscreen-slideshow',
  imports: [CommonModule],
  templateUrl: './fullscreen-slideshow.component.html',
  styleUrls: ['./fullscreen-slideshow.component.css']
})
export class FullscreenSlideshowComponent implements OnInit {
  signageList: FilesDetail[] = [];
  currentImageUrl: string = '';
  currentImageIndex: number = 0;
  isActive: boolean = false;
  private interval: any;

  constructor(private fileService: FilesDetailService) { }

  ngOnInit(): void {
    // this.loadImages();
  }

  loadImages() {
    //log
    console.log('Loading images...');
    this.fileService.getList().subscribe({
      next: (data) => {
        this.signageList = data.filter(item => item.signageType === 'image');
        console.log('Loaded images...' + this.signageList.length);
        this.startSlideshow();
      },
      error: (error) => {
        console.error('Error loading images:', error);
      }
    });
  }

  startSlideshow() {
    console.log('startSlideshow images...' + this.signageList.length);
    if (this.signageList.length === 0) return;

    this.isActive = true;
    this.currentImageIndex = 0;
    this.showImage();

    this.scheduleNextImage();
  }

  showImage() {
    const image = this.signageList[this.currentImageIndex];
    this.currentImageUrl = image.signageUrl;
  }

  scheduleNextImage() {
    const currentDuration = Number(this.signageList[this.currentImageIndex].signageDuration) * 1000 || 3000;
    console.log('scheduleNextImage currentDuration...' + currentDuration);


    this.interval = setTimeout(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.signageList.length;
      this.showImage();
      this.scheduleNextImage();
    console.log('scheduleNextImage currentDuration...' + currentDuration);
    }, currentDuration);
  }

  stopSlideshow() {
    clearTimeout(this.interval);
    this.isActive = false;
  }
}
