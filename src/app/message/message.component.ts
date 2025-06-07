import { HttpClient, HttpUrlEncodingCodec } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { CommonModule } from '@angular/common';
import { FilesDetailService } from '../shared/files-detail.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-message',
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {

  private _hubConnection: HubConnection | null = null;
  showimage: boolean = false;
  signaldata: any[] = [];
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this._hubConnection = new HubConnectionBuilder().withUrl(environment.apiBaseUrl + 'notify').build();
    this._hubConnection.start()
      .then(() =>
        console.log('connection start'))
      .catch(err => {
        console.log('Error while establishing the connection')
      });

    this._hubConnection.on('BroadcastMessage', (message) => {
      this.signaldata.push(message);
    });
  }
  showMessage() {
    console.log('showMessage called');
    this.showimage = !this.showimage;
  }

}
