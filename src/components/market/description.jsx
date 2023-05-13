import { CardContent, Typography } from '@mui/material';

import React from 'react';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import withThemes from '@mlambda-net/web-core/utils/withThemes';

const styles = (theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  titleBar: {
    height: '100px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(2),
  },
  content: {
    textAlign: 'justify',
    padding: theme.spacing(2),
  },
});

class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <CardContent>
        <div className={classes.root}>
          <div className={classes.titleBar}>
            <Typography component="h5" variant="h5">
              Product Title
            </Typography>
            <IconButton
              aria-label="close"
              color="primary"
              onClick={this.props.onClick}
              size="large">
              <CancelIcon />
            </IconButton>
          </div>

          <div className={classes.content}>
            <Typography variant="subtitle1" color="textSecondary">
              Bacon ipsum dolor amet swine jerky pork chop chuck andouille filet
              mignon drumstick tri-tip, leberkas tongue chicken t-bone. Pork
              meatball tri-tip salami. Ball tip swine venison hamburger. Rump
              ribeye biltong, shank meatloaf ball tip sausage shoulder swine
              bacon strip steak chislic landjaeger ham hock pork chop. Andouille
              kielbasa jerky porchetta salami. T-bone fatback jerky, drumstick
              cow strip steak porchetta andouille pork loin tongue buffalo
              biltong. Doner cow chicken, sirloin jowl chuck pork loin. Alcatra
              tenderloin venison short ribs filet mignon cow. Kevin salami rump
              picanha alcatra. Tri-tip prosciutto pastrami flank rump turducken
              ribeye pork chop short ribs doner pork belly alcatra porchetta
              shank. Sirloin beef ham hamburger. Ham pastrami short loin flank
              pancetta boudin pork belly tail.
            </Typography>
          </div>
        </div>
      </CardContent>
    );
  }
}

export default withThemes(styles)(Description);
