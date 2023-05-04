import React from 'react';

import Api from '../../../lib/api';
import { tryP } from 'fluture';

const { createContext, useContext } = React;

const context = createContext(null);

export class MarketProvider extends React.Component {
  getProducts(query) {
    let r = tryP(() => Api.get('/market/product'));
    return r().fork(
      (err) => err,
      ({ data }) => data
    );
  }

  render() {
    const value = {
      getProducts: this.props.getProducts || this.getProducts,
    };

    return (
      <MarketProvider.Provider value={value}>
        {this.props.children}
      </MarketProvider.Provider>
    );
  }
}
