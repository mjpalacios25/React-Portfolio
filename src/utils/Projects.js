import React from "react";
import EmployeeDirPicture from '../assets/images/EmployeeDirectory.png';
import HealthTracker from '../assets/images/HealthTracker.png';
import FitnessTracker from '../assets/images/FitnessTracker.png';
import WeatherDash from '../assets/images/WeatherDash.png';
import BudgetTracker from '../assets/images/BudgetTracker.png';

const Projects = [
    {
        title: "Employee Directory",
        description: "Website that allows users to view, add, and update employee information",
        github: "https://github.com/mjpalacios25/Employee-Directory",
        site: "https://safe-temple-96246.siteapp.com/",
        image: EmployeeDirPicture,

    },
    {
        title: "Health Outcomes Website",
        description: "Website that creates health profiles and assesses risk factors based on public use data from the Centers for Disease Control and Prevention",
        github: "https://github.com/Aglasener/CDC_Website",
        site: "https://intense-fortress-61709.siteapp.com",
        image: HealthTracker,
    },
    {
        title: "Fitness Tracker",
        description: "This is a website that allows users to track their workouts, exercises, and reps saving information into a Mongo database.",
        github: "https://github.com/mjpalacios25/Fitness-Tracker",
        site: "https://shrouded-stream-05616.siteapp.com/",
        image: FitnessTracker,
    },
    {
        title: "Weather Dashboard",
        description: "This website allows users to search the current weather and 5 day forecast for cities anywhere in the world. The website saves each search locally and displays it on the screen so that users can easily go back to previous searches.",
        github: "https://github.com/mjpalacios25/WeatherDash",
        site: "https://mjpalacios25.github.io/WeatherDash/",
        image: WeatherDash,
    },
    {
        title: "Budget Tracker",
        description: "This is a progressive web application (PWA) that tracks the user's expenses and displays the expenses in a graph. When offline, the user can still enter expenses that will be uploaded to the database.",
        github: "https://github.com/mjpalacios25/Budget-Tracker ",
        site: " https://strawberry-sundae-77416.herokuapp.com/",
        image: BudgetTracker,
    }
];

export default Projects;
