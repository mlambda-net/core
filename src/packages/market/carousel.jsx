import {
  BottomNavigation,
  BottomNavigationAction,
  CardMedia,
} from '@material-ui/core';
import BackIcon from '@material-ui/icons/ArrowBack';
import ForwardIcon from '@material-ui/icons/ArrowForward';
import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = (theme) => ({
  root: {
    width: '100%',
  },
});

class Carousel extends React.Component {
  static defaultProps = {
    images: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = { maxIndex: 1, index: 0 };
    this.nextImage = this.nextImage.bind(this);
    this.backImage = this.backImage.bind(this);
  }

  componentDidMount() {
    this.setState({ maxIndex: this.props.images.length });
  }

  nextImage() {
    this.setState({ index: (this.state.index + 1) % this.state.maxIndex });
  }

  backImage() {
    let i = this.state.index - 1;
    this.setState({ index: i < 0 ? this.state.maxIndex - 1 : i });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CardMedia
          component="img"
          image={this.props.images[this.state.index]}
          title="Audifonos"
        />
        <BottomNavigation>
          <BottomNavigationAction
            label="Back"
            value="back"
            color="primary"
            onClick={this.backImage}
            icon={<BackIcon />}
          />
          <BottomNavigationAction
            label="Forward"
            value="forward"
            color="primary"
            onClick={this.nextImage}
            icon={<ForwardIcon />}
          />
        </BottomNavigation>
      </div>
    );
  }
}

export default withStyles(styles)(withTheme(Carousel));
