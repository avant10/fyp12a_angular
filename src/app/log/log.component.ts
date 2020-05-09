import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: './log.component.html'

})
export class LogComponent {



  onDownload(){
    document.getElementById('return').textContent = ''

  }



}
