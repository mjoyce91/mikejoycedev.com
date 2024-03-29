import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';
import PropTypes from 'prop-types'; //eslint-disable-line

Leaflet.Icon.Default.imagePath = //eslint-disable-line
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.1.0/images/' //eslint-disable-line

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 38.8661255,
      lng: -77.1803069,
      zoom: 11,
    };
  }

  componentWillMount() {
  }

  render() {
    const markerIcon = (m, i) => {
      const myIcon = {
        iconUrl: '/assets/img/marker-icon-2x.png',
        iconSize: [25, 40],
        iconAnchor: [25, 40],
        popupAnchor: [-12, -36],
        shadowSize: [25, 40],
        shadowAnchor: [25, 40],
      };
      if (m.active) {
        myIcon.iconUrl = '/assets/img/marker-purple.png';
      } else if (i === 0) {
        myIcon.iconUrl = '/assets/img/marker-gold.png';
      }
      return myIcon;
    };
    const position = [this.state.lat, this.state.lng];
    const markers = this.props.markers.map((marker, i) => (
      <Marker
        key={marker.place}
        position={marker.coords}
        icon={Leaflet.icon(markerIcon(marker, i))}
      >
        <Popup onOpen={() => {
          document.querySelector('.leaflet-pane.leaflet-popup-pane').addEventListener('click', (event) => {
            event.preventDefault();
          });
        }
        }
        >
          <span> <strong>{marker.place}</strong> <br /> {marker.description} </span>
        </Popup>
      </Marker>
    ));
    return (
      <Map center={position} zoom={this.state.zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
        />
        {markers}
      </Map>
    );
  }
}

MapComponent.propTypes = {
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      place: PropTypes.string,
      coords: PropTypes.array,
      description: PropTypes.string,
    }),
  ),
};

MapComponent.defaultProps = {
  markers: [],
};

export default MapComponent;
