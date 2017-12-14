var searchYouTube = (options, callback) => {
  //set default options if none were passed
  options.key = options.key || window.YOUTUBE_API_KEY;
  options.query = options.query || 'cats';
  options.max = options.max || 5;

  //use jquery get to list of youtube videos
  //when call is sucessful, call the callback, passing only the items array of videos to the callback
  $.get('https://www.googleapis.com/youtube/v3/search',
    {
      key: options.key,
      q: options.query,
      part: 'snippet',
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: 'true'
    },
    data => callback(data.items));
};

var getComments = (options, callback) => {
  //set default options if none were passed
  options.key = options.key || window.YOUTUBE_API_KEY;

  //use jquery get to list of youtube videos
  //when call is sucessful, call the callback, passing only the items array of videos to the callback
  $.get('https://www.googleapis.com/youtube/v3/commentThreads',
    {
      key: options.key,
      videoId: options.videoId,
      part: 'snippet'
    },
    data => callback(data.items));
};

window.searchYouTube = searchYouTube;
