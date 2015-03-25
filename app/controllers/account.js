import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    updateAccount: function() {
        var data = this.get('model');
        data.email = data.username;
        ajax({
          url: "https://api.parse.com/1/users/" + data.id,
          type: "PUT",
          data: JSON.stringify({firstname: data.firstname, lastname: data.lastname, password: data.password, username: data.username, email: data.username}),
          contentType: 'application/json'
        }).then(function(){
        this.transitionToRoute('goal');
      }.bind(this));
    },

  uploadPicture: function() {
    var file = this.get('accountPictureFile');
    return ajax({
      url: "https://api.parse.com/1/files/" + file.name,
      type: "POST",
      contentType: file.type,
      data: file,
      processData: false
    });
  }
}
});
