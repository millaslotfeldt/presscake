
function getImageClass(i) {
    if (i % 2 > 0) {
        return "right";
    }
    else return "left";
}

const Images = (props) => {

    let title = "Images";

    if (props.project == true) {
        title = "Screenshots & Gifs";
    }

    let images = props.images.map((image, index) =>
        
        <a href={'/data/' + image}>
            <img 
                className={getImageClass(index)}
                src={'/data/' + image}
                alt=""
                id={index}
            />
        </a>
    );

    return (
        <div className="images" id="images">
            <h2 className="text-light">{title}</h2>
            <hr></hr>
            {images}
        </div>
    );
};


export default Images;