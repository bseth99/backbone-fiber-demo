define(['backbone'], function( Backbone ) {

   return Backbone.View.extend({

      setup: function() {

         this.collection = new Backbone.Collection();
      },

      events: {

         'reset.data': 'render',

         'click tbody [data-column="title"] a' : function( event ) {

            var $el = $( event.currentTarget ),
                id = this.collection.at( $el.closest( 'tr' ).index() ).get( 'id' );

            this.trigger( 'select', { row: $el, item: id } );

            return false;
         }
      }

   });

});