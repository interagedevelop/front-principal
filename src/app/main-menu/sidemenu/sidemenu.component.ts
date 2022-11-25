import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements  OnInit {
  @Input() sideNavStatus: boolean = false;
  dropdownMenuItem: boolean = false;

  list = [
    {
    number: '1',
    name: 'home',
    icon:'fa-solid fa-house',
    },
    {
    number: '2',
    name: 'Graficos',
    icon:'fa-solid fa-chart-line',
    },
    {
    number: '3',
    name: 'Produtos',
    icon:'fa-solid fa-box',
    },
    {
    number: '4',
    name: 'Pedidos',
    icon:'fa-solid fa-cart-shopping',
    },
    {
    number: '5',
    name: 'Configurações',
    icon:'fa-solid fa-gear',
    },
    {
    number: '6',
    name: 'Sobre',
    icon:'fa-solid fa-circle-info',
    },
    {
    number: '7',
    name: 'Contato',
    icon:'fa-solid fa-phone',
    },
  ];


  constructor() { }

  ngOnInit() {}

}
