import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi! I'm",
  name: 'Arifitanto',
  subtitle: 'Welcome to my portfolio',
  cta: 'Great',
};

// ABOUT DATA
export const aboutData = {
  img: 'tito.jpeg',
  paragraphOne: 'My name is Arifitanto Oktarian Hafayer, currently a final year of Telecommunication Engineering at Telkom University.',
  paragraphTwo: 'I really like things about programming, I am very diligent in studying it because many things in our lives can actually be solved by programming. I still have a lot to learn about other programming languages ​​until I can become an expert programmer.',
  paragraphThree: 'You guys can see my experience which I have summarized in the resume below.',
  resume: 'https://drive.google.com/file/d/1_64eWgKMWtk0Gi7JA0hC6S5UfbDwjdW_/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Covid19.png',
    title: 'Data Analysis COVID-19 West Jakarta Indonesia',
    info: 'The Covid-19 Data Analysis Project is a data processing process with the aim of finding useful information related to data on people who have been affected, recovered and died from the COVID-19 virus starting from April to October 2021, which can be used as a basis for making decisions to solve a problem.',
    info2: 'This project uses json to retrieve data from covid19.go.id and Python language to program data with Pandas, Numpy, Matplotlib and Requests libraries.',
    url: '', 
    repo: 'https://github.com/arifitantotito/Analisis-Data-COVID-19-Jawa-Barat-Indonesia', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pyty.png',
    title: 'Speech-to-Text to Open Youtube with Python.',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/arifitantotito/Run-YT-with-Python', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
