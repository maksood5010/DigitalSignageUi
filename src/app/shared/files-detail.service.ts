import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FilesDetail } from './files-detail.model';
import { HubConnection } from '@aspnet/signalr/dist/esm/HubConnection';
import { HubConnectionBuilder } from '@aspnet/signalr/dist/esm/HubConnectionBuilder';

@Injectable({
  providedIn: 'root'
})
export class FilesDetailService {

  url:string = environment.apiBaseUrl + 'api/SignageDetails/';
  list : FilesDetail[] = [];

  constructor(private http:HttpClient) {
   
  }
  getList() {
  return this.http.get<FilesDetail[]>(this.url);
}
  refreshList(){
    this.http.get(this.url).subscribe({
      next: (data) => {
        console.log(data);
        this.list =data as  FilesDetail[];
        
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    })
  }
  uploadFile(file: File, duration: number) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('duration', duration.toString());

    return this.http.post(this.url + 'upload', formData);
  }
  deleteFile(id: number) {
    return this.http.delete(this.url + id);
  }
  sendMessage(text:string) {
    return this.http.get( environment.apiBaseUrl + 'api/Message');
  }
}
