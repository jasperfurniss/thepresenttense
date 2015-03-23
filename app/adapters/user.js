import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Object.extend({

  find: function(name, id){
    return ajax("https://api.parse.com/1/users/" + id).then(function(user){
      user.id = user.objectId;
      delete user.objectId;
      delete user.sessionToken;
      return user;
    });
  },

  findAll: function(){
    return ajax("https://api.parse.com/1/users").then(function(response){
       return response.results.map(function(user) {
         user.id = user.objectId;
         delete user.objectId;
         delete user.sessionToken;
         return user;
       });
     });
   },

  //  uploadPicture: function(){
  //    return ajax("https://api.parse.com/1/files/accountpicture.jpg").then(function(response){
  //      return response.results.map(function(user) {
  //        user.id = user.objectId;
  //        delete user.objectId;
  //        delete user.sessionToken;
  //        return user;
  //      });
  //    });
  //  }

  //
  // "X-Parse-Application-Id: 7yK2wek0IQahfvoyZVvzbfHH6SlsGzDNGW3PLSRQ" \
  // "X-Parse-REST-API-Key: YHraWBoMYONsrzvgLxzTmFQc6bYk4Dj8gB06m5Hv" \
  // "Content-Type: image/jpeg" \
  // --data-binary '@myPicture.jpg' \
  // https://api.parse.com/1/files/pic.jpg
});
