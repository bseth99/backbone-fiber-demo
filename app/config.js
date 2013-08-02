
require.config({

   baseUrl: 'scripts',

   paths: {
      'text': '../../bower_components/requirejs-text/text',
      'jquery': '../../bower_components/jquery/jquery',
      'backbone': '../../bower_components/backbone-amd/backbone',
      'underscore': '../../bower_components/lodash/dist/lodash.underscore',
      'base': '../../bower_components/basejs/base',
      'backbone-fiber': '../../bower_components/backbone-fiber/backbone-fiber',
      'vendor': '../../vendor_components'
   },

   shim: {
     'vendor/bootstrap': {
         deps: ['jquery'],
         exports: '$'
     },
     'vendor/jquery-ui': {
         deps: ['jquery', 'vendor/jquery.outside-events'],
         exports: '$'
     },
     'vendor/jquery.outside-events': {
         deps: ['jquery'],
         exports: '$'
     },
     'vendor/moment': {
         exports: 'moment'
     }
   }

});

require(['main'], function() {});