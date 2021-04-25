

const Contact = (props) => {

    let contacts = props.contact.map((contact, index) =>
        <div className="member">
                <h4 className="text-light">
                    {contact.title}
                </h4>
            <p className="text-light">
                <a href={contact.url}>
                    {contact.description}
                </a>
            </p>
        </div>
    );

    return (
        <div id="contact">
            <h2 className="text-light">Contact</h2>
            <hr></hr>
            <div className="links-list">
                {contacts}
            </div>
        </div>
    );
};


export default Contact;