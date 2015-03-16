import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroy: function(goal){
      goal.destroy();
    },

    // addFavorite: function(){
    //   var goal = this.get('model');
    //   this.get('session.currentUser').addFavorite(goal);
    // }
  }
});
