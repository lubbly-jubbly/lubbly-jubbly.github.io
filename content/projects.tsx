import { TECHNOLOGIES, Technology } from './technologies'

export type Project = {
  name: string
  technologies: Technology[]
  shortDescription: string
  projectType: string
  url: string
  logo: JSX.Element
  date: string
}

export const PROJECTS: Record<string, Project> = {
  switch: {
    name: 'Switch',
    technologies: [
      TECHNOLOGIES.reactnative,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.firebase,
      TECHNOLOGIES.jest,
      TECHNOLOGIES.figma,
    ],
    shortDescription: 'A rota management app for hospitality workplaces.',
    projectType: 'MSc project',
    url: './work/switch',
    logo: <img src="images/gce-logo.png" alt="GCE logo" />,
    date: 'Jun - Aug 2022',
  },
  gce: {
    name: 'Glasgow Community Energy',
    technologies: [
      TECHNOLOGIES.wordpress,
      TECHNOLOGIES.javascript,
      TECHNOLOGIES.html,
      TECHNOLOGIES.css,
    ],
    shortDescription:
      'Ongoing improvements to the Wordpress site of a renewable energy co-operative based in Glasgow. Work so far has included setting up a paid membership system with Stripe and creating an interactive map.',
    projectType: 'Voluntary work',
    url: './work/gce',
    logo: <img src="images/gce-logo.png" alt="GCE logo" />,
    date: 'April 2024 - Present',
  },
  pubble: {
    name: 'Pubble',
    technologies: [
      TECHNOLOGIES.javascript,
      TECHNOLOGIES.html,
      TECHNOLOGIES.css,
      TECHNOLOGIES.python,
    ],
    shortDescription:
      'Find the perfect pub! A web app that finds the pub equidistant to addresses entered',
    projectType: 'Personal project',
    url: './work/pubble',
    logo: <img src="images/pubble-logo.svg" alt="Pubble logo" />,
    date: 'Aug 2024 - Present',
  },
  vor: {
    name: 'VOR',
    technologies: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.html,
      TECHNOLOGIES.css,
      TECHNOLOGIES.javascript,
      TECHNOLOGIES.csharp,
    ],
    shortDescription:
      'Working within a small team on an operations management and emissions reduction platform for the oil and gas industry.',
    projectType: 'Paid work',
    url: './work/vor',
    logo: <img src="images/vor-logo.png" alt="VOR logo" />,
    date: 'Nov 2022 - May 2024',
  },
  portfolio: {
    name: 'This Site',
    technologies: [
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.react,
      TECHNOLOGIES.javascript,
      TECHNOLOGIES.html,
      TECHNOLOGIES.tailwind,
    ],
    shortDescription: ``,
    projectType: 'Personal project',
    url: './work/vor',
    logo: <img src="images/gce-logo.png" alt="GCE logo" />,
    date: 'Jan 2024 - Present',
  },
}
