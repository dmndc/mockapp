import React, { Component } from 'react';
import axios from 'axios';

// Import components
import Header from './../../components/Header/Header';
import MainContent from './../../components/MainContent/MainContent';
import BeerList from './../../components/BeerList/BeerList';
import Crate from './../../components/Crate/Crate';

const apiUrl = 'https://api.punkapi.com/v2/beers';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    axios
      .get(apiUrl)
      // .then(response => response.json())
      // .then(response => console.log(response.data))
      .then(response => this.setState({ beers: response.data }));
    // .then(console.log('Dino'));

    console.log(this.state.beers);
  }

  render() {
    return (
      <div>
        <Header />
        <MainContent>
          <BeerList beers={this.state.beers} />
          <Crate />
        </MainContent>
      </div>
    );
  }
}

export default Home;
