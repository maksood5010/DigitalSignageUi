import { Component,OnInit  } from '@angular/core';
import { FilesDetailService } from '../shared/files-detail.service';


@Component({
  selector: 'app-sendmessage',
  imports: [],
  templateUrl: './sendmessage.component.html',
  styleUrl: './sendmessage.component.css'
})
export class SendmessageComponent {
  constructor (public service: FilesDetailService) {

   }
  

  senddata(){
    var data={
      Type: 'warning',
      Information: 'text information message'
    }
    this.service.sendMessage("test").subscribe({
        next: () => {
        console.log('Message sent successfully');
        },
        error: err => console.error('Message Sent failed', err)
      });
  }
}
