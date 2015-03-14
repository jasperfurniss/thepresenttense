import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('goal');
  },

  actions: {
    saveGoal: function(){
      this.store.save('goal', this.modelFor('create')).then(function() {
        this.transitionTo('goal');
      }.bind(this));
    }
  }


});
