const Factsheet = (props) => {

    return (
        <div id="factsheet" className="factsheet">
            <h3>Factsheet</h3>

            <h6>Developer</h6>
            <p>
                <a href={props.factsheet.website} rel="noreferrer" target="_blank">
                    {props.factsheet.developer}
                    
                </a>
                <br />
                {props.factsheet.location}
            </p>

            <h6>Founding date</h6>
            <p>{props.factsheet.founded}</p>

            <h6>Website</h6>
            <p>{props.factsheet.website}</p>

            <h6>Contact</h6>
            <p>
                <a href={"mailto:" + props.factsheet.contact} rel="noreferrer" target="_blank">
                    {props.factsheet.contact}
                </a>
            </p>

            <h6>Social Media</h6>
            <p>
                <a href={props.factsheet.twitter} rel="noreferrer" target="_blank">
                    Twitter
                </a>
            </p>
            <p>
                <a href={props.factsheet.facebook} rel="noreferrer" target="_blank">
                    Facebook
                </a>
            </p>
            <p>
                <a href={props.factsheet.instagram} rel="noreferrer" target="_blank">
                    Instagram
                </a>
            </p>

        </div>
    );
};


export default Factsheet;


