

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import {Link} from "react-router-dom";

const Projects = (props) => {
    
    const dataFolderPath = process.env.PUBLIC_URL + '/data/';

    let projects = props.projects.map((project, index) =>
        <div className="project-thumb">
            <Link to={"/" + project.id}>
                <img src={dataFolderPath + '/projects/' + project.id + '/img/' + project.thumbnail} />
                <p style={{ color: `${props.accentColor}` }}>{project.name}</p>
            </Link>
        </div>
    );


    return (
        <div id="projects" class="projects">
            <h2 className="text-light">Projects</h2>
            <hr />
            <div class="projects-list text-light">
                {projects}
            </div>
            
        </div>
    );
};


export default Projects;