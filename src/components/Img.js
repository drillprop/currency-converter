import React from 'react';
import styled from 'styled-components';
import usd from '../assets/usd.jpg';
import eur from '../assets/eur.jpg';
import czk from '../assets/czk.jpg';

const Image = styled.img`
  height: 100vh;
  max-width: 100%;
  object-fit: cover;
`;

const Img = ({ currency }) => {
  switch (currency) {
    case 'usd':
      return <Image src={usd} />;
    case 'eur':
      return <Image src={eur} />;
    case 'czk':
      return <Image src={czk} />;
  }
};

export default Img;
