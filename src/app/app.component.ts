import { Component, OnInit } from '@angular/core';
import { HttpUtilService } from 'lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Front-Principal';

  constructor(
    private serv: HttpUtilService
  ){

  }

  ngOnInit(){
    this.serv.mensagem('teste');
  }
}
