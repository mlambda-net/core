import { withStyles, withTheme } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';

import { CardContent, Typography, Card } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';

import Carousel from './carousel';
import Description from './description';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
});

class Detail extends React.Component {
  static defaultProps = {
    data: PropTypes.object,
    onClick: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={0}>
          <Grid item xs={12} sm={12} md={5}>
            <Carousel
              images={[
                'https://camaradehaedo.com/assets/images/gallery00.jpg',
                'https://camaradehaedo.com/assets/images/gallery01.jpg',
                'https://camaradehaedo.com/assets/images/gallery02.jpg',
                'https://camaradehaedo.com/assets/images/gallery03.jpg',
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Description onClick={this.props.onClick} />
          </Grid>
        </Grid>
      </Card>
    );
  }
}

export default withStyles(styles)(withTheme(Detail));
