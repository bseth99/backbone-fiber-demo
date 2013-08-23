define(["backbone","vendor/moment"],function(e,t){var i=e.Model.extend({defaults:{id:"",title:"",release_date:"",studio:"",mpaa_rating:"",critics_rating:"",critics_score:"",audience_rating:"",audience_score:"",genre:"",cast:"",image:"",synopsis:"",link:""},url:function(){return _.result(this.collection,"urlRoot")+"movies/"+this.id+".json?apikey="+this.collection.apikey},parse:function(e){var i=t(e.release_dates&&e.release_dates.theater?e.release_dates.theater:"","YYYY-MM-DD");return i.day(5),{id:e.id,title:e.title,release_date:i.format("YYYY-MM-DD"),release_date_pretty:i.format("MMMM Do"),year:i.format("YYYY"),studio:e.studio||"",mpaa_rating:e.mpaa_rating||"",genre:e.genres&&e.genres.length?e.genres[0]:"",critics_rating:e.ratings&&e.ratings.critics_rating?e.ratings.critics_rating:"",critics_score:e.ratings&&e.ratings.critics_score?e.ratings.critics_score:"",audience_rating:e.ratings&&e.ratings.audience_rating?e.ratings.audience_rating:"",audience_score:e.ratings&&e.ratings.audience_score?e.ratings.audience_score:"",cast:e.abridged_cast?_.pluck(e.abridged_cast,"name").join(", "):"",image:e.posters.thumbnail,synopsis:(e.synopsis||"").slice(0,150),link:e.links.alternate}},sync:function(t,i,r){return r.timeout=1e4,r.dataType="jsonp",e.sync(t,i,r)}});return{Item:i,List:e.Collection.extend({model:i,urlRoot:"http://api.rottentomatoes.com/api/public/v1.0/",apikey:"xc8w3a2sbj7b7mgrv9e75c52",listSrc:"box_office",url:function(){return _.result(this,"urlRoot")+"lists/movies/"+this.listSrc+".json?apikey="+this.apikey},sync:function(t,i,r){return r.timeout=1e4,r.dataType="jsonp",e.sync(t,i,r)},parse:function(e){return e.movies},load:function(e){return this.listSrc=e||"box_office",this.fetch()}})}});