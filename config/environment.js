/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'thepresenttense',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    'simple-auth': {
      routeAfterAuthentication: 'home',
      authorizer: 'authorizer:parse',
      crossOriginWhitelist: ['https://api.parse.com']
    },

    parseKeys: {
      applicationId: "7yK2wek0IQahfvoyZVvzbfHH6SlsGzDNGW3PLSRQ",
      restApi: "YHraWBoMYONsrzvgLxzTmFQc6bYk4Dj8gB06m5Hv"
    },


    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
     'report-uri': "'http://localhost:4200'",
     'default-src': "'none'",
     'script-src': "'self' *",
     'font-src': "'self' *",
     'connect-src': "'self' https://api.parse.com",
     'img-src': "'self' *",
     'style-src': "'self' 'unsafe-inline' *",
     'media-src': "'self'"
   }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = '/thepresenttense/';
  }

  return ENV;
};
