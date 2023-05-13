import * as React from 'react';

class Action extends React.Component {
  constructor(props) {
    super(props);
    const { children } = props;
    this.state = {
      routes: React.Children.map(children, (child) => {
        return {
          name: child.props.name,
          component: child.props.children,
        };
      }),
    };
  }

  component() {
    const { routes } = this.state;
    const items = routes.filter((r) => r.name === this.props.actual);
    if (items.length === 0) {
      return <span />;
    }
    return items[0].component;
  }

  render() {
    return this.component();
  }
}

export default Action;
