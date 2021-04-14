function getImageClass(i) {
    if (i % 2 > 0) {
        return "right";
    }
    else return "left";
}

const Icons = (props) => {

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
            <h3>Logos & Icons</h3>
            {icons}
        </div>
    );
};


export default Icons;