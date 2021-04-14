

const Contact = (props) => {

    let contacts = props.contact.map((contact, index) =>
        <p>{contact.title}</p>
    );

    return (
        <div id="contact">
            <h3>Contact</h3>
            {contacts}
        </div>
    );
};


export default Contact;