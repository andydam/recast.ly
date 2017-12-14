var Search = (props) => (
  <div className="search-bar form-inline">
    {/* get value for search box from App via props */}
    {/* set event handlers from App for search box value change and key press */}
    <input className="form-control" type="text" value={props.searchValue} onChange={event => props.onType(event)} onKeyPress={event => props.onEnter(event)}/>
    {/* on search button click, search with search box value */}
    <button className="btn hidden-sm-down" onClick={() => props.search()}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
