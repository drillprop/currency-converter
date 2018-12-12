import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  max-height: 100vh;
`;

const Img = ({ img }) => <Image src={img} />;

export default Img;
