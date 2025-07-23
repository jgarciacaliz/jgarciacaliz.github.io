import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications-courses',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './certifications-courses.component.html',
  styleUrls: ['./certifications-courses.component.css'],
})
export class CertificationsCoursesComponent {
  certNumber(cert: any): number {
    // Extrae el número del certificado desde la clave, por ejemplo CERT_1_TITLE
    const match = cert.title.match(/CERT_(\d+)_TITLE/);
    return match ? parseInt(match[1], 10) : 0;
  }
  certifications = [
    {
      title: 'CERT_1_TITLE',
      detail: 'CERT_1_DETAIL',
      date: 'CERT_1_DATE',
      tutor: 'CERT_1_TUTOR',
      description: 'CERT_1_DESC'
    },
    {
      title: 'CERT_2_TITLE',
      detail: 'CERT_2_DETAIL',
      date: 'CERT_2_DATE',
      tutor: 'CERT_2_TUTOR',
      description: 'CERT_2_DESC'
    },
    {
      title: 'CERT_3_TITLE',
      detail: 'CERT_3_DETAIL',
      date: 'CERT_3_DATE',
      tutor: 'CERT_3_TUTOR',
      description: 'CERT_3_DESC'
    },
    {
      title: 'CERT_4_TITLE',
      detail: 'CERT_4_DETAIL',
      date: 'CERT_4_DATE',
      tutor: 'CERT_4_TUTOR',
      description: 'CERT_4_DESC'
    },
    {
      title: 'CERT_5_TITLE',
      detail: 'CERT_5_DETAIL',
      date: 'CERT_5_DATE',
      tutor: 'CERT_5_TUTOR',
      description: 'CERT_5_DESC'
    },
    {
      title: 'CERT_6_TITLE',
      detail: 'CERT_6_DETAIL',
      date: 'CERT_6_DATE',
      tutor: 'CERT_6_TUTOR',
      description: 'CERT_6_DESC'
    },
    {
      title: 'CERT_7_TITLE',
      detail: 'CERT_7_DETAIL',
      date: 'CERT_7_DATE',
      tutor: 'CERT_7_TUTOR',
      description: 'CERT_7_DESC'
    },
    {
      title: 'CERT_8_TITLE',
      detail: 'CERT_8_DETAIL',
      date: 'CERT_8_DATE',
      tutor: 'CERT_8_TUTOR',
      description: 'CERT_8_DESC'
    },
    {
      title: 'CERT_9_TITLE',
      detail: 'CERT_9_DETAIL',
      date: 'CERT_9_DATE',
      tutor: 'CERT_9_TUTOR',
      description: 'CERT_9_DESC'
    },
    {
      title: 'CERT_10_TITLE',
      detail: 'CERT_10_DETAIL',
      date: 'CERT_10_DATE',
      tutor: 'CERT_10_TUTOR',
      description: 'CERT_10_DESC'
    },
    {
      title: 'CERT_11_TITLE',
      detail: 'CERT_11_DETAIL',
      date: 'CERT_11_DATE',
      tutor: 'CERT_11_TUTOR',
      description: 'CERT_11_DESC'
    },
    {
      title: 'CERT_12_TITLE',
      detail: 'CERT_12_DETAIL',
      date: 'CERT_12_DATE',
      tutor: 'CERT_12_TUTOR',
      description: 'CERT_12_DESC'
    }
  ];
}
