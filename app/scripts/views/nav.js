define(['backbone'], function( Backbone ) {

   return Backbone.View.extend({

      setup: function() {

         this.collection = new Backbone.Collection([
               { label: 'Box Office', action: 'box_office' },
               { label: 'In Theaters', action: 'in_theaters' },
               { label: 'Opening', action: 'opening' },
               { label: 'Upcoming', action: 'upcoming' }
            ]);
      },

      afterRender: function() {

         this.$('ul.nav > li').eq(0).click();
      },

      events: {

         'click ul.nav > li': function( event ) {

            var $el = $( event.currentTarget );

            this.$('ul.nav > li').removeClass('active');
            $el.addClass('active');

            this.trigger( 'change', this.collection.at( $el.index() ).toJSON() );

            return false;
         }
      }

   });

});