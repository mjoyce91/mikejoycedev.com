import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import MapComponent from '../../Components/MapComponent/MapComponent';
import Plus from '../../../node_modules/uswds/dist/img/plus.svg';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [
      ],
      alertText: null,
    };
  }

  componentWillMount() {
    // Make a request for a user with a given ID
    this.getPlaces();
  }

  getPlaces() {
    axios.get('https://api.mikejoycedev.com/v1/lambda-dynamo-simple')
      .then((response) => {
        let places = response.data.Items;
        places = places.sort((a, b) => (
          (b.votes) - (a.votes)
        ));
        this.setState({ places });
      })
      .catch(() => {
        // add error if needed
      });
  }

  incrementVote(place) {
    axios.post(`https://api.mikejoycedev.com/v1/lambda-dynamo-simple?place=${encodeURIComponent(place)}`)
      .then((response) => {
        let places = response.data.Items;
        places = places.sort((a, b) => (
          (b.votes) - (a.votes)
        ));
        this.setState({ places });
        this.state.alertText = null;
      })
      .catch((error) => {
        if (error.response.status === 429) {
          this.state.alertText = 'Slow your horses! Wait a bit before voting again.';
        }
        // add error if needed
      });
  }

  isActive(i) {
    const { places } = this.state;
    places[i].active = true;
    this.setState({ places });
  }

  isNotActive(i) {
    const { places } = this.state;
    places[i].active = false;
    this.setState({ places });
  }

  render() {
    const { places } = this.state;
    const placeNames = places.map((place, i) => (
      <div
        key={place.place}
        style={{ minHeight: '24px', maxWidth: '400px', backgroundColor: '#D3D3D3', margin: '0 0 5px 15px', padding: '5px' }}
        onMouseEnter={() => { this.isActive(i); }}
        onMouseLeave={() => { this.isNotActive(i); }}
      >
        <span style={{ fontSize: '0.8em' }}>#{i + 1} - {place.place} - {place.votes < 1000 ? place.votes : '1000+'}</span>
        <span tabIndex="0" role="button" onClick={() => this.incrementVote(place.place)} title={`Vote for ${place.place}`} style={{ paddingLeft: '10px', cursor: 'pointer' }}>
          <img alt="plus" src={Plus} style={{ width: '10px' }} />
        </span>
      </div>
    ));
    const mapData = this.state.places.length ?
    (<div className="usa-row">
      <center className="usa-width-five-twelfths">
        {placeNames}
      </center>
      <div className="usa-width-seven-twelfths">
        <div style={{ padding: '0 5px 0 5px' }}>
          <MapComponent markers={places} />
        </div>
      </div>
    </div>)
    : null;
    return (
      <div className="about">
        <div id="main-content">
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
                sending a request to Lambda. They get
                reordered on the client by total number of votes.
              </p>
            </div>
            <div className="usa-row">
              {this.state.alertText ? <span style={{ color: 'red' }}>{this.state.alertText}</span> : 'Click on the plus to vote'}
            </div>
          </div>
          <br />
          {mapData}
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
