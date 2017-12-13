var VideoListEntry = (prop) => (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      {/* pull the thumbnail url from video object passed from VideoList */}
      <img className="media-object" src={prop.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      {/* pull video title from video object passed from VideoList */}
      {/* create an onClick event handler on the video title that calls the App's select method passed down through VideoList */}
      {/* must place method within an anonymous function to prevent method from automatically running */}
      <div className="video-list-entry-title" onClick={() => prop.select(prop.video)}>{prop.video.snippet.title}</div>
      {/* pull video description from video object passed from VideoList */}
      <div className="video-list-entry-detail">{prop.video.snippet.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
