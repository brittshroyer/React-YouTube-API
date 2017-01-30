import React, { Component } from 'react';

class VideoMain extends Component {
  render(){
    if(!this.props.video.snippet) {
      return <h2>Enter a search term </h2>;
    }
    const snippet = this.props.video.snippet;

    return(
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9"><iframe className="embed-responsive-item" src={ `https://www.youtube.com/embed/${ this.props.video.id.videoId }`}></iframe></div>
        <div className="details">
          <div>{ snippet.title }</div>
          <p>{ snippet.description }</p>
        </div>
      </div>
    );
  }
}

export default VideoMain;
