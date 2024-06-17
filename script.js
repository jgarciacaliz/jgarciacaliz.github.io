document.addEventListener('DOMContentLoaded', function() {
    const toggleThemeButton = document.getElementById('toggle-theme');
    toggleThemeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});

const texts = {
    es: {
        'DownloadCV': 'Descargar CV',
        'title': 'Hoja de vida de Juan Pablo García Cáliz',
        'profileTitle': 'Perfil Profesional',
        'profileContent': 'Ingeniero industrial con énfasis en métodos cuantitativos y tecnología, con experiencia laboral en análisis de datos y gestión de procesos TI.  Aptitudes centradas en conocimiento transversal de procesos TI, la aplicación de analítica para la estrategia del negocio, y el uso de metodologías de procesamiento de lenguaje natural. Metódico, directo, enfocado en los resultados. Intereses en investigación académica, desarrollo y aplicación de inteligencia artificial para la inteligencia de los negocios, la política social y la accesibilidad.',
        'experienceTitle': 'Experiencia Laboral',
        'job1Title': 'Gestor Sr. Transformación de Procesos I',
        'job1Company': 'Summa S.C.I.',
        'job1Duration': 'Mar 2023 – Presente',
        'job1Description': 'Gestor de procesos encargado de los procesos del departamento de TI y gobierno de datos. Documentación, análisis y transformación de procesos, descubrimientos de procesos y de desarrollo de software, monitoreo de KPIs y ANSs, gestión de riesgos, controles y planes de acción. Enfocado en metodología ágil.',
        'job2Title': 'Asistente de Datos',
        'job2Company': 'Lean Solutions Group',
        'job2Duration': 'Ene 2022 – Ago 2022',
        'job2Description': 'Analista de datos a cargo de múltiples cuentas de clientes asociadas con empresas logísticas. Desarrollo y mantenimiento de indicadores de rendimiento, análisis de datos en tiempo real, estudios de tiempo, reportes detallados, creación y monitoreo de tableros, procesamiento de datos no estructurados.',
        'job3Title': 'Coordinador logístico',
        'job3Company': 'Lean Solutions Group',
        'job3Duration': 'Abr 2021 – Ene 2022',
        'job3Description': 'Procesamiento manual de datos, automatización de procesos de la empresa, creación de SOPs, rediseño de tareas, técnicas de tratamiento de datos y otras tareas basadas en operaciones con una empresa logística en Estados Unidos.',
        'job4Title': 'Practicante',
        'job4Company': 'GlaxoSmithKline',
        'job4Duration': 'Jul 2019 – Jun 2020',
        'job4Description': 'Compilación y análisis de datos de capacitación, creación y mantenimiento de bases de datos, desarrollo de algoritmos para la extracción de KPIs, estructuración y mantenimiento de presentaciones y otros recursos.',
        'educationTitle': 'Trayectoria Académica',
        'education1Degree': 'Ingeniero Industrial',
        'education1School': 'Pontificia Universidad Javeriana',
        'education1Duration': '2014 - 2020',
        'skillsTitle': 'Competencias y Habilidades',
        'skillsList': ['Análisis de datos avanzado', 'Gestión de Procesos TI', 'Desarrollo de ML, DL & AI', 'PLN', 'Metodologías Ágiles', 'Transformación de Procesos', 'Ingeniería de Datos'],
        'languagesTitle': 'Lenguajes',
        'languagesList': ['Español C2', 'Inglés C1', 'Francés B1', 'Alemán A2'],
        'coursesTitle': 'Cursos y Certificaciones',
        'coursesList': [
            'Metodologías Ágiles - Platzi 2024',
            'Iniciación al Diseño de Productos Digitales - Platzi 2024',
            'Fundamentos de Data - Platzi 2023',
            'Project Management Professional Certification Program (PMP) - Sorin Dumitrascu 2023',
            'The Complete 2022 Web Development Bootcamp - Dr. Angela Yu 2023',
            'Power BI Course – Data Analysis and Business Intelligence - Datdata 2022',
            'NLP – Natural Language Processing with Python - Pierian Data 2021',
            'Python for Finance: Investment Fundamentals & Data Analytics - 365 Careers 2020',
            'The Business Intelligence Analyst Course 2020 - 365 Careers 2020',
            'Artificial Intelligence A-Z™: Learn How To Build An AI - SuperDataScience Team 2020',
            'Deep Learning A-Z™: Hands-On Artificial Neural Networks - SuperDataScience Team 2020',
            'Machine Learning A-Z™: Hands-On Python & R In Data Science - SuperDataScience Team 2020'
        ]
    },
    en: {
        'DownloadCV': 'Download CV',
        'title': 'Resume of Juan Pablo García Cáliz',
        'profileTitle': 'Professional Profile',
        'profileContent': 'Industrial engineer focused on quantitative methods and technology, with work experience in data analysis and IT process management. Skills centered on comprehensive understanding of IT processes, application of analytics for business strategy, and the use of natural language processing methodologies.',
        'experienceTitle': 'Work Experience',
        'job1Title': 'Senior Process Transformation Manager I',
        'job1Company': 'Summa S.C.I.',
        'job1Duration': 'Mar 2023 – Present',
        'job1Description': 'Process manager in charge of the IT department and data governance processes. Responsibilities include process documentation, analysis and transformation, discovering new software and process improvements, monitoring KPIs and SLAs, and managing risks, controls, and action plans. Focused on agile methodology.',
        'job2Title': 'Data Assistant',
        'job2Company': 'Lean Solutions Group',
        'job2Duration': 'Jan 2022 – Aug 2022',
        'job2Description': 'Data analyst in charge of multiple client accounts associated with logistics companies. Responsible for the development and maintenance of performance indicators, real-time data analysis, time studies, detailed reporting, dashboard creation and monitoring, and processing unstructured data.',
        'job3Title': 'Logistic Coordinator',
        'job3Company': 'Lean Solutions Group',
        'job3Duration': 'Apr 2021 – Jan 2022',
        'job3Description': 'Manual data processing, company processes automation, creation of standard operation procedures, task redesign, data treatment techniques and other operation-based tasks with a United States based logistic company.',
        'job4Title': 'Intern',
        'job4Company': 'GlaxoSmithKline',
        'job4Duration': 'Jul 2019 – Jun 2020',
        'job4Description': 'Training data compilation and analysis, data base creation and maintenance, algorithm development for the extraction of performance indicators, training presentation structuring and maintenance, as well as other resources.',
        'educationTitle': 'Academic Trajectory',
        'education1Degree': 'Industrial Engineering',
        'education1School': 'Pontificia Universidad Javeriana',
        'education1Years': '2014 - 2020',
        'skillsTitle': 'Skills and Competences',
        'skillsList': ['Advanced Data Analysis', 'IT Process Management', 'ML, DL & AI Development', 'NLP', 'Agile Methodologies', 'Process Transformation', 'Data Engineering'],
        'languagesTitle': 'Languages',
        'languagesList': ['Spanish C2', 'English C1', 'French B1', 'German A2'],
        'coursesTitle': 'Courses and Certifications',
        'coursesList': [
            'Agile Methodologies - Platzi 2024',
            'Initiation to Digital Product Design - Platzi 2024',
            'Data Fundamentals - Platzi 2023',
            'Project Management Professional Certification Program (PMP) - Sorin Dumitrascu 2023',
            'The Complete 2022 Web Development Bootcamp - Dr. Angela Yu 2023',
            'Power BI Course – Data Analysis and Business Intelligence - Datdata 2022',
            'NLP – Natural Language Processing with Python - Pierian Data 2021',
            'Python for Finance: Investment Fundamentals & Data Analytics - 365 Careers 2020',
            'The Business Intelligence Analyst Course 2020 - 365 Careers 2020',
            'Artificial Intelligence A-Z™: Learn How To Build An AI - SuperDataScience Team 2020',
            'Deep Learning A-Z™: Hands-On Artificial Neural Networks - SuperDataScience Team 2020',
            'Machine Learning A-Z™: Hands-On Python & R In Data Science - SuperDataScience Team 2020'
        ]
    },
    fr: {
        'DownloadCV': 'Télécharger le CV',
        'title': 'Hoja de vida de Juan Pablo García Cáliz',
        'profileTitle': 'Profil Professionnel',
        'profileContent': "Ingénieur industriel spécialisé dans les méthodes quantitatives et la technologie, avec une expérience professionnelle en analyse de données et gestion des processus TI. Compétences centrées sur une compréhension globale des processus TI, l'application de l'analytique pour la stratégie d'entreprise, et l'utilisation de méthodologies de traitement automatique des langues. Méthodique, direct et axé sur les résultats. Intérêts par la recherche académique, le développement et l'application de l'intelligence artificielle pour l'intelligence des affaires, la politique et l'accessibilité.",
        'experienceTitle': 'Expérience Professionnelle',
        'job1Title': 'Manager Senior de Transformation des Processus I',
        'job1Company': 'Summa S.C.I.',
        'job1Duration': 'Mar 2023 – Présent',
        'job1Description': "Responsable des processus du département IT et de la gouvernance des données. Documentation, analyse et transformation des processus, découvertes en développement de processus et de logiciels, surveillance des KPI et des SLA, gestion des risques, contrôles et plans d'action. Axé sur la méthodologie agile.",
        'job2Title': 'Assistant de Données',
        'job2Company': 'Lean Solutions Group',
        'job2Duration': 'Jan 2022 – Août 2022',
        'job2Description': "Analyste de données responsable de plusieurs comptes clients associés à des entreprises logistiques. Développement et maintenance d'indicateurs de performance, analyse de données en temps réel, études de temps, rapports d'insight, création et surveillance de tableaux de bord, traitement de données non structurées.",
        'job3Title': 'Coordinateur Logistique',
        'job3Company': 'Lean Solutions Group',
        'job3Duration': 'Avr 2021 – Jan 2022',
        'job3Description': "Traitement manuel des données, automatisation des processus, création de SOPs, redéfinition des tâches, techniques de traitement des données et autres tâches opérationnelles pour une entreprise logistique basée aux États-Unis.",
        'job4Title': 'Stagiaire',
        'job4Company': 'GlaxoSmithKline',
        'job4Duration': 'Juil 2019 – Juin 2020',
        'job4Description': "Compilation et analyse de données de formation, création et maintenance de bases de données, développement d'algorithmes pour l'extraction de KPIs, structuration et maintenance de présentations et autres ressources.",
        'educationTitle': 'Formation Académique',
        'education1Degree': 'Ingénieur Industriel',
        'education1School': 'Pontificia Universidad Javeriana',
        'education1Years': '2014 - 2020',
        'skillsTitle': 'Compétences et Qualifications',
        'skillsList': ['Analyse avancée des données', 'Gestion des processus TI', 'Développement en ML, DL & IA', 'Traitement automatique du langage', 'Méthodologies agiles', 'Transformation des processus', 'Ingénierie des données'],
        'languagesTitle': 'Langues',
        'languagesList': ['Espagnol C2', 'Anglais C1', 'Français B1', 'Allemand A2'],
        'coursesTitle': 'Cours et Certifications',
        'coursesList': [
            'Méthodologies Agiles - Platzi 2024',
            'Initiation à la conception de produits digitaux - Platzi 2024',
            'Fondamentaux des Données - Platzi 2023',
            'Project Management Professional Certification Program (PMP) - Sorin Dumitrascu 2023',
            'The Complete 2022 Web Development Bootcamp - Dr. Angela Yu 2023',
            'Power BI Course – Data Analysis and Business Intelligence - Datdata 2022',
            'NLP – Natural Language Processing with Python - Pierian Data 2021',
            'Python for Finance: Investment Fundamentals & Data Analytics - 365 Careers 2020',
            'The Business Intelligence Analyst Course 2020 - 365 Careers 2020',
            'Artificial Intelligence A-Z™: Learn How To Build An AI - SuperDataScience Team 2020',
            'Deep Learning A-Z™: Hands-On Artificial Neural Networks - SuperDataScience Team 2020',
            'Machine Learning A-Z™: Hands-On Python & R In Data Science - SuperDataScience Team 2020'
        ]
    },
    de: {
        'DownloadCV': 'Lebenslauf herunterladen',
        'title': 'Lebenslauf von Juan Pablo García Cáliz',
        'profileTitle': 'Berufsprofil',
        'profileContent': 'Industrieingenieur mit Schwerpunkt auf mit Berufserfahrung in der Datenanalyse und im Management von IT-Prozessen. Fähigkeiten konzentrieren sich auf ein umfassendes Verständnis von IT-Prozessen, die Anwendung von Analytik für die Geschäftsstrategie und die Nutzung von Methoden der natürlichen Sprachverarbeitung. Methodisch, direkt und ergebnisorientiert. Interessen in akademischer Forschung, Entwicklung und Anwendung von künstlicher Intelligenz für Geschäftanalytik, Sozialpolitik und Zugänglichkeit.',
        'experienceTitle': 'Berufserfahrung',
        'job1Title': 'Senior Manager für Prozessumwandlung I',
        'job1Company': 'Summa S.C.I.',
        'job1Duration': 'Mär 2023 – Presente',
        'job1Description': 'Verantwortlich für die Prozesse der IT-Abteilung und Datenverwaltung. Dokumentation, Analyse und Transformation von Prozessen, Entdeckungen in Prozess- und Softwareentwicklung, Überwachung von KPIs und SLAs, Risiko-, Kontroll- und Aktionsplanmanagement. Fokus auf agile Methodik.',
        'job2Title': 'Datenassistent',
        'job2Company': 'Lean Solutions Group',
        'job2Duration': 'Jan 2022 – Aug 2022',
        'job2Description': 'Datenanalyst, verantwortlich für mehrere Kundenkonten, die mit Logistikunternehmen verbunden sind. Entwicklung und Wartung von Leistungsindikatoren, Echtzeitanalyse von Daten, Zeitstudien, Erstellung von Einsichtsberichten, Dashboard-Erstellung und -Überwachung, Verarbeitung unstrukturierter Daten.',
        'job3Title': 'Logistikkoordinator',
        'job3Company': 'Lean Solutions Group',
        'job3Duration': 'Apr 2021 – Jan 2022',
        'job3Description': 'Manuelle Datenverarbeitung, Automatisierung von Prozessen, Erstellung von SOPs, Aufgabenneugestaltung, Datenaufbereitungstechniken und weitere betriebsbasierte Tätigkeiten für ein US-Logistikunternehmen.',
        'job4Title': 'Praktikant',
        'job4Company': 'GlaxoSmithKline',
        'job4Duration': 'Jul 2019 – Jun 2020',
        'job4Description': 'Zusammenstellung und Analyse von Schulungsdaten, Datenbankerstellung und -wartung, Entwicklung von Algorithmen zur KPI-Extraktion, Strukturierung und Pflege von Schulungspräsentationen und weiteren Ressourcen.',
        'educationTitle': 'Akademischer Werdegang',
        'education1Degree': 'Industrieingenieur',
        'education1School': 'Pontificia Universidad Javeriana',
        'education1Years': '2014 - 2020',
        'skillsTitle': 'Fähigkeiten und Kompetenzen',
        'skillsList': ['Fortgeschrittene Datenanalyse', 'IT-Prozessmanagement', 'ML-, DL- & KI-Entwicklung', 'Natürliche Sprachverarbeitung', 'Agile Methoden', 'Prozesstransformation', 'Daten-Engineering'],
        'languagesTitle': 'Sprachen',
        'languagesList': ['Spanisch C2', 'Englisch C1', 'Französisch B1', 'Deutsch A2'],
        'coursesTitle': 'Kurse und Zertifikationen',
        'coursesList': [
            'Agile Methoden - Platzi 2024',
            'Einführung ins digitale Produktdesign - Platzi 2024',
            'Daten-Grundlagen - Platzi 2023',
            'Project Management Professional Certification Program (PMP) - Sorin Dumitrascu 2023',
            'The Complete 2022 Web Development Bootcamp - Dr. Angela Yu 2023',
            'Power BI Course – Data Analysis and Business Intelligence - Datdata 2022',
            'NLP – Natural Language Processing with Python - Pierian Data 2021',
            'Python for Finance: Investment Fundamentals & Data Analytics - 365 Careers 2020',
            'The Business Intelligence Analyst Course 2020 - 365 Careers 2020',
            'Artificial Intelligence A-Z™: Learn How To Build An AI - SuperDataScience Team 2020',
            'Deep Learning A-Z™: Hands-On Artificial Neural Networks - SuperDataScience Team 2020',
            'Machine Learning A-Z™: Hands-On Python & R In Data Science - SuperDataScience Team 2020'
        ]
    }
};


