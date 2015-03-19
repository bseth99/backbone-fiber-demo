define(['backbone'], function( Backbone ) {

   return Backbone.View.extend({

      setup: function() {

         this.collection = new Backbone.Collection();
      },

      events: {

         'reset.data': 'render',

         'created.filter-item': function( event, ui ) {

            var flt = $( event.target ).attr( 'data-filters' );

            ui.view.collection.reset( this.collection.where({ attribute: flt })[0].get( 'items' ) );

            return false;
         },

         'change.filter-item': function( event, ui ) {

            var selected = _.object( _.map( this.allChildren(), function( view ) {

                     var flt = view.$el.attr( 'data-filters' );

                     return [
                        flt,
                        _.pluck( _.filter( view.dataSerialized(), function( d ) {

                           return d.selected;
                        }), 'label' )
                     ];

                  })
               );

            this.trigger( 'change', selected );

            return false;

         }
      }

   });

});