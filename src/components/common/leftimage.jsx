import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { withThemes } from '@mlambda-net/web-core/utils';

const styles = () => ({});

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

export default withThemes(styles)(LeftImage);
