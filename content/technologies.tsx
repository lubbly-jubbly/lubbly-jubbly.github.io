export enum TechCategory {
  languages = 'Languages',
  librariesAndFrameworks = 'Libraries and Frameworks',
  data = 'Data',
  frontend = 'Frontend',
  backend = 'Backend',
  tools = 'Tools',
  styling = 'Styling',
  contentPlatforms = 'Content Platforms',
  mobile = 'Mobile',
  cloud = 'Cloud',
  design = 'Design',
  testing = 'Testing',
}

export type Technology = {
  name: string
  categories: string[]
  icon: JSX.Element
}

export const TECHNOLOGIES: Record<string, Technology> = {
  csharp: {
    name: 'C#',
    categories: [TechCategory.languages, TechCategory.backend],
    icon: <i className="devicon-csharp-plain colored"></i>,
  },
  wordpress: {
    name: 'Wordpress',
    categories: [TechCategory.contentPlatforms],
    icon: <i className="devicon-wordpress-plain colored"></i>,
  },
  javascript: {
    name: 'JavaScript',
    categories: [TechCategory.languages, TechCategory.frontend],
    icon: <i className="devicon-javascript-plain colored"></i>,
  },
  html: {
    name: 'HTML',
    categories: [TechCategory.languages, TechCategory.frontend],
    icon: <i className="devicon-html5-plain colored"></i>,
  },
  css: {
    name: 'CSS',
    categories: [
      TechCategory.languages,
      TechCategory.frontend,
      TechCategory.styling,
    ],
    icon: <i className="devicon-css3-plain colored"></i>,
  },
  python: {
    name: 'Python',
    categories: [TechCategory.languages, TechCategory.backend],
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        alt="python logo"
      />
    ),
  },
  react: {
    name: 'React',
    categories: [TechCategory.librariesAndFrameworks, TechCategory.frontend],
    icon: <i className="devicon-react-original colored"></i>,
  },
  reactnative: {
    name: 'React Native',
    categories: [
      TechCategory.librariesAndFrameworks,
      TechCategory.frontend,
      TechCategory.mobile,
    ],
    icon: <i className="devicon-react-original colored"></i>,
  },
  tailwind: {
    name: 'Tailwind CSS',
    categories: [
      TechCategory.librariesAndFrameworks,
      TechCategory.frontend,
      TechCategory.styling,
    ],
    icon: <i className="devicon-tailwindcss-original colored"></i>,
  },
  nextjs: {
    name: 'Next.js',
    categories: [TechCategory.librariesAndFrameworks, TechCategory.frontend],
    icon: <i className="devicon-nextjs-plain colored"></i>,
  },
  java: {
    name: 'Java',
    categories: [TechCategory.languages, TechCategory.backend],
    icon: <i className="devicon-java-plain colored"></i>,
  },
  typescript: {
    name: 'TypeScript',
    categories: [TechCategory.languages, TechCategory.frontend],
    icon: <i className="devicon-typescript-plain colored"></i>,
  },
  matlab: {
    name: 'MATLAB',
    categories: [TechCategory.languages, TechCategory.backend],
    icon: <i className="devicon-matlab-plain colored"></i>,
  },
  redux: {
    name: 'Redux',
    categories: [TechCategory.librariesAndFrameworks, TechCategory.frontend],
    icon: <i className="devicon-redux-plain colored"></i>,
  },
  bootstrap: {
    name: 'Bootstrap',
    categories: [
      TechCategory.languages,
      TechCategory.frontend,
      TechCategory.styling,
    ],
    icon: <i className="devicon-bootstrap-plain colored"></i>,
  },
  sql: {
    name: 'SQL',
    categories: [TechCategory.data, TechCategory.languages],
    icon: <i className="devicon-azuresqldatabase-plain colored"></i>,
  },
  firebase: {
    name: 'Firebase',
    categories: [TechCategory.data, TechCategory.cloud],
    icon: <i className="devicon-firebase-plain colored"></i>,
  },
  cosmos: {
    name: 'Cosmos DB',
    categories: [TechCategory.data, TechCategory.cloud],
    icon: <i className="devicon-cosmosdb-plain colored"></i>,
  },
  redis: {
    name: 'Redis',
    categories: [TechCategory.data],
    icon: <i className="devicon-redis-plain colored"></i>,
  },
  git: {
    name: 'Git',
    categories: [TechCategory.tools],
    icon: <i className="devicon-git-plain colored"></i>,
  },
  latex: {
    name: 'Latex',
    categories: [TechCategory.languages],
    icon: <i className="devicon-latex-original colored"></i>,
  },
  figma: {
    name: 'Figma',
    categories: [TechCategory.design, TechCategory.tools],
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
        alt="figma logo"
      />
    ),
  },
  docker: {
    name: 'Docker',
    categories: [TechCategory.tools],
    icon: <i className="devicon-docker-plain colored"></i>,
  },
  nodejs: {
    name: 'Node.js',
    categories: [TechCategory.librariesAndFrameworks],
    icon: <i className="devicon-nodejs-plain colored"></i>,
  },
  linux: {
    name: 'Linux',
    categories: [TechCategory.tools],
    icon: <i className="devicon-linux-plain colored"></i>,
  },
  jest: {
    name: 'Jest',
    categories: [TechCategory.testing],
    icon: <i className="devicon-jest-plain colored"></i>,
  },
  sass: {
    name: 'Sass',
    categories: [
      TechCategory.styling,
      TechCategory.frontend,
      TechCategory.languages,
    ],
    icon: <i className="devicon-sass-plain colored"></i>,
  },
}

export const getNamesOfTechnologiesInCategory = (
  category: TechCategory | 'All'
) =>
  Object.values(TECHNOLOGIES)
    .filter((tech) => tech.categories.includes(category))
    .map((tech) => tech.name)

export const getTechnologiesInCategory = (category: TechCategory | 'All') =>
  Object.values(TECHNOLOGIES).filter((tech) =>
    tech.categories.includes(category)
  )
