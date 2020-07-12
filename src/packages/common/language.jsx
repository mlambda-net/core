import React from 'react';
import { LanguageContext } from '@mlambda-net/core/common/context';

const withLanguage = (Component) => {
  return (props) => (
    <LanguageContext.Consumer>
      {(value) => <Component lang={value} {...props} />}
    </LanguageContext.Consumer>
  );
};

export default withLanguage;
