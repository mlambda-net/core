import { withStyles, withTheme } from '@material-ui/core/styles';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  menu: {
    border: '3px solid',
    borderColor: theme.palette.text.primary,
    textAlign: 'center',
    fontSize: theme.typography.subtitle1.fontSize,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.primary,
    padding: theme.spacing(1),
    cursor: 'pointer',
  },
});

class Menu extends React.Component {
  static defaultProps = {
    name: PropTypes.string,
    onClick: PropTypes.func,
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;
    return (
      <Button variant="outlined" className={classes.menu}>
        {this.props.name}
      </Button>
    );
  }
}

export default withStyles(styles)(withTheme(Menu));
