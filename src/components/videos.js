import YoutubeEmbed from './youtubeEmbed';

const Videos = (props) => {

    let videos = props.videos.map((video, index) =>
        <div className="video">
            
            <YoutubeEmbed youtubeId={video.youtubeId} />
            <a href={video.url}>
                <h5>{video.title}</h5>
            </a>

        </div>
    );

    return (
        <div id="videos" class="videos">
            <h2 className="text-light">Videos</h2>
            <hr></hr>
            {videos}
        </div>
    );
};


export default Videos;