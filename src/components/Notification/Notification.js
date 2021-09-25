import { Component } from 'react';

class Notification extends Component {
  state = {
    visible: true,
  };

  hide = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <div className="notification">
        {this.state.visible && (
          // <p className="notification__message" onClick={this.hide}>
          <p className="notification__message">No feedback given</p>
        )}
      </div>
    );
  }
}

export default Notification;

{
  /*   message = 'No feedback given'; */
}
