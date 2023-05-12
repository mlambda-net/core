import React from "react";
import PropTypes from 'prop-types';
import LocalizedStrings from 'react-localization';
import withUtils from '@mlambda-net/core/utils/withUtils';
import { Tween, ScrollTrigger } from 'react-gsap';




const language = new LocalizedStrings({
  en: {},
  es: {},
});

const styles = (theme) => {
  return {

    container: {
      height: '1024px',
      width: '100%',
      overflow: 'hidden',
    },

    panel: {
      height: '100%',
      width: '100%',
      //position: 'absolute',
    }
  };
};

class Wipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }
  
  render() {

    return (
      <ScrollTrigger start="-200px center" end="200px center" scrub={0.5} markers >

        <Tween
          to={{
            x: '300px',
          }}
        >
          <div style={{ width: '100px', height: '100px', background: '#ccc' }} />
        </Tween>
        <Tween
          to={{
            x: '300px',
          }}
        >
          <div style={{ width: '100px', height: '100px', background: '#999' }} />
        </Tween>
      </ScrollTrigger>
    );
  }
}

Wipes.protoTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  lang: PropTypes.string,
};

export default withUtils(styles)(Wipes);
