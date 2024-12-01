import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.getElementById('header');

    if (window.scrollY >= 80) {
      header?.classList.add('scroll-header');
    } else {
      header?.classList.remove('scroll-header');
    }
  }
}