import Button from "react-bootstrap/Button";
import Navbar from 'react-bootstrap/Navbar'

import { propTypes } from "react-bootstrap/esm/Image";
import { HashLink } from 'react-router-hash-link';

const ProjectsMenu = (props) => {

    return (
        <Navbar collapseOnSelect expand="xl" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <ul className="menu nav flex-column navigation">
                    <li>
                        <HashLink to="#factsheet">
                            <Button variant="secondary">FactSheet</Button>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to="#about">
                            <Button variant="secondary">About</Button>
                        </HashLink>
                    </li>          

                    <li>
                        <HashLink to="#videos">
                            <Button variant="secondary">Videos</Button>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to="#images">  
                            <Button variant="secondary">Screenshots & Gifs</Button>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to="#icons">
                            <Button variant="secondary">Logo & Icons</Button>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to="#awards">
                            <Button variant="secondary">Awards & Recognition</Button>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to="#articles">
                            <Button variant="secondary">Selected Articles</Button>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to="#links">
                            <Button variant="secondary">Additional Links</Button>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to="#team">
                            <Button variant="secondary">Team</Button>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to="#contact">
                            <Button variant="secondary">Contact</Button>
                        </HashLink>
                    </li>
                </ul>
            
            </Navbar.Collapse>
        </Navbar>
    );
};


export default ProjectsMenu;