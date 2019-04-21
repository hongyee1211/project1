import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {HEADER_TEXT} from '../../constants.js';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="inner_header">
          <div className="logo_container">
            <h1>{HEADER_TEXT}</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
