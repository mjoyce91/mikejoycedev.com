import React, { Component } from 'react';
import Badge from '../../Components/Badge/Badge';
import Footer from '../../Components/Footer/Footer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    const script = document.createElement('script');

    script.src = 'https://cdn1.stackshare.io/javascripts/client-code.js';
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <div id="main-content" className="home">
        <h1>Mike Joyce - Web Developer</h1>
        <div className="usa-row">
          <div className="usa-row" style={{ paddingLeft: '8%', paddingRight: '8%' }}>
            <p style={{ textAlign: 'center', verticalAlign: 'middle', display: 'table-cell' }}>
              I&apos;m a web developer currently working at
              Booz Allen Hamilton in Washington, D.C.
              My work has been in front-end technologies
              like AngularJS, React, Highcharts and Leaflet, back-end frameworks like Node.js,
              Express and PHP, and databases like MySQL and MongoDB.
              Certified AWS Solutions Architect - Associate.
            </p>
          </div>
        </div>
        <br /><br />
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
        <br /> <br /> <br />
        <Footer />
      </div>
    );
  }
}

export default Home;
