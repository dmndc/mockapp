import React, { Component } from 'react';
import styled from 'styled-components';

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 50px;
`;

const ModalWindow = styled.div`
  background-color: #fff;
  border-radius: 5px;
  max-width: 70%;
  min-height: 300px;
  margin: 0 auto;
  padding: 30px;
  display: flex;
`;

const Image = styled.img`
  height: 500px;
  margin: 2rem 4rem;
`;

class Modal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    const { name, description, image_url, ibu, abv } = this.props;

    return (
      <BackDrop>
        <ModalWindow>
          <div>
            <Image src={image_url} alt={name} />
          </div>
          <div>
            <h1>{name}</h1>
            <h3>IBU: {ibu}</h3>
            <h3>ABV: {abv}</h3>
            <p>{description}</p>
            <button>Add To Crate</button>
          </div>
        </ModalWindow>
      </BackDrop>
    );
  }
}

export default Modal;
