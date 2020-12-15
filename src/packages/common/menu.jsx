import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import withThemes from '@mlambda-net/core/utils/withThemes';

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
  render() {
    const { classes } = this.props;
    return (
      <Button variant="outlined" className={classes.menu}>
        {this.props.name}
      </Button>
    );
  }
}

Menu.protoTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

export default withThemes(styles)(Menu);