let currentLanguage = 'es'; // Idioma inicial

function changeLanguage(lang) {
    document.getElementById('download-cv').textContent = texts[lang]['DownloadCV'];
    document.getElementById('doc-title').textContent = texts[lang]['title'];
    document.getElementById('profile-title').textContent = texts[lang]['profileTitle'];
    document.getElementById('profile-content').textContent = texts[lang]['profileContent'];

    document.getElementById('experience-title').textContent = texts[lang]['experienceTitle'];
    document.getElementById('job1-title').textContent = texts[lang]['job1Title'];
    document.getElementById('job1-company').textContent = texts[lang]['job1Company'];
    document.getElementById('job1-duration').textContent = texts[lang]['job1Duration'];
    document.getElementById('job1-description').textContent = texts[lang]['job1Description'];

    document.getElementById('job2-title').textContent = texts[lang]['job2Title'];
    document.getElementById('job2-company').textContent = texts[lang]['job2Company'];
    document.getElementById('job2-duration').textContent = texts[lang]['job2Duration'];
    document.getElementById('job2-description').textContent = texts[lang]['job2Description'];

    document.getElementById('job3-title').textContent = texts[lang]['job3Title'];
    document.getElementById('job3-company').textContent = texts[lang]['job3Company'];
    document.getElementById('job3-duration').textContent = texts[lang]['job3Duration'];
    document.getElementById('job3-description').textContent = texts[lang]['job3Description'];

    document.getElementById('job4-title').textContent = texts[lang]['job4Title'];
    document.getElementById('job4-company').textContent = texts[lang]['job4Company'];
    document.getElementById('job4-duration').textContent = texts[lang]['job4Duration'];
    document.getElementById('job4-description').textContent = texts[lang]['job4Description'];

    document.getElementById('education-title').textContent = texts[lang]['educationTitle'];
    document.getElementById('education1-degree').textContent = texts[lang]['education1Degree'];
    document.getElementById('education1-school').textContent = texts[lang]['education1School'];
    document.getElementById('education1-duration').textContent = texts[lang]['education1Duration'];

    document.getElementById('skills-title').textContent = texts[lang]['skillsTitle'];
    updateList('skills-list', texts[lang]['skillsList']);

    document.getElementById('languages-title').textContent = texts[lang]['languagesTitle'];
    updateList('languages-list', texts[lang]['languagesList']);

    document.getElementById('courses-title').textContent = texts[lang]['coursesTitle'];
    updateList('courses-list', texts[lang]['coursesList']);

    var cvLink = document.getElementById('download-cv-link');
    cvLink.href = `CV JPGC2024 - ${lang.toUpperCase()} - P.pdf`;
    cvLink.download = `CV JPGC2024 - ${lang.toUpperCase()} - P.pdf`;
    // Ocultar el menú de selección después de cambiar el idioma
    document.getElementById('language-selector').style.display = 'none';
}

function updateList(listId, items) {
    var list = document.getElementById(listId);
    list.innerHTML = ''; // Limpiar elementos existentes
    items.forEach(item => {
        var li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}

function setPreferredLanguage() {
    // Obtener el idioma preferido del navegador
    var preferredLang = navigator.language || navigator.userLanguage;

    // Cortar para manejar subcódigos de idioma, como en 'en-US' a 'en'
    preferredLang = preferredLang.substring(0, 2);

    // Verificar si el idioma preferido está disponible en nuestras traducciones
    if (texts.hasOwnProperty(preferredLang)) {
        changeLanguage(preferredLang);
    } else {
        // Si no está disponible, usar un idioma por defecto
        changeLanguage('en'); // Asumimos que el inglés es el idioma por defecto
    }
}

// Ejecutar la función cuando se cargue la página
window.onload = setPreferredLanguage;

// Event listener para el botón de cambio de idioma
document.getElementById('toggle-language').addEventListener('click', function() {
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector.style.display === 'none') {
        languageSelector.style.display = 'block';
    } else {
        languageSelector.style.display = 'none';
    }
});


