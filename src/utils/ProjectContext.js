import React from "react";
const ProjectContext = React.createContext(
    {
        title: "",
        description: "",
        github: "",
        heroku: "",
        image: {},

    }
);

export default ProjectContext;
