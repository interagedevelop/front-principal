import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.scss']
})
export class HeaderFooterComponent implements OnInit {

  sideNavStatus: boolean = false;

  items!: MenuItem[];
  itemspopup!: MenuItem[];

  constructor() { }

  ngOnInit() {

    this.items = [
      {
          label: 'File',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }
    ];

    this.itemspopup = [          
      {label: 'Delete', icon: 'pi pi-fw pi-trash'},
      {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
  
    ];
  }

}
