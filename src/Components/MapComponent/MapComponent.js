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
    const position = [this.state.lat, this.state.lng];
    const markers = this.props.markers.map(marker => (
      <Marker position={marker.coords}>
        <Popup>
          <span> <strong>{marker.name}</strong> <br /> {marker.description} </span>
        </Popup>
      </Marker>
    ));
    return (
      <Map center={position} zoom={this.state.zoom} dragging={false} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
        />
        {markers}
      </Map>
    );
  }
}

MapComponent.propTypes = {
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      coords: PropTypes.array,
      description: PropTypes.string,
    }),
  ),
};

MapComponent.defaultProps = {
  markers: [],
};

export default MapComponent;
