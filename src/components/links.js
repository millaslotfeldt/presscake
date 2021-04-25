import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';


const Links = (props) => {

    
    if (props.links == null) {
        return null; 
    }

    let links = props.links.map((link, index) =>
        <div className="link">
                <h4 className="text-light">
                    <FontAwesomeIcon icon={faLink} /> &nbsp;
                    <a href={link.url} target="_blank">
                        {link.title}
                    </a>
                </h4>
            <p className="text-light">
                {link.description}
            </p>
        </div>
    );

    return (
        <div id="links">
            <h2 className="text-light">Links</h2>
            <hr></hr>
            <div className="links-list">
                {links}
            </div>
        </div>
    );
};


export default Links;