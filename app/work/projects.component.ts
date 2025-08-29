import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ALL_PROJECTS, Project } from './projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  all: Project[] = ALL_PROJECTS;
  professionalProjects = this.all.filter(p => !p.personal);
  personalProjects = this.all.filter(p => p.personal);

  toSkillFragment(key: string) {
    return key;
  }
}
