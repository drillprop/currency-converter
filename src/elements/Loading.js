import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Spinner = styled.div`
  position: absolute;
  top: 40%;
  left: calc(50% - 35px);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border-top: 10px solid white;
  border-right: 10px solid white;
  border-bottom: 10px solid white;
  border-left: 10px solid #333;
  animation: load8 1.1s infinite linear;

  @keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = (props) => (props.inline ? <div>Loading...</div> : <Spinner />);

Loading.propTypes = {
  inline: PropTypes.bool,
};

export default Loading;
