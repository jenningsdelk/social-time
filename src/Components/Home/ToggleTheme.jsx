import React, { Component } from 'react';

import {Card, CardText, Toggle} from 'material-ui';

class ToggleTheme extends Component {
  constructor(props) {
    super(props);
  }
  toggle() {
    window.toggleTheme();
  }
  render() {
    return (
      <Card zDepth={1} className="sidebar-component" initiallyExpanded={true} >
       
      </Card>
    );
  }
}

export default ToggleTheme;
