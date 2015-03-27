import Ember from 'ember';

export default Ember.Controller.extend({
    timerBackground: function(){
      var image = this.get('selectedImage');
      return image ? "background-image: url('" + image + "')" : "";
    }.property('selectedImage'),

  actions: {

    destroy: function(goal) {
      goal.destroy();
    },

    cancel: function() {
      this.set('isEditing', true);
    },

    edit: function() {
      this.set('isEditing', true);
    },

    save: function() {
      this.get('model.goal').save().then(function() {
        this.transitionToRoute('goal');
      }.bind(this));
    },
  },

  isEditing: false,
  focused: false

});
