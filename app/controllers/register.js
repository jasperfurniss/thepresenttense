import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    register: function() {
      this.uploadImageOne().then(function(image1) {
        this.uploadImageTwo().then(function(image2) {
          this.uploadImageThree().then(function(image3) {
            this.uploadPicture().then(function(imageFile){
        var data = this.getProperties('username', 'password');
        data.email = data.username;
        data.accountpicture = {
          "name": imageFile.name,
          "__type": "File"
        };

        data.photo1 = {
          "name": image1.name,
          "__type": "File"
        };

        data.photo2 = {
          "name": image2.name,
          "__type": "File"
        };

        data.photo3 = {
          "name": image3.name,
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
    }.bind(this));
  }.bind(this));
}.bind(this));
    }
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





});
