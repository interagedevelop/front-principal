import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {

  visibleSidebar1 : any;

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {

    this.primengConfig.ripple = true;
  }

}
