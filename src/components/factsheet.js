import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


const Factsheet = (props) => {

    return (
        <div id="factsheet" className="factsheet">
            <h3 className="text-light">Factsheet</h3>

            <h6 className="text-light">Developer</h6>
            <p className="text-light">
                <a href={props.factsheet.website} rel="noreferrer" target="_blank">
                    {props.factsheet.developer}
                    
                </a>
                <br />
                {props.factsheet.location}
            </p>

            <h6 className="text-light">Founding date</h6>
            <p className="text-light">{props.factsheet.founded}</p>

            <h6 className="text-light">Website</h6>
            <p className="text-light">{props.factsheet.website}</p>

            <h6 className="text-light">Contact</h6>
            <p className="text-light">
                <a href={"mailto:" + props.factsheet.contact} rel="noreferrer" target="_blank">
                    {props.factsheet.contact}
                </a>
            </p>

            <h6 className="text-light">Social Media</h6>
            <p>
                <FontAwesomeIcon icon={faTwitter} /> &nbsp;
                <a href={props.factsheet.social.twitter.url} rel="noreferrer" target="_blank">
                    @{props.factsheet.social.twitter.handle}
                </a>
            </p>
            <p>
                <FontAwesomeIcon icon={faFacebook} /> &nbsp;
                <a href={props.factsheet.social.facebook.url} rel="noreferrer" target="_blank">
                    {props.factsheet.social.facebook.handle}
                </a>
            </p>
            <p>
                <FontAwesomeIcon icon={faInstagram} /> &nbsp;
                <a href={props.factsheet.social.instagram.url} rel="noreferrer" target="_blank">
                    @{props.factsheet.social.instagram.handle}
                </a>
            </p>

        </div>
    );
};


export default Factsheet;


