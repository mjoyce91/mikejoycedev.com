import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
  }

  render() {
    return (
      <div id="main-content" className="about">
        <Header props={this.props} />
        <div style={{ padding: '0px 10px 0px 10px' }}>
          <h1>About Mike</h1>
        </div>
        <br />
        <div className="usa-row">
          <div className="usa-row" style={{ paddingLeft: '8%', paddingRight: '8%' }}>
            <p style={{ textAlign: 'center', verticalAlign: 'middle' }}>
              Coming soon...
            </p>
          </div>
        </div>
        <br /><br /><br />
        <Footer />
      </div>
    );
  }
}

export default About;
