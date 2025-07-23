import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { ProfileComponent } from './work/profile.component';
import { ExperienceComponent } from './work/experience.component';
import { CertificationsCoursesComponent } from './work/certifications-courses.component';
import { SkillsComponent } from './work/skills.component';
import { ContactComponent } from './work/contact.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent,
    children: [
      { path: '', component: ProfileComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'certifications-courses', component: CertificationsCoursesComponent },
      { path: 'contact', component: ContactComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];

