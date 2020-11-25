import React from 'react';
import { LanguageContext } from '@mlambda-net/core/lang/context';

class LangProvider extends React.Component {
  render() {
    return (
      <LanguageContext.Provider value={this.props.lang}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
LangProvider.contextType = LanguageContext;

export default LangProvider;
