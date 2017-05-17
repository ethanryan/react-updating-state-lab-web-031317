import React from 'react' // import react
//import ReactDOM from 'react-dom' // import react

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }

    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
  }

  handleClick1() {
    //var timesClicked = this.state.timesClicked
    this.setState({
      //bitrate: this.state.settings.bitrate+4,

      errors: [],
      user: null,
      settings: {
        bitrate: 12,
        video: {
          resolution: '1080p'
        }
      }
    });
    console.log('this.state.settings.bitrate = ', this.state.settings.bitrate)
    //console.log('this.state.setting.video.resolution = ', this.state.setting.video.resolution)
  }

  handleClick2() {
    //var timesClicked = this.state.timesClicked
    this.setState({
      //bitrate: this.state.settings.bitrate+4,

      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '720p'
        }
      }
    });
    console.log('this.state.settings.bitrate = ', this.state.settings.bitrate)
    //console.log('this.state.setting.video.resolution = ', this.state.setting.video.resolution)
  }

  render() {
    return (
      <div>
        <p>here are some buttons:</p>
        <button className="bitrate" onClick={this.handleClick1}>bitrate button</button>
        <button className="resolution" onClick={this.handleClick2}>resolution button</button>
      </div>
    );
  }
}

export default YouTubeDebugger
