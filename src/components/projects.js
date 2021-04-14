import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const Projects = (props) => {

    let projects = props.projects.map((project, index) =>
        <li>
            <Link to={"/" + project.id}>
                <Button variant="light">{project.name}</Button>
            </Link>
        </li>
    );

    return (
        <div class="projects">
            <h3>Projects</h3>
            <ul class="projects-list">
                {projects}
            </ul>
        </div>
    );
};


export default Projects;