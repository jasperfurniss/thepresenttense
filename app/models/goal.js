import Ember from 'ember';
import Model from 'ember-magic-man/model';

export default Model.extend({
  serializeFriend: function(friend) {
    if (friend.id) {
    friend.id = friend.id;
  } else {
    friend.id = friend.objectId;
  }
    return {__type: "Pointer", className: "_User", objectId: friend.id};
  },

  serializeFriends: function(friends){
    return {
      myTodos: {
        __op: "AddRelation",
        objects: friends.map(this.serializeFriend)

      }
    };
  },

  toJSON: function(){
    var data = this._super();

    // var creatorId = this.get('createdBy.objectId');

    var creatorId;

    if (this.get('createdBy.objectId')) {
      creatorId = this.get('createdBy.objectId');
    } else {
      creatorId = this.get('createdBy.id');
    }

    if(creatorId) {
      Ember.set(data, 'createdBy', {
        __type: 'Pointer',
        className: '_User',
        objectId: creatorId
      });
    }

    return data;
  },

  photo: function(){
    return this.get('createdBy.' + this.get('userPhoto') + '.url');
  }.property('userPhoto')
});
