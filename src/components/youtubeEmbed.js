

const YoutubeEmbed = (props) => {

  console.log(props.youtubeId);
    
    return (
      <div
        className="video"
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          src={`https://www.youtube.com/embed/${props.youtubeId}`}
          frameBorder="0"
        />
      </div>
    );

  };

export default YoutubeEmbed; 