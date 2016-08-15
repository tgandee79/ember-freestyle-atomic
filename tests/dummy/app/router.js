import Ember from 'ember';
import config from './config/environment';
import styleguideRouter from 'ember-freestyle-atomic/router';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  styleguideRouter(this);
});

export default Router;
