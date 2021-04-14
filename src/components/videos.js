import YoutubeEmbed from './youtubeEmbed';

const Videos = (props) => {

    let videos = props.videos.map((video, index) =>
        <div className="video">
            <a href={video.url}>
                <h5>{video.title}</h5>
            </a>
            
            <YoutubeEmbed youtubeId={video.youtubeId} />

        </div>
    );

    return (
        <div class="Contact">
            <h3>Videos</h3>
            {videos}
        </div>
    );
};


export default Videos;