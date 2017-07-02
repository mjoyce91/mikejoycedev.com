import React, { Component } from 'react';
import Badge from '../../Components/Badge/Badge';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
  }

  render() {
    return (
      <div id="main-content" className="home">
        <Header props={this.props} />
        <div style={{ padding: '0px 10px 0px 10px' }}>
          <h1>Mike Joyce - Web Developer</h1>
        </div>
        <br />
        <div className="usa-row">
          <div className="usa-row" style={{ paddingLeft: '8%', paddingRight: '8%' }}>
            <p style={{ textAlign: 'center', verticalAlign: 'middle', display: 'table-cell' }}>
              I&apos;m a web developer currently working at
              Booz Allen Hamilton in Washington, D.C.
              My work has been in front-end technologies
              like AngularJS, React, Highcharts and Leaflet, back-end frameworks like Node.js,
              Express and PHP, and databases like MySQL and MongoDB.
              Certified AWS Solutions Architect - Associate. View all the tools I like
              working with <a href="https://stackshare.io/mjoyce91/mystack">here</a>.
            </p>
          </div>
        </div>
        <br /><br /><br />
        <div className="logos">
          <div className="usa-row">
            <div className="usa-width-one-half">
              <Badge image="github" title="Github" url="https://github.com/mjoyce91" />
              <br />
            </div>
            <div className="usa-width-one-half">
              <Badge image="linkedin" title="LinkedIn" url="https://www.linkedin.com/in/mike-joyce-1a7bb162" />
              <br />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
