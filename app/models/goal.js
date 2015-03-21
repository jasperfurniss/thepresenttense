import Ember from 'ember';

export default Ember.Object.extend({
  destroy: function(){
    return this.store.destroy('goal', this);
  },

  edit: function(){
    return this.store.edit('goal', this);
  },

  save: function(){
    return this.store.save('goal', this);
  },

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
    var data = this.getProperties('', '', '', '', '', '');
    var ownerId = this.get('activityOwner.id');
    if(ownerId) {
    Ember.set(data, 'activityOwner', {
        __type: 'Pointer',
        className: '_User',
        objectId: ownerId
      });
    }

    return data;
  }
});
