import Button from "react-bootstrap/Button";
import { propTypes } from "react-bootstrap/esm/Image";
import { HashLink } from 'react-router-hash-link';

const Menu = (props) => {

    return (
        <ul class="menu">
            <li>
                <HashLink to="#factsheet">
                    <Button variant="light">FactSheet</Button>
                </HashLink>
            </li>
            <li>
                <HashLink to="#about">
                    <Button variant="light">About</Button>
                </HashLink>
            </li>
            {
                props.isProjectSelected ?
                    null
                :             
                    <li>
                        <HashLink to="#projects">
                            <Button variant="light">Projects</Button>
                        </HashLink>
                    </li>
            }
            <li>
                <HashLink to="#videos">
                    <Button variant="light">Videos</Button>
                </HashLink>
            </li>
            <li>
                <HashLink to="#images">  
                    <Button variant="light">Images</Button>
                </HashLink>
            </li>
            <li>
                <HashLink to="#icons">
                    <Button variant="light">Logo & Icons</Button>
                </HashLink>
            </li>
            <li>
                <HashLink to="#awards">
                    <Button variant="light">Awards & Recognition</Button>
                </HashLink>
            </li>
            <li>
                <HashLink to="#articles">
                    <Button variant="light">Selected Articles</Button>
                </HashLink>
            </li>
            <li>
                <HashLink to="#links">
                    <Button variant="light">Additional Links</Button>
                </HashLink>
            </li>
            <li>
                <HashLink to="#team">
                    <Button variant="light">Team</Button>
                </HashLink>
            </li>
            <li>
                <HashLink to="#contact">
                    <Button variant="light">Contact</Button>
                </HashLink>
            </li>
        </ul>
    );
};


export default Menu;