import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    this.initMenuToggle();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.getElementById('header');

    if (window.scrollY >= 80) {
      header?.classList.add('scroll-header');
    } else {
      header?.classList.remove('scroll-header');
    }
  }

  initMenuToggle() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    // Abrir el menú
    navToggle?.addEventListener('click', () => {
      navMenu?.classList.add('show-menu');
    });

    // Cerrar el menú
    navClose?.addEventListener('click', () => {
      navMenu?.classList.remove('show-menu');
    });
  }
}