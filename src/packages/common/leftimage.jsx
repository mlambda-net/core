import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles, withTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import LocalizedStrings from 'react-localization';
import withLanguage from '@mlambda-net/core/lang/language';
import { Valid } from '@mlambda-net/core/common/validations';

const styles = (theme) => ({});

class LeftImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const ImgCtl = this.props.img;
    const { classes } = this.props;
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

export default withStyles(styles)(withTheme(LeftImage));
