import React, { Component } from 'react';

class VideoListItem extends Component{
  handleClick(){

  }
  render(){
    const snippet = this.props.videoItem.snippet;

    return(
      <li className="list-group-item" onClick={ this.props.onVideoClicked.bind(null, this.props.videoItem) }>
        <div className="video-list media">
          <div className="media-left"><img className="media-object" alt="" src={ snippet.thumbnails.default.url }  /></div>
        </div>
        <div className="media-body">
          <div className="media-heading">{ snippet.title }</div>
        </div>
      </li>
    );
  }
}

export default VideoListItem;
