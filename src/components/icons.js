function getImageClass(i) {
    if (i % 2 > 0) {
        return "right";
    }
    else return "left";
}

const Icons = (props) => {

    
    if (props.icons == null) {
        return null; 
    }

    let icons = props.icons.map((icon, index) =>
        
        <a href={'/data/' + icon}>
            <img 
                className={getImageClass(index)}
                src={'/data/' + icon}
                alt=""
                id={icon}
            />
        </a>
    );

    return (
        <div id="icons" className="icons">
            <h2 className="text-light">Logos & Icons</h2>
            <hr></hr>
            {icons}
        </div>
    );
};


export default Icons;