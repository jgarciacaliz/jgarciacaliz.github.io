import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {
  trigger,
  transition,
  style,
  animate,
  AnimationEvent
} from '@angular/animations';
import { HeaderComponent }           from './header.component';
import { ControlsBarComponent } from './controls-bar.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    HeaderComponent,
    ControlsBarComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('700ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('700ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({ transform: 'translate(-50%, 25px)', opacity: 0 }),
        animate('800ms ease-out', style({ transform: 'translate(-50%, -50%)', opacity: 1 }))
      ])
    ]),
    trigger('menuTransform', [
      transition('center => toHeader', [
        animate(
          '600ms ease-in-out',
          style({ transform: 'translate(-50%, -150%) scale(0.5)', opacity: 0 })
        )
      ])
    ]),
    trigger('slideDown', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('fadeInControls', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  showPhoto = false;
  showName = false;
  showMenu = false;
  showHeader = false;
  showLangMenu = false;
  showFirst = false;
  showSecond = false;
  menuState: 'center' | 'toHeader' = 'center';
  private nextPath = '';

  constructor(private router: Router) {}

  onToggleLanguageMenu() {
    this.showLangMenu = !this.showLangMenu;
  }

  onLanguageSelected() {
    this.showLangMenu = false;
  }

  ngOnInit(): void {
    setTimeout(() => this.showFirst  = true,    0);
    setTimeout(() => this.showFirst  = false, 1500);
    setTimeout(() => this.showSecond = true, 2000);
    setTimeout(() => this.showSecond = false,3500);
    setTimeout(() => this.showPhoto = true, 4500);
    setTimeout(() => this.showName = true, 5500);
    setTimeout(() => this.showMenu = true, 6500);
  }

  ngAfterViewInit(): void {
    this.applySystemTheme();
  }

  go(event: MouseEvent, path: string) {
    event.preventDefault();
    this.nextPath  = path;
    this.menuState = 'toHeader';
  }

  onMenuTransformed(e: AnimationEvent) {
    if (e.toState === 'toHeader') {
      this.showHeader = true;
      this.router.navigate([this.nextPath]);
    }
  }

  private applySystemTheme() {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    this.updateDarkClass(mql.matches);
    mql.addEventListener('change', e => this.updateDarkClass(e.matches));
    const saved = localStorage.getItem('darkModeOverride');
    if (saved !== null) this.updateDarkClass(saved === '1');
  }

  private updateDarkClass(isDark: boolean) {
    document.body.classList.toggle('dark-mode', isDark);
  }
}
