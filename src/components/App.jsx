class App extends React.Component {
  constructor(props) {
    super(props);
    //declare state variables for react to watch for changes
    //when a state is changed, rerender happens
    this.state = {
      //videos stores an array of YouTube video objects
      videos: [],
      //selected stores the selected YouTube video object
      selected: { id: {videoId: ''}, snippet: {title: '', description: '', thumbnails: {default: {url: ''}}}},
      // holds value of search input
      searchValue: ''
    };
  }

  componentDidMount() {
    //invoked when App component is mounted (sucessfully loaded onto DOM)
    //search for 'react' on youtube to get initial list of videos
    this.search('reactjs');
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            {/* create a search view */}
            {/* pass in callback function to process search */}
            {/* for callback function, es6 arrow function or bind required to keep App scope */}
            <Search search={query => this.search(query)} searchValue={this.state.searchValue} onType={event => this.searchBoxType(event)} onEnter={event => this.enterHandler(event)}/>
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
            {/* for callback function, es6 arrow function or bind required to keep App scope */}
            <VideoList videos={this.state.videos} select={video => this.select(video)}/>
          </div>
        </div>
      </div>
    );
  }

  select(video) {
    //change video in state using the video passed in
    //when selected video is changed in state App will automatically rerender
    this.setState({
      selected: video
    });
  }

  search(query = this.state.searchValue) {
    //call searchYouTube passing in a query and a callback
    //if no query passed, get query from search input field
    //callback must be in an ES6 arrow function to keep App scope
    searchYouTube({query}, data => this.completeSearch(data));
  }

  completeSearch(videos) {
    //callback for when search data is recieved
    //set videos and selected in state to new data
    //App will automatically rerender the new data
    this.setState({
      videos: videos,
      selected: videos[0]
    });
  }

  searchBoxType(event) {
    //event handler for search box value changes
    this.setState({
      //set searchValue in state to new search box value
      //updating searchValue will cause the search box to rerender with value changes
      searchValue: event.target.value
    })
  }

  enterHandler(event) {
    //event handler for key presses
    //check what key was pressed
    if (event.key === 'Enter') {
      //if the enter key was pressed, initiate a search
      this.search();
    } else {
      //clear existing search timer if set
      clearInterval(this.searchTimer);
      //set a timer to initiate at search in 500ms
      this.searchTimer = setTimeout(() => this.search(), 500);
    }
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
