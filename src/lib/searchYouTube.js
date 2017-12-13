var searchYouTube = (options, callback) => {
  //use jquery get to list of youtube videos
  //when call is sucessful, call the callback, passing only the items array of videos to the callback
  $.get('https://www.googleapis.com/youtube/v3/search',
    {key: window.YOUTUBE_API_KEY, q: options.query, part: 'snippet', maxResults: 5},
    data => callback(data.items));
};

window.searchYouTube = searchYouTube;
