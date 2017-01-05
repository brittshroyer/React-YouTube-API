import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoMain from './components/VideoMain';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      activeVideo: {}
    };
  }

  searchTermChanged(e) {
    const term = e.target.value;
    console.log('Search for: ', term);

    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        q: term,
        type: 'video'
      }
    })
    .then(function(response) {
      console.log('YouTube data: ', response);
      const videos = response.data.items;

      this.setState({
        videos: videos,
        activeVideo: videos[0]
      });
    }.bind(this))
    .catch(function(error) {
      console.log('Error: ', error);
    });
  }

  videoClicked(video) {
    this.setState({
      activeVideo: video
    })
  }

  render() {

    return (
      <div className="container">
        <SearchBar onSearchTermChanged={ this.searchTermChanged.bind(this) } />
        <VideoMain video={ this.state.activeVideo } />
        <VideoList onVideoClicked={ this.videoClicked.bind(this) } videos={ this.state.videos } />
      </div>
    );
  }
}

export default App;
