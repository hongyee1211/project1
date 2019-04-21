import React, { Component } from 'react';
import './App.js';
import s from './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Profile from './components/Profile/profile';
import {USER_LINKIN} from './constants.js';

class App extends Component {
  render() {
    return (
      <section>
        <Header/>
        <Profile/>
        <a href={USER_LINKIN} target="_blank"><Footer/></a>
      </section>

    );
  }
}
export default App;
