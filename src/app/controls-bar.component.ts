import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-controls-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './controls-bar.component.html',
  styleUrls: ['./controls-bar.component.css']
})
export class ControlsBarComponent {
  readonly languages = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'de', label: 'DE' },
    { code: 'fr', label: 'FR' }
  ];
  showLangMenu = false;

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    const saved   = localStorage.getItem('lang');
    const browser = translate.getBrowserLang() ?? 'en';
    translate.use(
      saved
        ? saved
        : this.languages.some(l => l.code === browser)
          ? browser
          : 'en'
    );
  }

  select(code: string): void {
    this.translate.use(code);
    localStorage.setItem('lang', code);
    this.showLangMenu = false;
  }

  toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkModeOverride', isDark ? '1' : '0');
    // Quitar el foco del botón después de un pequeño retraso para evitar que el borde permanezca tras animaciones
    // Forzar blur varias veces para asegurar que el foco se retire tras animaciones y re-renderizados
    let attempts = 0;
    function forceBlur() {
      const btn = document.getElementById('toggle-theme');
      if (btn) { (btn as HTMLButtonElement).blur(); }
      if (++attempts < 5) requestAnimationFrame(forceBlur);
    }
    requestAnimationFrame(forceBlur);
  }
}
