import React, { Component } from 'react';
import { Form, Text, Radio, RadioGroup, TextArea, Checkbox } from 'react-form';
import styled from 'styled-components';
import axios from 'axios';

// Import components
import Header from './../../components/Header/Header';
import MainContent from './../../components/MainContent/MainContent';
import BeerList from './../../components/BeerList/BeerList';
import Crate from './../../components/Crate/Crate';

import { Button } from './../../theme/components';

const apiUrl = 'https://api.punkapi.com/v2/beers';

const FormContainer = styled.div`
  margin: 2rem auto;
  border-radius: 10px;
  background-color: white;
  box-shadow: 2px 2px 24px -7px rgba(0, 0, 0, 0.5);
  width: 80%;
  /* min-width: 600px; */
  padding: 10px;
`;

const StyledText = styled(Text)`
  color: red;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.39), 0 -1px 1px #fff, 0 1px 0 #fff;
  width: 15rem;
  height: 40px;
  border-radius: 5px;
  padding-left: 1rem;
  border: 1px solid transparent;
`;

const StyledTextArea = styled(TextArea)`
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.39), 0 -1px 1px #fff, 0 1px 0 #fff;
  width: 100%;
  height: 120px;
  padding: 20px 20px;
  margin: 1rem 1rem;
  border-radius: 5px;
  padding-left: 1rem;
  border: 1px solid transparent;
`;

const StyledRadio = styled(Radio)`
  background-color: red;
  /* height: 80px; */
  border: 1px solid red;
`;

const Label = styled.h4`
  text-transform: uppercase;
`;

const Line = styled.hr`
  border: 0;
  height: 1px;
  background: #d3d3d3;
  margin: 2rem 0 2rem;
`;

class JoinForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formValues: []
    };
  }

  render() {
    return (
      <div>
        <div>
          <h1>Quick, join up before we drink all the beer!</h1>
        </div>
        <FormContainer>
          <Form onSubmit={formValues => this.setState({ formValues })}>
            {formApi => (
              <form onSubmit={formApi.submitForm} id="form2">
                <Label htmlFor="firstName">Personal Information</Label>
                <StyledText field="firstName" id="firstName" placeHolder="Zeljan Batina" />
                <Line />
                <Label htmlFor="firstName">Contact Information</Label>
                <StyledText field="email" id="email" placeholder="Email" />
                <StyledText field="phone" id="phone" placeHolder="Phone number" />
                <Line />
                <Label>RSVP</Label>
                <RadioGroup field="gender">
                  <StyledRadio value="yes" id="yes" />
                  <label htmlFor="yes">I'm coming!</label>
                  <Radio value="maybe" id="maybe" />
                  <label htmlFor="maybe">Maybe?</label>
                  <Radio value="no" id="no" />
                  <label htmlFor="no">Can't make it</label>
                </RadioGroup>

                <StyledTextArea field="message" id="message" placeHolder="Something you'd like to add?" />
                <Line />
                <Checkbox field="notify" id="notify" />
                <label htmlFor="notify">Let me know about future beerups!</label>
                <Checkbox field="remind" id="remind" />
                <label htmlFor="remind">Remind me one day before this beerup!</label>

                <Button type="submit">Join Up</Button>
              </form>
            )}
          </Form>
        </FormContainer>
      </div>
    );
  }
}

export default JoinForm;
