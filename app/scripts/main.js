
require( [
   'jquery',
   'backbone',
   'underscore',
   'backbone-fiber',
   'vendor/bootstrap',
   'vendor/jquery-ui',
   'vendor/jquery.outside-events',
   'vendor/moment',
   'text'
],
function( $, Backbone, _ ) {

      /* Configure components */

      _.templateSettings.variable = 'data';

      Backbone.Fiber.start();
});