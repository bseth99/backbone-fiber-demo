define(['backbone', 'models/movies'], function( Backbone, Movies ) {

   return Backbone.View.extend({

      setup: function() {

         this.source = new Movies.List();

      },

      ready: function() {

         var data = this.source.toJSON();

         this.findChild( 'sidebar' ).collection.reset([
               { title: 'Critics Rating', attribute: 'critics_rating', items: this.makeFilter('critics_rating') },
               { title: 'Release Date', attribute: 'release_date_pretty', items: this.makeFilter('release_date_pretty') },
            ]);

         this.findChild( 'content' ).collection.reset( data );
      },

      makeFilter: function( attr ) {
         return (
            _.chain( this.source.pluck( attr ) )
               .uniq()
               .map( function( d ) { return { label: d, selected: true }; } )
               .sortBy( 'label' )
               .value()
         );
      },

      events: {

         'change.nav': function( event, ui ) {

            var self = this;

            this.waitFor( ['sidebar', 'content'], function() {
               self.source.load( ui.data.action ).done(function() {
                  self.ready.call( self );
               });
            });
         },

         'change.sidebar': function( event, ui ) {

            this.findChild( 'content' ).collection.reset(

               this.source.filter( function( model ) {

                  return (
                        _.chain( ui.data )
                           .pairs()
                           .reduce( function( memo, attr ) {
                              return memo && _.contains( attr[1], model.get( attr[0] ) );
                           }, true)
                           .value()
                     );
               })
            );
         },

         'select.content': function( event, ui ) {

            var popover = this.findChild( 'popover' );

            if ( popover ) {
               popover.show( this.source.get( ui.data.item ), ui.data.row );
            } else {
               this.connect( 'popover' ).done(function( popover ) {
                  popover.show( this.source.get( ui.data.item ), ui.data.row );
               });
            }
         }
      }
   });

});