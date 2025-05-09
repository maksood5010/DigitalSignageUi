import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ToastMessageComponent {
  message = '';
  visible = false;

  show(message: string, duration = 3000) {
    this.message = message;
    this.visible = true;
    setTimeout(() => this.hide(), duration);
  }

  hide() {
    this.visible = false;
  }
}
