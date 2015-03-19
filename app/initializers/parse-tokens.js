import Ember from 'ember';

export function initialize() {
  Ember.$.ajaxSetup({
    headers: {
      "X-Parse-Application-Id": "7yK2wek0IQahfvoyZVvzbfHH6SlsGzDNGW3PLSRQ",
      "X-Parse-REST-API-Key": "YHraWBoMYONsrzvgLxzTmFQc6bYk4Dj8gB06m5Hv"
    }
  });
}

export default {
  name: 'parse-tokens',
  initialize: initialize
};
