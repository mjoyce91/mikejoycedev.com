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
        This site is built in React. View the code <a href="https://github.com/mjoyce91/mikejoycedev.com">here</a>.
      </div>
    );
  }
}

export default Footer;
