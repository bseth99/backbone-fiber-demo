define(['backbone'], function( Backbone ) {

   return Backbone.View.extend({

      $alignTo: null,

      afterRender: function() {

         this.$el.addClass('popover right fade');

         this.$('.osb-waiting').hide();
         this.$('.osb-ready').show();

         this.$el.position({
            my: 'left center',
            at: 'right+30 center',
            of: this.$alignTo,
            collision: 'fit'
         });
      },

      show: function( item, at ) {

         var self = this;

         this.$alignTo = at;

         this.$('.osb-ready').hide();
         this.$('.osb-waiting').show();
         this.$el.addClass('in');

         this.$el.show().position({
            my: 'left center',
            at: 'right+30 center',
            of: this.$alignTo,
            collision: 'fit'
         });

         this.model = item;
         item.fetch().done(function() { self.render(); });
      },

      hide: function() {

         this.$el.removeClass('in').hide();
      },

      events: {
         'clickoutside': 'hide'
      }

   });

});