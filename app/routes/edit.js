import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import Ember from 'ember';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  actions: {
    saveGoal: function(){
      this.modelFor('edit').save().then(function() {
        this.transitionTo('goal');
      }.bind(this));
    }
  }
});
