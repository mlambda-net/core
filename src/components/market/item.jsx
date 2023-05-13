import React from 'react';
import { withThemes } from '@mlambda-net/web-core/utils';
import { AddShoppingCart, Favorite } from '@mui/icons-material';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';

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
            image="https://images.unsplash.com/photo-1526352319234-c349ead2152a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
              <IconButton
                color="primary"
                aria-label="Add favorite"
                size="large">
                <Favorite />
              </IconButton>
              <IconButton color="primary" aria-label="Add" size="large">
                <AddShoppingCart />
              </IconButton>
            </div>
          </div>
        </CardActions>
      </Card>
    );
  }
}

export default withThemes(styles)(Item);
