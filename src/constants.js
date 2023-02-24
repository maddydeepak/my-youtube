export const GOOGLE_API_KEY = "AIzaSyDJYaxCq0w2WVOdFwRaf_EMbtQ3xm-QGV0";

export const YOUTUBE_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API_URL =
  "https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=chrome&q=";

export const YOUTUBE_COMMENT_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?key=" +
  GOOGLE_API_KEY +
  "&textFormat=plainText&part=snippet&videoId=";
