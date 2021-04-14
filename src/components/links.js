

const Links = (props) => {

    let links = props.links.map((link, index) =>
        <p>{link.title}</p>
    );

    return (
        <div id="links">
            <h3>Links</h3>
            {links}
        </div>
    );
};


export default Links;