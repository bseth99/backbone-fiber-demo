define(["backbone","models/movies"],function(e,t){return e.View.extend({$progressBar:null,setup:function(){this.source=new t.List},ready:function(){var e=this.source.toJSON();this.$progressBar.modal("hide"),this.findChild("sidebar").collection.reset([{title:"Critics Rating",attribute:"critics_rating",items:this.makeFilter("critics_rating")},{title:"Release Date",attribute:"release_date_pretty",items:this.makeFilter("release_date_pretty")}]),this.findChild("content").collection.reset(e)},makeFilter:function(e){return _.chain(this.source.pluck(e)).uniq().compact().map(function(e){return{label:e,selected:!0}}).sortBy("label").value()},afterRender:function(){this.$progressBar=this.$(".js-loading-bar").modal({backdrop:"static",show:!1})},events:{"shown.bs.modal":function(e){var t=$(e.target).find(".progress-bar");t.removeClass("animate"),_.defer(function(){t.addClass("animate")})},"change.nav":function(e,t){var i=this;this.$progressBar.modal("show"),this.waitFor(["sidebar","content"],function(){i.source.load(t.data.action).done(function(){i.ready.call(i)})})},"change.sidebar":function(e,t){this.findChild("content").collection.reset(this.source.filter(function(e){return _.chain(t.data).pairs().reduce(function(t,i){return t&&_.contains(i[1],e.get(i[0]))},!0).value()}))},"select.content":function(e,t){var i=this.findChild("popover");i?i.show(this.source.get(t.data.item),t.data.row):this.connect("popover").done(function(e){e.show(this.source.get(t.data.item),t.data.row)})}}})});