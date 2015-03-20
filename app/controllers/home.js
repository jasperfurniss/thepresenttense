import Ember from 'ember';

export default Ember.Controller.extend({
  imageStyle: function() {
    return "background: url('" + this.get('model.photo1.url') + "') center center no-repeat;";
  }.property('model.photo1.url'),
});
