import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "./header";
import Content from "./about"; 
import Projects from './projects'; 
import Videos from './videos';
import Images from './images';
import Icons from './icons';
import Awards from './awards';
import Articles from './articles';
import Links from './links';
import Team from './team';
import Contact from './contact';
import Factsheet from './factsheet';



const StudioInfo = (props) => {

    return (
        <div class="info">
            <Header img={props.data.header} />
            <Container>
                <Row>
                    <Col sm={3}>
                        <Factsheet factsheet={props.data.factsheet} /> }
                    </Col>
                    <Col sm={9}>
                        <Content content={props.about} />
                    </Col>
                    </Row>
            </Container>
            <Projects projects={props.data.projects} />
            <Videos videos={props.data.videos} />
            <Images images={props.data.images} />
            <Icons icons={props.data.icons} />
            <Awards awards={props.data.awards} />
            <Articles articles={props.data.articles} />
            <Links links={props.data.links} />
            <Team team={props.data.team} />
            <Contact contact={props.data.contact} />
        </div>
    );
};


export default StudioInfo;