
function getImageClass(i) {
    if (i % 2 > 0) {
        return "right";
    }
    else return "left";
}

const Images = (props) => {

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
            <h3>Images</h3>
            {images}
        </div>
    );
};


export default Images;