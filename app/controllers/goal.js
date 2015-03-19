import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroy: function(goal){
      goal.destroy();
    },

    cancel: function() {
      this.set('isEditing', true);
    },

    edit: function(){
      this.set('isEditing', true);
    },

    save: function(){
      this.set('isEditing', false);
    }

  },

  isEditing: false,

});
