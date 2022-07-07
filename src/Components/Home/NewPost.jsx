import React, { Component } from 'react';

import {Paper} from 'material-ui';
import {TextField, RaisedButton, IconButton} from 'material-ui';

import IconPhoto from 'material-ui/svg-icons/editor/insert-photo';
import IconVideo from 'material-ui/svg-icons/av/videocam';

const buttonStyle = {
  margin: 12,
};
class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: window.data.auth.user
    }
  }
  render() {
    return (
      <div className="row">
        <Paper className="new-post-container">
          <TextField floatingLabelText="O que está pensando?" id="newpost" name="newpost" rows={1} fullWidth={true} multiLine={true}/>
          <div className="new-post-action">
            <IconButton><IconPhoto /></IconButton>
            <IconButton><IconVideo /></IconButton>
             <RaisedButton className="pull-right" label="Postar" primary={true} style={buttonStyle} />
          </div>
        </Paper>

      </div>
    );
  }
}

export default NewPost;
