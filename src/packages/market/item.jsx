import { withStyles, withTheme } from '@material-ui/core/styles';
import React from 'react';
import Card from '@material-ui/core/Card';
import { CardMedia } from '@material-ui/core';
import AddIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import PropTypes from 'prop-types';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';

const styles = (theme) => ({
  item: {
    maxWidth: 200,
  },
  actions: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  price: {
    flexGrow: '20',
    paddingLeft: theme.spacing(1),
    fontWeight: '900',
  },
  buttons: {
    flexGrow: '1',
  },
});

class Item extends React.Component {
  static defaultProps = {
    itemID: PropTypes.number,
    classes: PropTypes.object.isRequired,
    onClick: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onClick({ target: { value: this.props.data } });
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.item}>
        <CardActionArea onClick={this.handleClick}>
          <CardMedia
            component="img"
            height="90"
            image="https://camaradehaedo.com/assets/images/gallery00.jpg"
            title="Audifonos"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Loren impsun
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing>
          <div className={classes.actions}>
            <div className={classes.price}>
              <Typography variant="h6" color="textSecondary" component="span">
                $200
              </Typography>
            </div>
            <div className={classes.buttons}>
              <IconButton color="primary" aria-label="Add favorite">
                <FavoriteIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Add">
                <AddIcon />
              </IconButton>
            </div>
          </div>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(withTheme(Item));
