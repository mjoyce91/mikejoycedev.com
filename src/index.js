import React from 'react';
import ReactDOM from 'react-dom';
import './sass/styles.scss';
import App from './Components/App/App';

require('../node_modules/uswds/dist/js/uswds.min.js');
require('../node_modules/leaflet/dist/leaflet.js');

ReactDOM.render((
  <App />
), document.getElementById('root') || document.createElement('div'));
