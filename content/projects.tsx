import { TECHNOLOGIES, Technology } from './technologies'

export type Project = {
  name: string
  technologies: Technology[]
  shortDescription: string
  projectType: string
  url: string
  logo: JSX.Element
  date: string
  githubUrl?: string
  liveUrl?: string
  image: JSX.Element
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
    githubUrl: 'https://github.com/lubbly-jubbly/Switch',
    image: (
      <div className="flex flex-row gap-2">
        <img
          className="w-1/3"
          src="images/switchScreenshots/add-shift.png"
          alt=""
        />
        <img
          className="w-1/3"
          src="images/switchScreenshots/employee-view-requests.png"
          alt=""
        />
        <img
          className="w-1/3"
          src="images/switchScreenshots/day-details.png"
          alt=""
        />
      </div>
    ),
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
    liveUrl: 'https://www.glasgowenergy.coop/',
    image: <img src="images/gce-screenshot-1.png" alt="" />,
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
    githubUrl: 'https://github.com/caiodrear/pubble',
    liveUrl: 'https://pubble.azurewebsites.net/',
    image: <img src="images/gce-screenshot-1.png" alt="" className="img" />,
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
    image: <img src="images/gce-screenshot-1.png" alt="" className="img" />,
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
    githubUrl: 'https://github.com/lubbly-jubbly/lubbly-jubbly.github.io',
    image: <img src="images/gce-screenshot-1.png" alt="" className="img" />,
  },
  anki: {
    name: 'Anki projects',
    technologies: [TECHNOLOGIES.python],
    shortDescription: `Various projects relating to Anki flashcard program, including converting a CSV to an Anki deck and optimisation of Japanese decks.`,
    projectType: 'Personal project',
    url: './work/vor',
    logo: <img src="images/gce-logo.png" alt="GCE logo" />,
    date: 'Jan 2024 - Present',
    githubUrl: 'https://github.com/lubbly-jubbly/lubbly-jubbly.github.io',
    image: <img src="images/gce-screenshot-1.png" alt="" className="img" />,
  },
}
