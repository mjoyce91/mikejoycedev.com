import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import MapComponent from '../../Components/MapComponent/MapComponent';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [
        { name: 'Taco Bamba', coords: [38.902006, -77.205493], description: 'tacos!' },
        { name: 'Micro Center', coords: [38.869030, -77.261786], description: 'geek out' },
        { name: '&pizza', coords: [38.902335, -77.032566], description: 'nom' },
        { name: 'WWII Memorial', coords: [38.889099, -77.040634], description: 'favorite memorial' },
        { name: 'Space Bar', coords: [38.887460, -77.179891], description: 'grilled cheeeeese' },
        { name: 'Silverado', coords: [38.833742, -77.189219], description: 'ozzie rolls' },
        { name: 'Declieu', coords: [38.845711, -77.305245], description: 'coffee' },
        { name: 'Mosaic District', coords: [38.872742, -77.229676], description: 'everything' },
      ],
    };
  }

  componentWillMount() {
  }

  render() {
    const { places } = this.state;
    const placeNames = places.map(place => (
      <div key={place.name} style={{ minHeight: '24px', maxWidth: '300px', backgroundColor: '#D3D3D3', marginBottom: '5px', padding: '5px' }}><span>{place.name}</span><br /></div>
    ));
    return (
      <div>
        <div id="main-content" className="about" style={{ paddingBottom: '400px' }}>
          <Header props={this.props} />
          <div style={{ padding: '0px 10px 0px 10px' }}>
            <h1>About Mike</h1>
          </div>
          <div className="usa-row" style={{ paddingLeft: '8%', paddingRight: '8%' }}>
            <div className="usa-row">
              <p style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                Here are some of my favorite places in DC and Northern Virginia!
                <br /><br />
                I&apos;ve stored these in DynamoDB and exposed
                them using Amazon API Gateway and Lambda.
                When you vote for your favorite, you&apos;re
                sending a request to Lambda to increment the object on the database.
              </p>
            </div>
          </div>
          <br /><br />
          <div className="usa-row" style={{ padding: '0 0px 0px 0' }}>
            <center className="usa-width-one-third" style={{ padding: '0 0px 0px 0px' }}>
              {placeNames}
            </center>
            <div className="usa-width-two-thirds">
              <center style={{ padding: '0 5px 0 5px' }}>
                <MapComponent markers={places} />
              </center>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
