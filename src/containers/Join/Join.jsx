import React, { Component } from 'react';
import axios from 'axios';

// Import components
import Header from './../../components/Header/Header';
import MainContent from './../../components/MainContent/MainContent';
import JoinForm from './../JoinForm/JoinForm';

class Join extends Component {
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
        <Header title="Join up!" />
        <MainContent>
          <JoinForm />
        </MainContent>
      </div>
    );
  }
}

export default Join;
