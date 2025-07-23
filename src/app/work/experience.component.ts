import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  constructor(public translate: TranslateService) {}

  // Etiquetas de empresa y su traducción de detalle
  companies = [
    {
      key: 'WORK_COMPANY_1',
      detailKey: 'WORK_COMPANY_1_DETAIL',
      start: 'WORK_COMPANY_1_START',
      end: 'WORK_COMPANY_1_END',
      summary: 'WORK_COMPANY_1_SUMMARY',
      roles: [
        {
          title: 'WORK_COMPANY_1_ROLE_1_TITLE',
          description: 'WORK_COMPANY_1_ROLE_1_DESCRIPTION',
          start: 'WORK_COMPANY_1_ROLE_1_START',
          end: 'WORK_COMPANY_1_ROLE_1_END'
        }
      ]
    },
    {
      key: 'WORK_COMPANY_2',
      detailKey: 'WORK_COMPANY_2_DETAIL',
      start: 'WORK_COMPANY_2_START',
      end: 'WORK_COMPANY_2_END',
      summary: 'WORK_COMPANY_2_SUMMARY',
      roles: [
        {
          title: 'WORK_COMPANY_2_ROLE_1_TITLE',
          description: 'WORK_COMPANY_2_ROLE_1_DESCRIPTION',
          start: 'WORK_COMPANY_2_ROLE_1_START',
          end: 'WORK_COMPANY_2_ROLE_1_END'
        },
        {
          title: 'WORK_COMPANY_2_ROLE_2_TITLE',
          description: 'WORK_COMPANY_2_ROLE_2_DESCRIPTION',
          start: 'WORK_COMPANY_2_ROLE_2_START',
          end: 'WORK_COMPANY_2_ROLE_2_END'
        }
      ]
    },
    {
      key: 'WORK_COMPANY_3',
      detailKey: 'WORK_COMPANY_3_DETAIL',
      start: 'WORK_COMPANY_3_START',
      end: 'WORK_COMPANY_3_END',
      summary: 'WORK_COMPANY_3_SUMMARY',
      roles: [
        {
          title: 'WORK_COMPANY_3_ROLE_1_TITLE',
          description: 'WORK_COMPANY_3_ROLE_1_DESCRIPTION',
          start: 'WORK_COMPANY_3_ROLE_1_START',
          end: 'WORK_COMPANY_3_ROLE_1_END'
        }
      ]
    }
  ];

  // cuál está seleccionado
  selectedDetail: string | null = null;

  toggleDetail(company: { detailKey: string }) {
    this.selectedDetail =
      this.selectedDetail === company.detailKey
        ? null
        : company.detailKey;
  }

  // Calcula la duración en meses entre dos fechas (YYYY-MM-DD)
  getDuration(start: string, end: string): string {
    const lang = (this.translate.currentLang || 'es') as 'es' | 'en' | 'de' | 'fr';
    const startDate = new Date(this.translate.instant(start));
    const endDateRaw = this.translate.instant(end);
    const presentWords: { [key: string]: string } = {
      es: 'presente',
      en: 'present',
      de: 'gegenwart',
      fr: 'présent'
    };
    const endDate = endDateRaw.toLowerCase().includes(presentWords[lang] || 'present') ? new Date() : new Date(endDateRaw);
    const years = endDate.getFullYear() - startDate.getFullYear();
    const months = endDate.getMonth() - startDate.getMonth();
    const totalMonths = years * 12 + months;
    const y = Math.floor(totalMonths / 12);
    const m = totalMonths % 12;
    // Duration templates for each language
    const templates = {
      es: {
        year: (n: number) => n + ' año' + (n > 1 ? 's' : ''),
        month: (n: number) => n + ' mes' + (n > 1 ? 'es' : ''),
        and: ' y ',
        zero: '0 meses'
      },
      en: {
        year: (n: number) => n + ' year' + (n > 1 ? 's' : ''),
        month: (n: number) => n + ' month' + (n > 1 ? 's' : ''),
        and: ' and ',
        zero: '0 months'
      },
      de: {
        year: (n: number) => n + ' Jahr' + (n > 1 ? 'e' : ''),
        month: (n: number) => n + ' Monat' + (n > 1 ? 'e' : ''),
        and: ' und ',
        zero: '0 Monate'
      },
      fr: {
        year: (n: number) => n + ' an' + (n > 1 ? 's' : ''),
        month: (n: number) => n + ' mois',
        and: ' et ',
        zero: '0 mois'
      }
    } as const;
    const t = templates[lang] || templates['en'];
    let result = '';
    if (y > 0) result += t.year(y);
    if (y > 0 && m > 0) result += t.and;
    if (m > 0) result += t.month(m);
    return result || t.zero;
  }

  // Calcula el tiempo total sumando todas las empresas
  getTotalDuration(): string {
    const lang = (this.translate.currentLang || 'es') as 'es' | 'en' | 'de' | 'fr';
    let totalMonths = 0;
    const presentWords: { [key: string]: string } = {
      es: 'presente',
      en: 'present',
      de: 'gegenwart',
      fr: 'présent'
    };
    for (const c of this.companies) {
      const startDate = new Date(this.translate.instant(c.start));
      const endDateRaw = this.translate.instant(c.end);
      const endDate = endDateRaw.toLowerCase().includes(presentWords[lang] || 'present') ? new Date() : new Date(endDateRaw);
      const years = endDate.getFullYear() - startDate.getFullYear();
      const months = endDate.getMonth() - startDate.getMonth();
      totalMonths += years * 12 + months;
    }
    const y = Math.floor(totalMonths / 12);
    const m = totalMonths % 12;
    // Duration templates for each language
    const templates = {
      es: {
        year: (n: number) => n + ' año' + (n > 1 ? 's' : ''),
        month: (n: number) => n + ' mes' + (n > 1 ? 'es' : ''),
        and: ' y ',
        zero: '0 meses'
      },
      en: {
        year: (n: number) => n + ' year' + (n > 1 ? 's' : ''),
        month: (n: number) => n + ' month' + (n > 1 ? 's' : ''),
        and: ' and ',
        zero: '0 months'
      },
      de: {
        year: (n: number) => n + ' Jahr' + (n > 1 ? 'e' : ''),
        month: (n: number) => n + ' Monat' + (n > 1 ? 'e' : ''),
        and: ' und ',
        zero: '0 Monate'
      },
      fr: {
        year: (n: number) => n + ' an' + (n > 1 ? 's' : ''),
        month: (n: number) => n + ' mois',
        and: ' et ',
        zero: '0 mois'
      }
    } as const;
    const t = templates[lang] || templates['en'];
    let result = '';
    if (y > 0) result += t.year(y);
    if (y > 0 && m > 0) result += t.and;
    if (m > 0) result += t.month(m);
    return result || t.zero;
  }

  // Format the period as "From Month Year to Month Year" in the current language
  formatPeriod(start: string, end: string): string {
    const lang = this.translate.currentLang || 'es';
    const months: { [key: string]: string[] } = {
      es: [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
      ],
      en: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ],
      de: [
        'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
        'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
      ],
      fr: [
        'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
        'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
      ]
    };
    const startDate = new Date(this.translate.instant(start));
    const endDateRaw = this.translate.instant(end);
    // Handle 'Present' in all supported languages
    const presentWords: { [key: string]: string } = {
      es: 'presente',
      en: 'present',
      de: 'gegenwart',
      fr: 'présent'
    };
    const presentDisplay: { [key: string]: string } = {
      es: 'Presente',
      en: 'Present',
      de: 'Gegenwart',
      fr: 'Présent'
    };
    const isPresent = endDateRaw.toLowerCase().includes(presentWords[lang] || 'present');
    let endDate: Date | null = null;
    if (!isPresent) {
      endDate = new Date(endDateRaw);
    }
    const startMonth = months[lang]?.[startDate.getMonth()] || months['en'][startDate.getMonth()];
    const startYear = startDate.getFullYear();
    let endMonth = '';
    let endYear = '';
    if (endDate) {
      endMonth = months[lang]?.[endDate.getMonth()] || months['en'][endDate.getMonth()];
      endYear = endDate.getFullYear().toString();
    }
    if (lang === 'es') {
      return isPresent
        ? `de ${startMonth} ${startYear} a ${presentDisplay[lang]}`
        : `de ${startMonth} ${startYear} a ${endMonth} ${endYear}`;
    } else if (lang === 'en') {
      return isPresent
        ? `From ${startMonth} ${startYear} to ${presentDisplay[lang]}`
        : `From ${startMonth} ${startYear} to ${endMonth} ${endYear}`;
    } else if (lang === 'de') {
      return isPresent
        ? `Von ${startMonth} ${startYear} bis ${presentDisplay[lang]}`
        : `Von ${startMonth} ${startYear} bis ${endMonth} ${endYear}`;
    } else if (lang === 'fr') {
      return isPresent
        ? `De ${startMonth} ${startYear} à ${presentDisplay[lang]}`
        : `De ${startMonth} ${startYear} à ${endMonth} ${endYear}`;
    } else {
      // fallback to English
      return isPresent
        ? `From ${startMonth} ${startYear} to Present`
        : `From ${startMonth} ${startYear} to ${endMonth} ${endYear}`;
    }
  }
}
