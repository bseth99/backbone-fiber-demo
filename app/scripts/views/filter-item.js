define(['backbone'], function( Backbone ) {

   return Backbone.View.extend({

      setup: function() {

         this.collection = new Backbone.Collection();

      },

      afterRender: function() {

         this.$('li').addClass('active');

      },

      events: {

         'click li': function( event ) {

            var $el = $( event.currentTarget ),
                itm = this.collection.at( $el.index() ),
                state = !itm.get( 'selected' );

            if ( state )
               $el.addClass('active');
            else
               $el.removeClass('active');

            itm.set( 'selected', state );

            this.trigger( 'change',  itm );

            return false;

         }
      }

   });

});