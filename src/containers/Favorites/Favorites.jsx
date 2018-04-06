import React, { Component } from 'react';
import axios from 'axios';

// Import components
import Header from './../../components/Header/Header';
import MainContent from './../../components/MainContent/MainContent';

class Favourites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    console.log(this.state.beers);
  }

  render() {
    return (
      <div>
        <Header title="Favorites" height="40vh" />
        <MainContent>Favorites</MainContent>
      </div>
    );
  }
}

export default Favourites;
