import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Badge extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="Badge">
        <a href={this.props.url} >
          <img src={`/assets/img/${this.props.image}.jpg`} style={{ width: '80px' }} alt="badge" />
        </a>
        <div style={{ paddingTop: '11px' }}>
          {this.props.title}
        </div>
      </div>
    );
  }
}

Badge.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Badge;
