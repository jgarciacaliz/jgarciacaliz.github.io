export interface Project {
  id: string;
  personal: boolean;
  nameKey: string;
  descKey: string;
  companyKey?: string;
  repoUrl?: string;
  siteUrl?: string;
  skills: string[];
}

export const ALL_PROJECTS: Project[] = [
  {
    id: 'proj-gobierno-datos',
    personal: false,
    nameKey: 'PROJ_PROF_ASEGURA20_NAME',
    descKey: 'PROJ_PROF_ASEGURA20_DESC',
    companyKey: 'PROJ_COMPANY_SUMMA_ARGOS',
    skills: [
      'SKILL_AREA_BPM',
      'SKILL_AREA_AUTOMATION_INTEGRATION',
      'SKILL_AREA_AI',
      'SKILL_AREA_FULLSTACK_DEVELOPMENT',
      'SKILL_LANG_TYPESCRIPT',
      'SKILL_LANG_SQL'
    ]
  },
  {
    id: 'proj-cmdb',
    personal: false,
    nameKey: 'PROJ_PROF_CMDB_NAME',
    descKey: 'PROJ_PROF_CMDB_DESC',
    companyKey: 'PROJ_COMPANY_SUMMA_ARGOS',
    skills: [
      'SKILL_AREA_AUTOMATION_INTEGRATION',
      'SKILL_AREA_DATA_SCIENCE',
      'SKILL_LANG_SQL'
    ]
  },
  {
    id: 'proj-hub-indicadores',
    personal: false,
    nameKey: 'PROJ_PROF_HUB_IND_NAME',
    descKey: 'PROJ_PROF_HUB_IND_DESC',
    companyKey: 'PROJ_COMPANY_SUMMA_ARGOS',
    skills: [
      'SKILL_AREA_DATA_SCIENCE',
      'SKILL_AREA_AUTOMATION_INTEGRATION',
      'SKILL_LANG_SQL'
    ]
  },
  {
    id: 'proj-rag-bots',
    personal: false,
    nameKey: 'PROJ_PROF_RAG_BOTS_NAME',
    descKey: 'PROJ_PROF_RAG_BOTS_DESC',
    companyKey: 'PROJ_COMPANY_SUMMA_ARGOS',
    skills: [
      'SKILL_AREA_AI',
      'SKILL_AREA_AUTOMATION_INTEGRATION',
      'SKILL_AREA_BPM',
      'SKILL_LANG_PYTHON',
      'SKILL_LANG_TYPESCRIPT'
    ]
  },
  {
    id: 'proj-githubio',
    personal: true,
    nameKey: 'PROJ_PERSONAL_GITHUBIO_NAME',
    descKey: 'PROJ_PERSONAL_GITHUBIO_DESC',
    repoUrl: 'https://github.com/jgarciacaliz/jgarciacaliz.github.io',
    siteUrl: 'https://jgarciacaliz.github.io',
    skills: ['SKILL_AREA_FULLSTACK_DEVELOPMENT', 'SKILL_LANG_TYPESCRIPT']
  },
  {
    id: 'proj-seer',
    personal: true,
    nameKey: 'PROJ_PERSONAL_SEER_NAME',
    descKey: 'PROJ_PERSONAL_SEER_DESC',
    repoUrl: 'https://github.com/jgarciacaliz/Seer',
    skills: ['SKILL_LANG_GO']
  },
  {
    id: 'proj-gatovision',
    personal: true,
    nameKey: 'PROJ_PERSONAL_GATOVISION_NAME',
    descKey: 'PROJ_PERSONAL_GATOVISION_DESC',
    repoUrl: 'https://github.com/jgarciacaliz/Gatovision',
    skills: ['SKILL_AREA_AI', 'SKILL_AREA_MACHINE_LEARNING', 'SKILL_LANG_PYTHON']
  },
  {
    id: 'proj-alirio',
    personal: true,
    nameKey: 'PROJ_PERSONAL_ALIRIO_NAME',
    descKey: 'PROJ_PERSONAL_ALIRIO_DESC',
    repoUrl: 'https://github.com/jgarciacaliz/Alirio',
    skills: ['SKILL_AREA_AUTOMATION_INTEGRATION', 'SKILL_LANG_PYTHON', 'SKILL_AREA_AI']
  }
];

export const SKILL_TO_PROJECTS: Record<string, string[]> = (() => {
  const idx: Record<string, string[]> = {};
  for (const p of ALL_PROJECTS) {
    for (const s of p.skills) {
      if (!idx[s]) idx[s] = [];
      idx[s].push(p.id);
    }
  }
  return idx;
})();
