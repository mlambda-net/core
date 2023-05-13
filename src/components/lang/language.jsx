import React from 'react';
import { LanguageContext } from '@mlambda-net/web-core/lang/context';

let withLanguage = (Component) => {
  return (props) => (
    <LanguageContext.Consumer>
      {(value) => <Component lang={value} {...props} />}
    </LanguageContext.Consumer>
  );
};

export default withLanguage;
