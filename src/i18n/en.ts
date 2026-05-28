export const en = {
  meta: {
    title: 'Andrea Righini - Growth Marketer',
    description:
      'Freelance Growth Marketer. I help Italian SaaS and SMBs grow in the digital marketing space.',
    langCode: 'en',
    altLangHref: '/',
  },
  nav: {
    about: 'About',
    work: 'Work',
    education: 'Studies',
    contact: 'Contact',
  },
  hero: {
    name: 'Andrea Righini',
    role: 'Growth Marketer',
    tagline: 'I help Italian SaaS and SMBs grow in the digital marketing space.',
    taglineHighlight: 'grow',
    intro:
      'Freelance since 2024. I work with Pollo&Friends, Italian Exhibition Group and other companies that want to turn marketing into a measurable growth engine.',
    ctaPrimary: 'Get in touch',
    ctaSecondary: 'LinkedIn',
    photoAlt: 'Andrea Righini photo',
    clientsLabel: 'Recent clients',
  },
  about: {
    title: 'About',
    items: [
      { icon: '📍', text: 'Currently in Rimini' },
      { icon: '🎓', text: "Master's in Management Economics in Bologna" },
      { icon: '🌍', text: 'Six months of Erasmus in Spain' },
      { icon: '💼', text: 'Freelance since 2024 for Italian SaaS and SMBs' },
      { icon: '🚀', text: 'Hyped by the Italian startup ecosystem' },
      { icon: '🏐', text: 'Off work: beach volley, basketball and youtube' },
    ],
  },
  work: {
    title: 'Experience',
    items: [
      {
        slug: 'freelance',
        org: 'Freelance',
        role: 'Growth Marketing',
        period: 'Nov 24 - Now',
        description: '',
      },
      {
        slug: 'serenis',
        org: 'Serenis',
        role: 'Brand & Growth',
        period: 'Mar 24 - Oct 24',
        description:
          'Managed Meta ad campaigns (-40% CPC, +conversions), built off-page SEO for backlinks & growth, grew IG by 40% (to 200k), tracked competitors, and reported performance via Looker Studio.',
      },
      {
        slug: 'loqui',
        org: 'Loqui',
        role: 'Performance Marketing Analyst',
        period: 'Sep 23 - Mar 24',
        description:
          'Led performance marketing initiatives during evenings, alongside my consulting role at SCS.',
      },
      {
        slug: 'scs',
        org: 'SCS Consulting',
        role: 'Business Analyst',
        period: 'Aug 23 - Mar 24',
        description:
          'Oversaw PM tasks in Asana, analyzed CRM for top retail brand, researched CRM channels (apps/web) for outdoor furniture leader, and supported M&A with standardized processes and "to-be" flows.',
      },
    ],
  },
  education: {
    title: 'Education',
    items: [
      {
        slug: 'unibo-master',
        org: 'University of Bologna',
        role: 'Management Master Degree (110/110)',
        period: 'Sept 21 - July 24',
      },
      {
        slug: 'ucam',
        org: 'UCAM University',
        role: 'Exchange student (GPA 4.0/4.0)',
        period: 'Sept 22 - Jan 23',
      },
      {
        slug: 'unibo-bachelor',
        org: 'University of Bologna',
        role: 'Business Bachelor Degree (110/110)',
        period: 'Sept 18 - July 21',
      },
    ],
  },
  contact: {
    title: "Let's talk",
    blurb: 'Drop me an email or message me on linkedin :)',
    email: 'andrea.righinix@gmail.com',
    linkedin: 'https://www.linkedin.com/in/andrerighini',
    linkedinLabel: 'LinkedIn',
  },
  footer: {
    copy: 'Andrea Righini',
    note: 'Made tinkering with AI',
    backToTop: 'Back to top',
  },
} as const;
