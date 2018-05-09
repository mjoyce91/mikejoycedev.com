import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

class Meta extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="meta">
        <div id="main-content">
          <Header props={this.props} />
          <div style={{ padding: '0px 10px 0px 10px' }}>
            <h1>This site</h1>
          </div>
          <br />
          <div className="usa-row">
            <div className="usa-row" style={{ paddingLeft: '8%', paddingRight: '8%' }}>
              <p style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                Designed using React and U.S. Web Design System. Built with webpack.
                Facebook&#39;s create-react-app was used as a starting point.
                <br /><br />
                Hosted using AWS S3 static web site hosting, Cloudfront and Route 53
                for about 25 cents per month.
                <br /><br />
                Powered by AWS Lambda, API Gateway and DynamoDB.
                <br /><br />
                Continuously deployed using Github and Codeship.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Meta;
