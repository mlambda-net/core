import React from 'react';
import { Button } from '@mui/material';
import { withThemes } from '@mlambda-net/web-core/utils';

const styles = (theme) => ({
  menu: {
    border: '3px solid',
    borderColor: theme.palette.text.primary,
    textAlign: 'center',
    fontSize: theme.typography.subtitle1.fontSize,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.primary,
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

export default withThemes(styles)(Menu);
