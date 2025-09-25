type Project = {
  name: string
  description: string
  link: string
  video: string
  poster: string
  id: string
  uid: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string

  id: string
  country: string
  city: string
  description: string[]
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export type LocalProject = {
  name: string
  description: string
  poster: string
  link?: string
  video?: string
  id: string
  slug: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Newsletter',
    description:
      'A newsletter landing page built for RoyalZSoftware, designed to share software development insights and allow users to subscribe.',
    link: '/projects/newsletter',
    video: '',
    poster: '/projects/newsletter.png',
    id: 'project1',
    uid: 'project-1',
  },
  {
    name: 'RoyalZSoftware Website',
    description:
      'A modern corporate platform built with Next.js, TypeScript, and Tailwind CSS. The site delivers fast performance, SEO optimization, and a seamless user experience.',
    link: '/projects/royalzsoftware-website',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    poster: '/projects/royalzsoftware.png',
    id: 'project2',
    uid: 'project-2',
  },
  {
    name: 'Isar – iOS App Built with React Native',
    description:
      'The Isar app is a real-world iOS application. Built with React Native, focusing on performance, clean architecture, and UI consistency',
    link: '/projects/isar-app',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    poster: '/projects/isar-app.png',
    id: 'project3',
    uid: 'project-3',
  },
  {
    name: 'Courses',
    description:
      'A modern course marketplace (similar to Udemy) where users can buy and watch courses. Built with Next.js, TypeScript, and Tailwind CSS on the frontend, and powered by Node.js, PostgreSQL, and Docker on the backend.',
    link: '/projects/courses',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    poster: '/projects/courses-page.png',
    id: 'project4',
    uid: 'project-4',
  },
  {
    name: 'Small Todo',
    description:
      'A fully-featured ToDo application built with React and TypeScript, featuring theme switching, optimized rendering, filters, and persistence in localStorage. Deployed on Vercel/Netlify.',
    link: '/projects/todo-list',
    video: '',
    poster: '/projects/small-todo-1.png',
    id: 'project5',
    uid: 'project-5',
  },

  {
    name: 'Movie List',
    description:
      'Browse and search popular movies with filters for watched/unwatched, and view detailed movie pages. Built with React Query, Tailwind CSS, and deployed on Vercel.',
    link: '/projects/movie-list',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    poster: '/projects/movie-list.png',
    id: 'project6',
    uid: 'project-6',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'RoyalZSoftware',
    title: 'React & React Native Engineer',
    start: 'June 2024',
    end: 'Present',

    id: 'work1',
    country: 'Germany',
    city: 'Weilheim, Bavaria',
    description: [
      'Designed and implemented the company’s landing page, making all architectural decisions (Next.js)',
      'Built and integrated a blog by importing posts from Hashnode, implementing MDX for better  readability (Next.js)',
      'Currently developing a course marketplace (similar to Udemy) with Mux, Stripe, PostgreSQL, and Docker (Next.js)',
      'Preparing an “Newsletter” landing page to promote company courses (Next.js)',
      'Collaborated with cross-functional teams and took full responsibility for both frontend architecture and production delivery timelines (Next.js)',

      'Developed a calendar feature that significantly improved UX for schedule management (React Native)',
      'Implemented advanced sorting options (by clients, dates, and orders), increasing user efficiency (React Native)',
      'Enhanced overall UI by refining styles, adding loaders, and ensuring design consistency (React Native)',
      'Reduced bug reports from the client, improving application stability (React Native)',
    ],
  },
  {
    company: 'QPLix ',
    title: 'Automation Quality Assurance',
    start: 'September 2023',
    end: 'June 2024',

    id: 'work2',
    country: 'Germany',
    city: 'Munich, Bavaria',
    description: [
      'Designed and executed exploratory tests to validate new features and bug fixes.',
      'Automated UI tests using TypeScript & TestCafe to streamline regression testing.',
      'Created clear test documentation and filed bug reports in collaboration with development teams.',
      'Assisted rollout management by reviewing builds and supporting release approvals.',
    ],
  },
  {
    company: 'Upwork',
    title: 'Junior Back-End Developer',
    start: 'December 2021',
    end: 'February 2022',
    id: 'work3',
    country: 'Ukraine',
    city: 'Kharkiv',
    description: [
      'Developed and maintained web applications using Laravel.',
      'Implemented and managed database functionality (MySQL), ensuring data reliability and performance.',
      'Tested, debugged and optimized backend code to ensure smooth functionality.',
      'Collaborated with product managers, frontend developers, and UI/UX designers on delivery of client projects.',
    ],
  },
  // {
  //   company: 'Izumy IT Company',
  //   title: 'Junior Markup Developer',
  //   start: 'October 2020',
  //   end: 'December 2020',

  //   id: 'work4',
  //   country: "Ukraine",
  //   city: "Kharkiv",
  //   description: [
  //     'Web and mobile markup.',
  //     'Creating and structuring web pages using HTML, CSS, and JavaScript.',
  //     'Collaborating with designers and developers.',
  //     'Ensuring cross-browser compatibility.',
  //     'Adhering to web standards and best practices for delivering visually appealing and user-friendly web pages.',
  //   ],
  // },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'React Hooks - createContext, useContext, useMemo',
    description: 'I built a simple Todo List app in React using TypeScript. I used createContext and useContext to manage state across components, and useMemo to improve performance. Users can add, delete, complete tasks, filter them, and download the list as a CSV file',
    link: '/blog/react-todo-app',
    uid: 'blog-1',
  },
  {
    title: "Building a Web Server in Go: A Beginner's Guide",
    description:
      "I built a small web server in Go using the standard library. The server responds at / with request details and has a /count endpoint to track requests. I also handled concurrency safely with sync.Mutex. This tutorial shows how to make a working web server from scratch.",
    link: '/blog/go-server',
    uid: 'blog-2',
  },
  // {
  //   title: 'What I learned from my first year of freelancing',
  //   description:
  //     'A look back at my first year of freelancing and what I learned',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-3',
  // },
  // {
  //   title: 'How to Export Metadata from MDX for Next.js SEO',
  //   description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
  //   link: '/blog/example-mdx-metadata',
  //   uid: 'blog-4',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/alexvlasov182',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/oleksandr-vlasov-9969ab19b/',
  },
  {
    label: 'CV',
    link: 'https://drive.google.com/file/d/1nH-rOzebe-c1OsJAqtUTJSfRvV7wXYwQ/view',
  },
  {
    label: 'RoyalZSoftware',
    link: 'https://royalzsoftware.de',
  },
]

export const EMAIL = 'drumlife182@gmail.com'
