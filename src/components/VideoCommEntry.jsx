var VideoCommEntry = (props) => (
  <div className="video-player-details media">
    <div className="media-body">
      <b>{props.comment.snippet.topLevelComment.snippet.authorDisplayName}</b>
      <br />
      {props.comment.snippet.topLevelComment.snippet.textOriginal}
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoCommEntry.propTypes = {
  comment: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoCommEntry = VideoCommEntry;
