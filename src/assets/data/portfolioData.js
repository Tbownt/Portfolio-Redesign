import heroesApp from "../images/heroesapp.png";
import CalendarApp from "../images/calendarapp.png";
import BuddyONG from "../images/buddyong.png";
import Moonflix from "../images/Moonflix.png";
import MoonflixRN from "../images/MoonflixRN.jpg";
import JournalApp from "../images/journalapp.png";

const portfolios = [
  {
    id: 1,
    title: "HeroesApp",
    description:
      "HeroesApp is a pure React Application inspired by heroes from Marvel and Dc comics showing a limit quantity of heroes who has his own page, url and search method.",
    link: "https://tbowntheroesapp.netlify.app/",
    repository: "https://github.com/Tbownt/React-Notes/tree/main/07-Heroes-SPA",
    image: heroesApp,
  },
  {
    id: 2,
    title: "JournalApp",
    description:
      "JournalApp is an application for uploading notes to Firebase with status management in Redux toolkit as well as uploading files to Cloudinary.",
    link: "https://tbowntjournalapp.netlify.app/",
    repository:
      "https://github.com/Tbownt/React-Notes/tree/main/08-JournalApp/journal-app",
    image: JournalApp,
  },
  {
    id: 3,
    title: "CalendarApp",
    description:
      "CalendarApp is an application made in React and Redux based in a basic clone of Google Calendar with authentication made with JWT where you can create and save your own events in a database made with MongoDB, the server is made with Node.js and Express.js and uploaded in Railway",
    link: "https://tbowntcalendarapp.netlify.app/",
    repository:
      "https://github.com/Tbownt/React-Notes/tree/main/10-calendar-front",
    image: CalendarApp,
  },
  {
    id: 4,
    title: "Moonflix",
    description:
      "Moonflix was created with create-react-app, a Trailer app that shows you the video trailer, description, release date and more about any movie or tv show using TMDB API",
    link: "https://tbownt-moonflix.netlify.app",
    repository: "https://github.com/Tbownt/Moonflix",
    image: Moonflix,
  },
  {
    id: 5,
    title: "BuddyONG",
    description:
      "BuddyONG is a fullstack application made with TypeScript for the server and JavaScript in the Frontend, also with state management with traditional Redux as well as ORMs like Sequelize, PostgreSQL database, geolocation, file upload, authentication with Auth0 and more! dedicated to help homeless pets.",
    link: "https://buddyong.vercel.app/",
    repository: "https://github.com/Tbownt/Front-Animals",
    image: BuddyONG,
  },
  {
    id: 6,
    title: "Moonflix React Native Version",
    description:
      "This is a recreation of my previous project Moonflix but this time for Mobile, the design was made with TailwindCSS aswell as other dependencies like axios, React-Native-Heroicons, screens and many more!",
    repository: "https://github.com/Tbownt/Moonflix-ReactNative",
    image: MoonflixRN,
  },
];

export default portfolios;
