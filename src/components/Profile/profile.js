import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './profile.css';
import axios from 'axios';
import Pagination from "react-js-pagination";
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import {API_PATH} from '../../constants.js'


class Profile extends Component {
  static propTypes = {
      profile: PropTypes.array
  };

  constructor(props) {
      super(props);
      this.state = {
        profileList: [],
        pageNo: 1,
        prevPageNo: 1,
        perPageNo: 0,
        totalCount: 0,
        totalPages: 0
      };
      this.handlePageChange = this.handlePageChange.bind(this);
  };

  componentDidMount() {
    this.loadProfile();
  }

  componentDidUpdate() {
    var {pageNo, prevPageNo} = this.state;
    if (pageNo != prevPageNo) {
      this.loadProfile();
      this.setState({prevPageNo: pageNo});
    }
  }

  onClick = () => {
  var {pageNo, totalPages} = this.state;
  var msg = "";
  if (pageNo == totalPages) msg = "Page No: " + pageNo + ". Already at the last page.";
  else msg = "Page No: " + pageNo;
    toastr.options = {
      positionClass : 'toast-top-right',
      hideDuration: 5,
      timeOut: 3000
    }
    toastr.clear()
    setTimeout(() => toastr.warning(msg), 300)
}

  loadProfile() {
    var {pageNo} = this.state;
    var apiPath = API_PATH + pageNo;
    axios.get(apiPath)
     .then(response => {
       this.onClick();
       this.setState({ profileList: response.data.data, pageNo: response.data.page, perPageNo: response.data.per_page, totalCount: response.data.total, totalPages: response.data.total_pages });
     })
     .catch(function (error) {
       console.log(error);
     })
  }

  renderProfile() {
    var list = [], {profileList} = this.state;
    if (profileList.length > 0) {
      list = profileList.map((profile,i) => {
          return(
            <div className="profile-card" key={i}>
              <div className="profile-image">
                <img src={profile.avatar}/>
              </div>
              <div className="profile-info">
                <h6>{profile.last_name}, {profile.first_name}</h6>
              </div>
            </div>
          );
      });
    }
    return list;
  }

  handlePageChange(pageNo) {
    this.setState({pageNo});
  }

  render() {
    var {pageNo, perPageNo, totalCount, totalPages} = this.state;
    return (
      <div>
        <div className="summary-container">
          <h2 className="total-count">
            <strong>{totalCount}</strong> Profile(s) found
          </h2>
        </div>
        <div className="profile">
          {this.renderProfile()}
        </div>
        <div className="center">
          <Pagination
            activePage={pageNo}
            itemsCountPerPage={perPageNo}
            totalItemsCount={totalCount}
            pageRangeDisplayed={totalPages}
            onChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Profile;
