class App extends React.Component {
  constructor(props) {
    super(props);
    //declare state variables for react to watch for changes
    //when a state is changed, rerender happens
    this.state = {
      //videos stores an array of YouTube video objects
      videos: window.exampleVideoData,
      //selected stores the selected YouTube video object
      selected: window.exampleVideoData[0]
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            {/* create a search view */}
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/* create a video player, pass in the video selected from state */}
            <VideoPlayer video={this.state.selected}/>
          </div>
          <div className="col-md-5">
            {/* create a video list, pass in the list of videos from state */}
            {/* and also pass in a callback function to handle mouseclicks in list entries */}
            {/* for callback function, es6 arrow function or bind required to keep App lexical scope */}
            <VideoList videos={this.state.videos} select={(video) => this.select(video)} />
          </div>
        </div>
      </div>
    );
  }

  select(video) {
    //change video in state using the video passed in
    //when selected video is changed in state App will automatically rerender
    this.setState({
      selected:video
    });
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
