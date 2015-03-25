import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import Ember from 'ember';

export default Ember.Route.extend(ApplicationRouteMixin, {
  model: function(){
    return this.store.findAll('goal');
  }
});


// model: function() {
//   return new Ember.RSVP.hash({
//     goal: this.store.findAll('goal'),
//     users: this.store.findAll('user'),
//   });
// },
//
// });
