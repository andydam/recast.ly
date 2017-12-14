var VideoCommList = (props) => (
  <div className="video-player">
    {/* iterate through comments passed into list and create VideoCommListEntrys for each one */}
    {props.comments.map(comment =>
      <VideoCommEntry comment={comment} key={comment.id}/>
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoCommList.propTypes = {
  comments: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoCommList = VideoCommList;
