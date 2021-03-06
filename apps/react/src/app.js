/** @jsx React.DOM */

'use strict';

var React = require('react'),
    { PropTypes } = React,
    Navbar = require('./components/Navbar.jsx'),
    { Link, Navigation } = require('react-router'),
    AuthStore = require('./stores/AuthStore'),
    jquery = require('jquery');

window['React'] = React;
window['jQuery'] = jquery;
window.$ = jquery;

jquery.ajaxSetup({
  dataType: 'json',
  xhrFields: {
    withCredentials: true
  },
  crossDomain: true
});

var App = React.createClass({
  mixins: [Navigation],
  propTypes: {
    activeRouteHandler: PropTypes.func
  },
  componentWillMount() {
    return this.checkAuth();
  },
  checkAuth() {
    if (AuthStore.isSignin) {
      return true;
    }

    if (['/cards/me', '/cards/me/balance', '/']
        .indexOf(window.location.hash.slice(1)) !== -1) {
      this.transitionTo('/sessions/new');
      return false;
    } else {
      return true;
    }
  },
  shouldComponentUpdate() {
    return this.checkAuth();
  },
  render() {
    return (
      <div>
        <Navbar />
        <div className="main-wrapper">
          <this.props.activeRouteHandler />
        </div>
      </div>
    );
  }
});

module.exports = App;
