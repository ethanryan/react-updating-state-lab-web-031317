import React from 'react' // import react
//import ReactDOM from 'react-dom' // import react

class DigitalClicker extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      timesClicked: 0
      //timesClicked: this.props.timesClicked,
      //timesClicked: this.props.timesClicked,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {

    var timesClicked = this.state.timesClicked

    this.setState({
    timesClicked: this.state.timesClicked+1,
    });
    console.log(this.state.timesClicked);
  }

  render() {
    return (
      <div>
        <p>here is the button:</p>
        <p>I have {this.state.timesClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

export default DigitalClicker
