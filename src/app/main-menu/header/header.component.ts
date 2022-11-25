import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService} from 'lib';
// import {KeycloakService} from 'lib';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  isMenuOpen = false;

  constructor(
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  SideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  async logout() {
    await this.authenticationService.logout();
    // await this.keycloakService.logout();
  }
}
