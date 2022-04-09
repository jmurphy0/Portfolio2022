import PantherImg from "../imgs/main-room.JPG";
import EmpImg from "../imgs/directory.png";
import Budget from "../imgs/budget.png";
import Workout from "../imgs/stats.png";
import Note from "../imgs/notTaker.png";
import Art from "../imgs/p1pic1.png";
import Weather from "../imgs/weatherDash.png";
import Planner from "../imgs/plannerPic.png";

const Projectdata = [
  {
    title: "Panther Chat",
    description:
      "A full-stack web application for chatting with friends or meeting new people!",
    img: PantherImg,
    liveLink: "https://panther-chatroom.herokuapp.com/",
    githubLink: "https://github.com/PurplePanthers/PantherChatroom.git",
  },
  {
    title: "Employee Directory",
    description:
      "A react project using React Bootstrap Datatables exploring sorting and searching from API data.",
    img: EmpImg,
    liveLink: "https://jmurphy0.github.io/employeedirectory/",
    githubLink: "https://github.com/jmurphy0/gooddirectory.git",
  },
  {
    title: "Budget Tracker",
    description:
      "Keeps track of your money, regadless of your internet connection using index db. Deployed on Heroku.",
    img: Budget,
    liveLink: "https://murphybudget.herokuapp.com/",
    githubLink: "https://github.com/jmurphy0/budgetTracker.git",
  },
  {
    title: "Fitness Dahboard",
    description:
      "This app is designed to keep track of your workouts (stored to mongoatlas) and allows your to view results of total duration and weight lifted. Deployed on heroku.",
    img: Workout,
    liveLink:
      "https://murphyworkout.herokuapp.com/exercise?id=6052776c2b9b1a00159ae570",
    githubLink: "https://github.com/jmurphy0/workoutTracker.git",
  },
  {
    title: "Note Taker",
    description:
      "A simple app to takes notes online. Deployed by heroku and ready to keep you organized!",
    img: Note,
    liveLink: "https://github.com/jmurphy0/hmwk10-NoteTaker.git",
    githubLink: "https://github.com/jmurphy0/hmwk10-NoteTaker.git",
  },
  {
    title: "Art Mapper",
    description:
      "An app that allows the user to search the Harvard Art Museum paintings and save favorites to local storage. Users can also explore nearby galleries.",
    img: Art,
    liveLink: "https://jmurphy0.github.io/project-1/",
    githubLink: "https://jmurphy0.github.io/project-1/",
  },
  {
    title: "Weather Dashoard",
    description:
      "Weather dashboard displays the current and forcasted weather for the city determined by the userinput. Previus searches will be stored in local storage and apear as buttons for convient access to user.",
    img: Weather,
    liveLink: "https://jmurphy0.github.io/Homework-6/",
    githubLink: "https://jmurphy0.github.io/Homework-6/",
  },
  {
    title: "Workday Planner",
    description:
      "A simple workday scheduling app to keep you productive and on time!",
    img: Planner,
    liveLink: "https://jmurphy0.github.io/homework5/",
    githubLink: "https://jmurphy0.github.io/homework5/",
  },

  // {
  //   title: "",
  //   description: "",
  //   img: "",
  //   liveLink: "",
  //   githubLink: "",
  // },
];
export default Projectdata;
