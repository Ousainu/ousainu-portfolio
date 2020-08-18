module.exports = {
  pathPrefix: '',
  siteUrl: 'https://ousainujabbi.com',
  siteTitle: 'Ousainu Jabbi',
  siteDescription: 'Ousainu Jabbi Portfolio',
  author: 'Ousainu Jabbi',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT,
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    resume: 'resume',
    projects: 'projects',
  },
  social: {
    github: 'https://github.com/ousainu',
    linkkedin: 'https://linkedin.com/in/ousainu-jabbi',
    rss: '/rss.xml',
  },
  projects: {
    ekopiqueSite: 'https://ekopique.herokuapp.com',
    ekopiqueGithub: 'https://github.com/2004-wdf-capstone-d/capstone-spotify',
    graceshopperGithub: 'https://github.com/grace-shopper-team-a/grace-shopper-furnishUrs',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/0eb06fdb-4992-4605-80c5-2a8d161a7f8b',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
};
