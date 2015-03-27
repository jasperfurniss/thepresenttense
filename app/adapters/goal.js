import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Object.extend({
  find: function(name, id){
    /* jshint unused: false */
    return ajax("https://api.parse.com/1/classes/Goal/" + id + "?include=createdBy").then(function(goal){
      goal.id = goal.objectId;
      delete goal.objectId;
      return goal;
    });
  },

  findAll: function(name) {
    /* jshint unused: false */
    var currentUser = this.get('session.currentUser.id');
    return ajax("https://api.parse.com/1/classes/Goal" + "?include=createdBy", {
      data: {
        where: {
          "createdBy": {
            "__type":"Pointer",
            "className":"_User",
            "objectId": currentUser
          }
        }
      }
    }).then(function(response){
      return response.results.map(function(goal) {
        goal.id = goal.objectId;
        delete goal.objectId;
        return goal;
      });
    });
  },

  findQuery: function(name, query) {
    /* jshint unused: false */
    return ajax("https://api.parse.com/1/classes/Goal", {
      data: Ember.$.param({
              where: JSON.stringify(query)
            })
    }).then(function(response){
      return response.results.map(function(goal) {
        goal.id = goal.objectId;
        delete goal.objectId;
        return goal;
      });
    });
  },

  destroy: function(name, record) {
    /* jshint unused: false */
    return ajax({
      url: "https://api.parse.com/1/classes/Goal/" + record.id,
      type: "DELETE"
    });
  },

  save: function(name, record){
    if(record.id) {
      return ajax({
        url: "https://api.parse.com/1/classes/Goal/" + record.id,
        type: "PUT",
        data: JSON.stringify(record.toJSON()),
      }).then(function(response) {
        record.updatedAt = response.updatedAt;
        return record;
      });
    } else {
      return ajax({
        url:  "https://api.parse.com/1/classes/Goal",
        type: "POST",
        data: JSON.stringify(record.toJSON()),
        contentType: 'application/json'
      }).then(function(response){
        record.id = response.objectId;
        record.createdAt = response.createdAt;
        return record;
      });
    }
  }
});
