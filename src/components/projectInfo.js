import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "./header";
import About from "./about"; 
import Projects from './projects'; 
import Videos from './videos';
import Images from './images';
import Icons from './icons';
import Awards from './awards';
import Articles from './articles';
import Links from './links';
import Team from './team';
import Contact from './contact';
import ProjectFactsheet from './projectFactsheet';



const ProjectInfo = (props) => {

    return (
        <div class="info">
            <Container>
                <Row>
                    <Col sm={3}>
                        <ProjectFactsheet factsheet={props.data.factsheet} /> 
                    </Col>
                    <Col sm={9}>
                        <About content={props.about} />
                    </Col>
                    </Row>
            </Container>
            <Videos videos={props.data.videos} />
            <Images images={props.data.images} project={true} />
            <Icons icons={props.data.icons} />
            <Awards awards={props.data.awards} />
            <Articles articles={props.data.articles} />
            <Links links={props.data.links} />
            {/* <Team team={props.data.team} /> */}
            <Contact contact={props.data.contact} />
        </div>
    );
};


export default ProjectInfo;