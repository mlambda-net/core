import React from 'react';
import PropTypes from 'prop-types';
import LocalizedStrings from 'react-localization';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import { Box } from '@material-ui/core';
import { Option } from '@mlambda-net/core/common';
import withUtils from '@mlambda-net/core/utils/withUtils';

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
            <Content />
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

Profile.protoTypes = {
  className: '',
  classes: PropTypes.object.isRequired,
  user: PropTypes.object,
  lang: PropTypes.string,
  content: PropTypes.element,
  actions: PropTypes.element,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.string,
};

export default withUtils(styles)(Profile);
