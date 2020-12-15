import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import withThemes from '@mlambda-net/core/utils/withThemes';

const styles = (theme) => ({});

class LeftImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Paper elevation={10} className={this.props.className}>
        <Box p={3}>
          <Grid container spacing={0}>
            <Grid item xs={'auto'} sm={6} height="100%">
              <Box
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center">
                {this.props.img}
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center">
                {this.props.children}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    );
  }
}

LeftImage.protoTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  style: PropTypes.string,
  img: PropTypes.element,
};

export default withThemes(styles)(LeftImage);
