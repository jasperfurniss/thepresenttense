import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import Ember from 'ember';

export default Ember.Route.extend(ApplicationRouteMixin, {
  model: function(){
    return this.store.createRecord('goal', {
      createdBy: this.get('session.currentUser')
    });
  },

  actions: {
    saveGoal: function(){
      this.modelFor('create').save().then(function() {
        this.transitionTo('goal');
      }.bind(this));
    }
  }
});
