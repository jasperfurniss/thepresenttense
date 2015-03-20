import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('create');
  this.route('account');
  this.route('goal');
  this.route('login', { path: '/'});
  this.route('edit', { path: '/edit/:goal_id'});
  this.route('register');
});


export default Router;
