import React, { Component } from 'react'
import styled from 'styled-components'

const Video = styled.video`
  width: 300px;
  height: 250px;

`


export class VideoPage extends Component {

  constructor() {
    super()
    this.state = {
      currentVideo: {
        id: '',
        title: '',
      },
      list: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/video')
      .then(r => r.json())
      .then(res => {
        this.setState({
          list: res,
        })
      })
  }

  setVideo(video) {
    this.setState({
      currentVideo: video
    })
  }

  render() {
    return <div className= "VideosContent">

      <h1>{this.state.currentVideo.title}</h1>
      <Video
        id="videoPlayer"
        src={"http://localhost:8080/api/video/" + this.state.currentVideo.id}
        controls autoPlay>
      </Video>
      <ul>
        {
          this.state.list.map(
            video => <li key={video.id} onClick={() => this.setVideo(video)}>
              {video.title}
            </li>
          )
        }
      </ul>
    </div>
  }
}
