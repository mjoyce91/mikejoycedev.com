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
      <div className="home">
        <div id="main-content">
          <Header props={this.props} />
          <div style={{ padding: '0px 10px 0px 10px' }}>
            <h1>Mike Joyce - Software Engineer</h1>
          </div>
          <br />
          <div className="usa-row">
            <div className="usa-row" style={{ paddingLeft: '8%', paddingRight: '8%' }}>
              <p style={{ textAlign: 'center', verticalAlign: 'middle', display: 'table-cell' }}>
                I&apos;m a Lead Software Engineer at Capital One in McLean, Virginia.
                My work has been in front-end technologies
                like React, React Native and Angular, back-end frameworks like Node.js,
                Golang, and Django, and databases like PostgreSQL, MongoDB and Oracle.
                Certified AWS Solutions Architect - Associate. View all the tools I like
                working with <a href="https://stackshare.io/mjoyce91/mystack">here</a>.
              </p>
            </div>
          </div>
          <br /><br /><br />
          <div className="usa-row clearfix">
            <div className="usa-width-one-whole">
              <img src="/assets/img/profilepicture.jpg" alt="Mike Joyce" width="175px" style={{ borderRadius: '50%' }} />
            </div>
          </div>
          <br />
          <div className="logos">
            <div className="usa-row clearfix">
              <div className="usa-width-one-half">
                <Badge image="github" title="Github" url="https://github.com/mjoyce91" />
                <br />
              </div>
              <div className="usa-width-one-half">
                <Badge image="lin" title="LinkedIn" url="https://www.linkedin.com/in/mike-joyce-1a7bb162" />
                <br />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
