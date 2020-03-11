import axios from 'axios';

const KEY = 'AIzaSyAntz9BI-U2I-sTopVgYW2XFh_rETvGyOo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
