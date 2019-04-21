import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {USER_NAME, USER_CONTACT, USER_EMAIL} from '../../constants.js';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="inner_footer">
          <div className="footer_container">
            <p>{USER_NAME}. {USER_CONTACT}. {USER_EMAIL}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
