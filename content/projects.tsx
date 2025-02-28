import { TECHNOLOGIES, Technology } from './technologies'

export type Project = {
  name: string
  technologies: Technology[]
  shortDescription: string
  projectType: string
  url?: string
  logo?: JSX.Element
  date: string
  githubUrl?: string
  liveUrl?: string
  imageUrls: string[]
  image: JSX.Element
  videoId?: string
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
    shortDescription:
      'A rota management app for hospitality workplaces that creates a rota based on the availability and preferences of employees.',
    projectType: 'MSc project',
    url: './work/switch',
    logo: <img src="images/gce-logo.png" alt="GCE logo" />,
    date: 'Jun - Aug 2022',
    githubUrl: 'https://github.com/lubbly-jubbly/Switch',
    imageUrls: [
      'images/switchScreenshots/add-shift.png',
      'images/switchScreenshots/create-rota.png',
      'images/switchScreenshots/create-team.png',
      'images/switchScreenshots/day-details.png',
      'images/switchScreenshots/delete-shift.png',
      'images/switchScreenshots/edit-weekly-hours.png',
      'images/switchScreenshots/employee-view-requests.png',
      'images/switchScreenshots/enter-join-code.png',
      'images/switchScreenshots/home-tab.png',
      'images/switchScreenshots/login-1.png',
      'images/switchScreenshots/login-2.png',
      'images/switchScreenshots/login-3.png',
      'images/switchScreenshots/login-4.png',
      'images/switchScreenshots/regular-time-off.png',
      'images/switchScreenshots/remove-employee.png',
      'images/switchScreenshots/request-modal.png',
      'images/switchScreenshots/reset-password.png',
      'images/switchScreenshots/rota-tab-admin.png',
      'images/switchScreenshots/select-time-off.png',
      'images/switchScreenshots/signup-1.png',
      'images/switchScreenshots/signup-2.png',
      'images/switchScreenshots/signup-3.png',
      'images/switchScreenshots/signup-4.png',
      'images/switchScreenshots/signup-5.png',
      'images/switchScreenshots/staff-requirements.png',
      'images/switchScreenshots/time-pickers-disappear.png',
      'images/switchScreenshots/view-requests.png',
      'images/switchScreenshots/view-team.png',
    ],
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
    videoId: 'hkhQliBpbDE?si=XBIHWeluysoaj2HS',
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
    imageUrls: [
      'images/gceScreenshots/map.png',
      'images/gceScreenshots/membership-checkout.png',
      'images/gceScreenshots/become-member.png',
    ],
    image: <img src="images/gceScreenshots/map.png" alt="" />,
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
    imageUrls: [],
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
    imageUrls: [],
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
    imageUrls: [],
    image: <img src="images/gce-screenshot-1.png" alt="" className="img" />,
  },
  anki: {
    name: 'Anki',
    technologies: [TECHNOLOGIES.python],
    shortDescription: `Various projects relating to Anki flashcard program.`,
    projectType: 'Personal project',
    logo: <img src="images/gce-logo.png" alt="GCE logo" />,
    date: 'Oct 2024 - Jan 2025',
    githubUrl: '',
    imageUrls: [],
    image: <img src="images/gce-screenshot-1.png" alt="" className="img" />,
  },
  germanVocabDeck: {
    name: 'German Vocab Deck',
    technologies: [TECHNOLOGIES.python],
    shortDescription: `Script that creates an anki .apkg file from a csv containing german café vocab.`,
    projectType: 'Personal project',
    date: 'Nov 2024',
    githubUrl: 'https://github.com/lubbly-jubbly/german-cafe-vocab-deck',
    imageUrls: [],
    image: <img src="images/gce-screenshot-1.png" alt="" className="img" />,
  },
  reorderWanikaniDeck: {
    name: 'Moekani',
    technologies: [TECHNOLOGIES.python],
    shortDescription: `Reorders a wanikani deck, so that the order of the kanji and vocab decks match the order of the kanji and vocab shown in TheMoeWay N5 japanese deck.`,
    projectType: 'Personal project',
    date: 'Oct - Nov 2024',
    githubUrl: 'https://github.com/lubbly-jubbly/moekani',
    imageUrls: [],
    image: <img src="images/gce-screenshot-1.png" alt="" className="img" />,
  },
  moekani: {
    name: 'Moekani 2',
    technologies: [TECHNOLOGIES.python],
    shortDescription: `Creates an Anki deck based on an existing japanese deck, TheMoeWay, and data queried from the api of Wanikani, a kanji learning tool.`,
    projectType: 'Personal project',
    date: 'Jan 2025',
    githubUrl: 'https://github.com/lubbly-jubbly/moekani-2',
    imageUrls: [],
    image: <img src="images/gce-screenshot-1.png" alt="" className="img" />,
  },
}
