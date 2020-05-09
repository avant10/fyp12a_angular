import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './home.component.html'

})
export class HomeComponent {
  url = 'https://nationalinterest.org/sites/default/files/main_images/M9-pistolet%20%281%29.jpg'
  url1 = ''
  selectedFile: File = null;
  constructor(private http: HttpClient){}
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (event : any) => {
      this.url = event.target.result;

    }

  }


  onDetect(){

  }



}
