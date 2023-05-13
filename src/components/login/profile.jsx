import React from 'react';
import LocalizedStrings from 'react-localization';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Card, CardActions, CardContent, Typography } from '@mui/material';
import { Option } from '@mlambda-net/web-core/common';
import { withUtils } from '@mlambda-net/web-core/utils';

const language = new LocalizedStrings({
  en: {
    title: 'Profile',
  },
  es: {
    title: 'Perfil',
  },
});

const styles = (theme) => ({
  panel: {
    width: '100%',
    height: '100%',
  },

  title: {
    textAlign: 'center',
  },
  content: {
    height: 'calc(100% - 80px)',
  },
  actions: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'flex-end',
  },
});

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.valid = this.validation;
    this.state = { open: false };
  }

  render() {
    language.setLanguage(this.props.lang);
    const Content = this.props.content;
    const Actions = this.props.actions;
    const { classes } = this.props;

    return (
      <Option
        icon={AccountCircleIcon}
        width={this.props.width}
        height={this.props.height}
        style={this.props.style}>
        <Card className={classes.panel}>
          <CardContent className={classes.content}>
            <Typography
              className={classes.title}
              color="textSecondary"
              variant="h5"
              gutterBottom>
              {language.title}
            </Typography>
            <Content user={this.props.user} />
          </CardContent>

          <CardActions className={classes.actions}>
            <Box>
              <Actions />
            </Box>
          </CardActions>
        </Card>
      </Option>
    );
  }
}

export default withUtils(styles)(Profile);
