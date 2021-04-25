import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {Link} from 'react-router-dom';

const Logo = (props) => {

    const logoText = "";

    return (
        <div class="logo">
            <Container>
                <Row>
                    <Col sm={3}>
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + '/data/' + props.source} />
                            {logoText}
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


export default Logo;


