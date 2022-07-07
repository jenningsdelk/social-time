import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import {AppBar, FlatButton, IconButton, IconMenu, MenuItem, Divider, Avatar} from 'material-ui';
import {TextField} from 'material-ui';


import IconHome from 'material-ui/svg-icons/action/home';
import IconNotification from 'material-ui/svg-icons/social/notifications';
import IconMail from 'material-ui/svg-icons/content/mail';
import IconSearch from 'material-ui/svg-icons/action/search';
import IconClose from 'material-ui/svg-icons/navigation/close';

import IconPerson from 'material-ui/svg-icons/social/person';
import IconList from 'material-ui/svg-icons/action/list';
import IconFlash from 'material-ui/svg-icons/image/flash-on';
import IconAssessment from 'material-ui/svg-icons/action/assessment';
import IconLaunch from 'material-ui/svg-icons/action/launch';

import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: window.data.auth.user,
      searchBarClassName: "hidden"
    }
  }
  componentDidMount() {
    var searchInput = document.getElementById("search-input")
    searchInput.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        this.props.history.push("/search/"+searchInput.value);
      }
    }.bind(this));
  }

  showSearch() {
    this.setState({searchBarClassName: "animated fadeIn"})
    setTimeout(function () {
      this.refs.searchInput.focus();
    }.bind(this), 500);
  }

  hideSearch() {
    this.setState({searchBarClassName: "animated fadeOut"})
    setTimeout(function () {
      this.setState({searchBarClassName: "hidden"})
    }.bind(this), 500);
  }

  render() {
    const mainBar = (
      <div className="container">
        <div className="appbar-links">
          <Link to="/"><FlatButton icon={<IconHome style={{fill:'black'}}/>} label="Início" className="appbar-btn"/></Link>
          <IconMenu className="pull-right" iconButtonElement={<IconButton className="appbar-btn"><Avatar src={this.state.user.avatar} size={40} /></IconButton>}>
          <MenuItem primaryText="Log out" />
        </IconMenu>
        <IconButton className="pull-right" style={{top:'15px'}} onClick={this.showSearch.bind(this)}><IconSearch className="appbar-btn"/></IconButton>
      </div>
    </div>
  );
  const searchBar = (
    <div className="container">
      <TextField ref="searchInput" id="search-input" hintText="Digite e aperte enter"  style={{width: '95%'}} inputStyle={{color:'white'}}/>
      <IconButton className="pull-right" style={{top:'12px'}} onClick={this.hideSearch.bind(this)}><IconClose color="white"/></IconButton>
    </div>
  )

  return (
    <header>
      <AppBar
        id="main-bar"
        title={mainBar}
        showMenuIconButton={false}
        style={{position:'fixed'}}
      />
      <AppBar
        title={searchBar}
        className={this.state.searchBarClassName}
        id="search-bar"
        showMenuIconButton={false}
      />
    </header>
  );
}
}

export default withRouter(Header);
