import React, { Component } from 'react';
import styled from 'styled-components';

import Modal from './../Modal/Modal';

const Box = styled.div`
  border: 2px solid grey;
  padding: 1rem;
  display: flex;
  margin: 1rem;
  border-radius: 5px;
  width: 20%;
`;

const Image = styled.img`
  height: 100px;
  margin: 1rem 2rem;
`;

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    const { name, image_url, ibu, abv } = this.props;

    return (
      <Box onClick={this.toggleModal}>
        <div>
          <Image src={image_url} alt={name} />
        </div>
        <div>
          <h4>{name}</h4>
          <h5>IBU: {ibu}</h5>
          <h5>ABV: {abv}</h5>
        </div>
        <Modal {...this.props} show={this.state.showModal} />
      </Box>
    );
  }
}

// const Card = ({ name, image_url, ibu, abv }) => (
//   <Box>
//     <div>
//       <Image src={image_url} alt={name} />
//     </div>
//     <div>
//       <h4>{name}</h4>
//       <h5>IBU: {ibu}</h5>
//       <h5>ABV: {abv}</h5>
//     </div>
//     <Modal show={true}>DINAMO ZAGREB</Modal>
//   </Box>
// );

export default Card;
