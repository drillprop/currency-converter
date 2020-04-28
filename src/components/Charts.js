import React, { Component } from 'react';
import Layout from '../elements/Layout';
import Loading from '../elements/Loading';
import Select from '../elements/Select';
import { SubTitle, Title } from '../elements/Titles';
import { getPastDates, getTodayDate } from '../utilities/helpers';
import Chart from './Chart';
import ChartError from './ChartError';

class Charts extends Component {
  _isMounted = false;
  state = { dates: [], error: false, currency: 'usd' };

  componentDidMount = () => {
    this._isMounted = true;
    this.fetchRates();
  };
  componentDidUpdate = (prevProps, prevState) => {
    const { currency } = this.state;
    if (prevState.currency !== currency) {
      this.fetchRates();
    }
  };

  componentWillUnmount = () => {
    this._isMounted = false;
    clearTimeout(this.timeOut);
  };

  getCurrency = ({ currentTarget }) => {
    this.setState({ currency: currentTarget.value });
  };

  timeOut = (arg) => {
    setTimeout(() => arg.abort(), 10000);
  };

  fetchRates = () => {
    const { currency } = this.state;
    const startDate = getPastDates(350);
    const endDate = getTodayDate();
    const url = `https://cors-anywhere.herokuapp.com/http://api.nbp.pl/api/exchangerates/rates/a/${currency}/${startDate}/${endDate}/`;
    const controller = new AbortController();
    const signal = controller.signal;
    // if pending takes 10 seconds, abort fetching
    if (this._isMounted) {
      this.timeOut(controller);
    }
    fetch(url, { signal })
      .then((data) => data.json())
      .then((json) => {
        if (this._isMounted) {
          this.setState({ dates: json.rates });
        }
      })
      .catch((error) => this.setState({ error }));
  };

  render() {
    const { dates, error, currency } = this.state;
    const currencyArray = ['usd', 'eur'];
    if (error) {
      return <ChartError />;
    } else if (!dates.length) {
      return <Loading />;
    } else {
      return (
        <Layout currency='chart'>
          <Title>
            Currency Exchange Rates
            <br />
            Chart
          </Title>
          <SubTitle>
            <Select
              defaultValue={currency}
              getCurrency={this.getCurrency}
              currencyArray={currencyArray}
            />
            to PLN (last 360 days)
          </SubTitle>
          <Chart dates={dates} />
        </Layout>
      );
    }
  }
}

export default Charts;
