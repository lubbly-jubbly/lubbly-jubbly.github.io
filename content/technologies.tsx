export enum TechCategory {
  languages = 'LANGUAGES',
  librariesAndFrameworks = 'LIBRARIES AND FRAMEWORKS',
  data = 'DATA',
  other = 'OTHER',
}

export type Technology = {
  name: string
  category: string
  icon: JSX.Element
}

export const TECHNOLOGIES: Record<string, Technology> = {
  csharp: {
    name: 'C#',
    category: TechCategory.languages,
    icon: <i className="devicon-csharp-plain colored"></i>,
  },
  wordpress: {
    name: 'Wordpress',
    category: TechCategory.other,
    icon: <i className="devicon-wordpress-plain colored"></i>,
  },
  javascript: {
    name: 'JavaScript',
    category: TechCategory.languages,
    icon: <i className="devicon-javascript-plain colored"></i>,
  },
  html: {
    name: 'HTML',
    category: TechCategory.languages,
    icon: <i className="devicon-html5-plain colored"></i>,
  },
  css: {
    name: 'CSS',
    category: TechCategory.languages,
    icon: <i className="devicon-css3-plain colored"></i>,
  },
  python: {
    name: 'Python',
    category: TechCategory.languages,
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        alt="python logo"
      />
    ),
  },
  react: {
    name: 'React',
    category: TechCategory.librariesAndFrameworks,
    icon: <i className="devicon-react-original colored"></i>,
  },
  reactnative: {
    name: 'React Native',
    category: TechCategory.librariesAndFrameworks,
    icon: <i className="devicon-react-original colored"></i>,
  },
  tailwind: {
    name: 'Tailwind CSS',
    category: TechCategory.librariesAndFrameworks,
    icon: <i className="devicon-tailwindcss-original colored"></i>,
  },
  nextjs: {
    name: 'Next.js',
    category: TechCategory.librariesAndFrameworks,
    icon: <i className="devicon-nextjs-plain colored"></i>,
  },
  java: {
    name: 'Java',
    category: TechCategory.languages,
    icon: <i className="devicon-java-plain colored"></i>,
  },
  typescript: {
    name: 'TypeScript',
    category: TechCategory.languages,
    icon: <i className="devicon-typescript-plain colored"></i>,
  },
  matlab: {
    name: 'MATLAB',
    category: TechCategory.languages,
    icon: <i className="devicon-matlab-plain colored"></i>,
  },
  redux: {
    name: 'Redux',
    category: TechCategory.librariesAndFrameworks,
    icon: <i className="devicon-redux-plain colored"></i>,
  },
  bootstrap: {
    name: 'Bootstrap',
    category: TechCategory.languages,
    icon: <i className="devicon-bootstrap-plain colored"></i>,
  },
  sql: {
    name: 'SQL',
    category: TechCategory.data,
    icon: <i className="devicon-azuresqldatabase-plain colored"></i>,
  },
  firebase: {
    name: 'Firebase',
    category: TechCategory.librariesAndFrameworks,
    icon: <i className="devicon-firebase-plain colored"></i>,
  },
  cosmos: {
    name: 'Cosmos DB',
    category: TechCategory.librariesAndFrameworks,
    icon: <i className="devicon-cosmosdb-plain colored"></i>,
  },
  redis: {
    name: 'Redis',
    category: TechCategory.librariesAndFrameworks,
    icon: <i className="devicon-redis-plain colored"></i>,
  },
  git: {
    name: 'Git',
    category: TechCategory.librariesAndFrameworks,
    icon: <i className="devicon-git-plain colored"></i>,
  },
  latex: {
    name: 'Latex',
    category: TechCategory.librariesAndFrameworks,
    icon: <i className="devicon-latex-original colored"></i>,
  },
  figma: {
    name: 'Figma',
    category: TechCategory.librariesAndFrameworks,
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
        alt="figma logo"
      />
    ),
  },
  docker: {
    name: 'Docker',
    category: TechCategory.librariesAndFrameworks,
    icon: <i className="devicon-docker-plain colored"></i>,
  },
  nodejs: {
    name: 'Node.js',
    category: TechCategory.other,
    icon: <i className="devicon-nodejs-plain colored"></i>,
  },
  linux: {
    name: 'Linux',
    category: TechCategory.other,
    icon: <i className="devicon-linux-plain colored"></i>,
  },
  jest: {
    name: 'Jest',
    category: TechCategory.other,
    icon: <i className="devicon-jest-plain colored"></i>,
  },
}

export const getNamesOfTechnologiesInCategory = (category: TechCategory) =>
  Object.values(TECHNOLOGIES)
    .filter((tech) => tech.category === category)
    .map((tech) => tech.name)

export const getTechnologiesInCategory = (category: TechCategory) =>
  Object.values(TECHNOLOGIES).filter((tech) => tech.category === category)
