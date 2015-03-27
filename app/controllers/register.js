import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    register: function() {
      var one = this.uploadImageOne();
      var two = this.uploadImageTwo();
      var three = this.uploadImageThree();
      var profile = this.uploadPicture();
      Ember.RSVP.allSettled([one, two, three, profile]).then(function(images){
        var data = this.getProperties('username', 'firstname', 'lastname', 'password');
        data.email = data.username;
        data.photo1 = {
          "name": images[0].value.name,
          "__type": "File"
        };

        data.photo2 = {
          "name": images[1].value.name,
          "__type": "File"
        };

        data.photo3 = {
          "name": images[2].value.name,
          "__type": "File"
        };

        data.accountpicture = {
          "name": images[3].value.name,
          "__type": "File"
        };

        ajax({
          url: "https://api.parse.com/1/users",
          type: "POST",
          data: JSON.stringify(data),
          contentType: 'application/json'
        }).then(function(response) {
          this.session.authenticate('authenticator:parse-email', {
            sessionToken: response.sessionToken
          });
        }.bind(this));
      }.bind(this));
    }
  },




  uploadImageOne: function() {
    var file = this.get('photoOneFile');
    return ajax({
      url: "https://api.parse.com/1/files/" + file.name,
      type: "POST",
      contentType: file.type,
      data: file,
      processData: false
    });
  },

  uploadImageTwo: function() {
    var file = this.get('photoTwoFile');
    return ajax({
      url: "https://api.parse.com/1/files/" + file.name,
      type: "POST",
      contentType: file.type,
      data: file,
      processData: false
    });
  },

  uploadImageThree: function() {
    var file = this.get('photoThreeFile');
    return ajax({
      url: "https://api.parse.com/1/files/" + file.name,
      type: "POST",
      contentType: file.type,
      data: file,
      processData: false
    });
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
  },



});
