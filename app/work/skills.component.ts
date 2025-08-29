import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ALL_PROJECTS, SKILL_TO_PROJECTS, Project } from './projects.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  selectedKey: string | null = null;

  competencies = [
    { key: 'COMPETENCY_TEAMWORK', descriptionKey: 'COMPETENCY_TEAMWORK_DESCRIPTION' },
    { key: 'COMPETENCY_PROBLEM_SOLVING', descriptionKey: 'COMPETENCY_PROBLEM_SOLVING_DESCRIPTION' },
    { key: 'COMPETENCY_ADAPTABILITY', descriptionKey: 'COMPETENCY_ADAPTABILITY_DESCRIPTION' }
  ];

  areas = [
    { key: 'SKILL_AREA_MACHINE_LEARNING', descKey: 'SKILL_AREA_MACHINE_LEARNING_DESC', contKey: 'SKILL_AREA_MACHINE_LEARNING_CONT' },
    { key: 'SKILL_AREA_AI', descKey: 'SKILL_AREA_AI_DESC', contKey: 'SKILL_AREA_AI_CONT' },
    { key: 'SKILL_AREA_DATA_SCIENCE', descKey: 'SKILL_AREA_DATA_SCIENCE_DESC', contKey: 'SKILL_AREA_DATA_SCIENCE_CONT' },
    { key: 'SKILL_AREA_OPERATIONS_RESEARCH', descKey: 'SKILL_AREA_OPERATIONS_RESEARCH_DESC', contKey: 'SKILL_AREA_OPERATIONS_RESEARCH_CONT' },
    { key: 'SKILL_AREA_FULLSTACK_DEVELOPMENT', descKey: 'SKILL_AREA_FULLSTACK_DEVELOPMENT_DESC', contKey: 'SKILL_AREA_FULLSTACK_DEVELOPMENT_CONT' },
    { key: 'SKILL_AREA_DESIGN_THINKING', descKey: 'SKILL_AREA_DESIGN_THINKING_DESC', contKey: 'SKILL_AREA_DESIGN_THINKING_CONT' },
    { key: 'SKILL_AREA_BPM', descKey: 'SKILL_AREA_BPM_DESC', contKey: 'SKILL_AREA_BPM_CONT' },
    { key: 'SKILL_AREA_AUTOMATION_INTEGRATION', descKey: 'SKILL_AREA_AUTOMATION_INTEGRATION_DESC', contKey: 'SKILL_AREA_AUTOMATION_INTEGRATION_CONT' },
    { key: 'SKILL_AREA_SYSTEMS_SIMULATION', descKey: 'SKILL_AREA_SYSTEMS_SIMULATION_DESC', contKey: 'SKILL_AREA_SYSTEMS_SIMULATION_CONT' }
  ];

  languages = [
    { key: 'SKILL_LANG_C_PLUS_PLUS', descKey: 'SKILL_LANG_C_PLUS_PLUS_DESC', contKey: 'SKILL_LANG_C_PLUS_PLUS_CONT' },
    { key: 'SKILL_LANG_VBA', descKey: 'SKILL_LANG_VBA_DESC', contKey: 'SKILL_LANG_VBA_CONT' },
    { key: 'SKILL_LANG_PYTHON', descKey: 'SKILL_LANG_PYTHON_DESC', contKey: 'SKILL_LANG_PYTHON_CONT' },
    { key: 'SKILL_LANG_R', descKey: 'SKILL_LANG_R_DESC', contKey: 'SKILL_LANG_R_CONT' },
    { key: 'SKILL_LANG_SQL', descKey: 'SKILL_LANG_SQL_DESC', contKey: 'SKILL_LANG_SQL_CONT' },
    { key: 'SKILL_LANG_HTML', descKey: 'SKILL_LANG_HTML_DESC', contKey: 'SKILL_LANG_HTML_CONT' },
    { key: 'SKILL_LANG_CSS', descKey: 'SKILL_LANG_CSS_DESC', contKey: 'SKILL_LANG_CSS_CONT' },
    { key: 'SKILL_LANG_JAVASCRIPT', descKey: 'SKILL_LANG_JAVASCRIPT_DESC', contKey: 'SKILL_LANG_JAVASCRIPT_CONT' },
    { key: 'SKILL_LANG_TYPESCRIPT', descKey: 'SKILL_LANG_TYPESCRIPT_DESC', contKey: 'SKILL_LANG_TYPESCRIPT_CONT' },
    { key: 'SKILL_LANG_GO', descKey: 'SKILL_LANG_GO_DESC', contKey: 'SKILL_LANG_GO_CONT' },
    { key: 'SKILL_LANG_RUST', descKey: 'SKILL_LANG_RUST_DESC', contKey: 'SKILL_LANG_RUST_CONT' },
    { key: 'SKILL_LANG_G_CODE', descKey: 'SKILL_LANG_G_CODE_DESC', contKey: 'SKILL_LANG_G_CODE_CONT' },
  ];

  tools: Array<{
    titleKey: string;
    descKey: string;
    contKey: string;
    items: Array<{ key: string; title: string; desc: string; context: string }>;
  }> = [];

  constructor(private translate: TranslateService) {
    this.tools = [
      {
        titleKey: 'SKILL_TOOLS_CLOUD_DEVOPS_TITLE',
        descKey: 'SKILL_TOOLS_CLOUD_DEVOPS_DESC',
        contKey: 'SKILL_TOOLS_CLOUD_DEVOPS_CONT',
        items: this.translate.instant('SKILL_TOOLS_CLOUD_DEVOPS_ITEMS')
      },
      {
        titleKey: 'SKILL_TOOLS_DATA_AI_TITLE',
        descKey: 'SKILL_TOOLS_DATA_AI_DESC',
        contKey: 'SKILL_TOOLS_DATA_AI_CONT',
        items: this.translate.instant('SKILL_TOOLS_DATA_AI_ITEMS')
      },
      {
        titleKey: 'SKILL_TOOLS_WEB_DEV_TITLE',
        descKey: 'SKILL_TOOLS_WEB_DEV_DESC',
        contKey: 'SKILL_TOOLS_WEB_DEV_CONT',
        items: this.translate.instant('SKILL_TOOLS_WEB_DEV_ITEMS')
      },
      {
        titleKey: 'SKILL_TOOLS_AUTOMATION_TITLE',
        descKey: 'SKILL_TOOLS_AUTOMATION_DESC',
        contKey: 'SKILL_TOOLS_AUTOMATION_CONT',
        items: this.translate.instant('SKILL_TOOLS_AUTOMATION_ITEMS')
      },
      {
        titleKey: 'SKILL_TOOLS_SIMULATION_CADCAM_TITLE',
        descKey: 'SKILL_TOOLS_SIMULATION_CADCAM_DESC',
        contKey: 'SKILL_TOOLS_SIMULATION_CADCAM_CONT',
        items: this.translate.instant('SKILL_TOOLS_SIMULATION_CADCAM_ITEMS')
      },
      {
        titleKey: 'SKILL_TOOLS_PROCESSES_COLLABORATION_TITLE',
        descKey: 'SKILL_TOOLS_PROCESSES_COLLABORATION_DESC',
        contKey: 'SKILL_TOOLS_PROCESSES_COLLABORATION_CONT',
        items: this.translate.instant('SKILL_TOOLS_PROCESSES_COLLABORATION_ITEMS')
      }
    ];
  } 

  allProjects: Project[] = ALL_PROJECTS;
  skillIndex = SKILL_TO_PROJECTS;

  toggle(key: string) {
    this.selectedKey = this.selectedKey === key ? null : key;
  }

  relatedProjects(key: string | null): Project[] {
    if (!key) return [];
    const ids = this.skillIndex[key] || [];
    return this.allProjects.filter(p => ids.includes(p.id));
  }
}