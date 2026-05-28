export const it = {
  meta: {
    title: 'Andrea Righini - Growth Marketer',
    description:
      'Growth Marketer freelance. Aiuto SaaS e PMI italiane a crescere nel mondo del digital marketing.',
    langCode: 'it',
    altLangHref: '/en/',
  },
  nav: {
    about: 'Chi sono',
    work: 'Esperienze',
    education: 'Studi',
    contact: 'Contatti',
  },
  hero: {
    name: 'Andrea Righini',
    role: 'Growth Marketer',
    tagline: 'Aiuto SaaS e PMI italiane a crescere nel mondo del digital marketing.',
    taglineHighlight: 'crescere',
    intro:
      'Freelance dal 2024. Lavoro con Pollo&Friends, Italian Exhibition Group e altre realtà che vogliono trasformare il marketing in un motore di crescita misurabile.',
    ctaPrimary: 'Scrivimi',
    ctaSecondary: 'LinkedIn',
    photoAlt: 'Foto di Andrea Righini',
    clientsLabel: 'Clienti recenti',
  },
  marquee: {
    label: 'Aziende con cui ho lavorato',
    items: [
      'Pollo&Friends',
      'Italian Exhibition Group',
      'Serenis',
      'Loqui',
      'SCS Consulting',
    ],
  },
  about: {
    title: 'Chi sono',
    items: [
      { icon: '📍', text: 'Attualmente a Rimini' },
      { icon: '🎓', text: 'Laurea magistrale in Economia manageriale a Bologna' },
      { icon: '🌍', text: '6 mesi di Erasmus in Spagna' },
      { icon: '💼', text: 'Freelance dal 2024 per SaaS e PMI italiane' },
      { icon: '🚀', text: "Mi gasa l'ecosistema startup italiano" },
      { icon: '🏐', text: 'Nel tempo libero: beach volley e basket' },
    ],
  },
  work: {
    title: 'Esperienze',
    items: [
      {
        slug: 'freelance',
        org: 'Freelance',
        role: 'Growth Marketing',
        period: 'Nov 24 - Oggi',
        description: '',
      },
      {
        slug: 'serenis',
        org: 'Serenis',
        role: 'Brand & Growth',
        period: 'Mar 24 - Ott 24',
        description:
          'Gestito campagne ads Meta (-40% CPC, +conversioni), costruito SEO off-page per backlink e crescita, fatto crescere IG del 40% (fino a 200k), tracciato i competitor e riportato le performance via Looker Studio.',
      },
      {
        slug: 'loqui',
        org: 'Loqui',
        role: 'Performance Marketing Analyst',
        period: 'Set 23 - Mar 24',
        description:
          'Guidato iniziative di performance marketing la sera, in parallelo al ruolo di consulente in SCS.',
      },
      {
        slug: 'scs',
        org: 'SCS Consulting',
        role: 'Business Analyst',
        period: 'Ago 23 - Mar 24',
        description:
          'Gestito attività di PM su Asana, analizzato il CRM di un top brand retail, fatto ricerca sui canali CRM (app/web) per un leader di mobili outdoor, e supportato un\'operazione di M&A con processi standardizzati e flussi "to-be".',
      },
    ],
  },
  education: {
    title: 'Studi',
    items: [
      {
        slug: 'unibo-master',
        org: 'Università di Bologna',
        role: 'Management Master Degree (110/110)',
        period: 'Set 21 - Lug 24',
      },
      {
        slug: 'ucam',
        org: 'UCAM University',
        role: 'Exchange student (GPA 4.0/4.0)',
        period: 'Set 22 - Gen 23',
      },
      {
        slug: 'unibo-bachelor',
        org: 'Università di Bologna',
        role: 'Business Bachelor Degree (110/110)',
        period: 'Set 18 - Lug 21',
      },
    ],
  },
  tools: {
    title: 'Strumenti',
    items: ['Meta Ads', 'Google Ads', 'GA4', 'Notion', 'CRM', 'Looker Studio'],
  },
  contact: {
    title: 'Parliamone',
    blurb: 'Mandami una mail o scrivimi un messaggio su linkedin :)',
    email: 'andrea.righinix@gmail.com',
    linkedin: 'https://www.linkedin.com/in/andrerighini',
    linkedinLabel: 'LinkedIn',
  },
  footer: {
    copy: 'Andrea Righini',
    note: 'Fatto smanettando con AI',
    backToTop: 'Torna su',
  },
} as const;
