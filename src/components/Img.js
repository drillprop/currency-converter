import React from 'react';
import styled from 'styled-components';
import usd from '../assets/usd.jpg';
import eur from '../assets/eur.jpg';
import czk from '../assets/czk.jpg';

const Image = styled.img`
  max-height: 100vh;
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
