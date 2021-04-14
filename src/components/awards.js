

const Awards = (props) => {

    let videos = props.awards.map((video, index) =>
        <p>{video.title}</p>
    );

    return (
        <div id="awards">
            <h3>Awards</h3>
            {videos}
        </div>
    );
};


export default Awards;