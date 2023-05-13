import React from 'react';

import { Card, Grid } from '@mui/material';
import Carousel from './carousel';
import Description from './description';
import withThemes from '@mlambda-net/web-core/utils/withThemes';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
});

class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.root}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={0}>
          <Grid item xs={12} sm={12} md={5}>
            <Carousel
              images={[
                'https://camaradehaedo.com/assets/images/gallery00.jpg',
                'https://camaradehaedo.com/assets/images/gallery01.jpg',
                'https://camaradehaedo.com/assets/images/gallery02.jpg',
                'https://camaradehaedo.com/assets/images/gallery03.jpg',
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Description onClick={this.props.onClick} />
          </Grid>
        </Grid>
      </Card>
    );
  }
}

export default withThemes(styles)(Detail);
