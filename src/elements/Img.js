import React from 'react';
import styled from 'styled-components';
import usd from '../assets/usd.jpg';
import eur from '../assets/eur.jpg';
import czk from '../assets/czk.jpg';
import { Transition, animated } from 'react-spring';
import PropTypes from 'prop-types';

const Image = styled(animated.img)`
  display: block;
  margin: 0;
  max-width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const images = [
  style => <Image style={{ ...style }} src={usd} />,
  style => <Image style={{ ...style }} src={eur} />,
  style => <Image style={{ ...style }} src={czk} />
];

export default class Img extends React.PureComponent {
  static propTypes = {
    currency: PropTypes.string
  };

  state = { index: 0 };
  componentDidUpdate = prevProps => {
    const { currency } = this.props;
    if (prevProps.currency !== currency) {
      this.setIndex();
    }
  };

  setIndex = () => {
    const { currency } = this.props;
    switch (currency) {
      case 'usd':
        this.setState({ index: 0 });
        break;
      case 'eur':
        this.setState({ index: 1 });
        break;
      case 'czk':
        this.setState({ index: 2 });
        break;
    }
  };
  render() {
    return (
      <Transition
        native
        items={this.state.index}
        from={{ position: 'relative', opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ display: 'none', opacity: 0 }}>
        {index => images[index]}
      </Transition>
    );
  }
}
