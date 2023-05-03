import { withStyles, withTheme } from '@mui/styles';
import React from 'react';
import Item from './item';
import Detail from './detail';
import Collapse from '@mui/material/Collapse';

const styles = (theme) => ({
  catalog: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  item: {
    padding: theme.spacing(2),
  },
});

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: -1, check: false };
    this.selectHandle = this.selectHandle.bind(this);
    this.closeHandle = this.closeHandle.bind(this);
  }

  selectHandle(event) {
    if (event.target.value > 0) {
      this.setState({ check: true });
    } else {
      this.setState({ check: false });
    }
    this.setState({ item: event.target.value });
  }

  closeHandle() {
    this.setState({ check: false });
  }

  render() {
    const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const { classes } = this.props;

    return (
      <div>
        <Collapse in={!this.state.check}>
          <div className={classes.catalog}>
            {elements.map((value) => {
              return (
                <div key={value} className={classes.item}>
                  <Item data={value} onClick={this.selectHandle} />
                </div>
              );
            })}
          </div>
        </Collapse>
        <Collapse in={this.state.check}>
          <Detail data={this.state.item} onClick={this.closeHandle} />
        </Collapse>
      </div>
    );
  }
}

export default withStyles(styles)(withTheme(Catalog));
