import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="footer">
        This site is built in React. View the code here.
      </div>
    );
  }
}

export default Footer;
