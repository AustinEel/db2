$(function (){
  $.ajax({
    type: "GET",
    url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson",
    success: function(data){
      console.log(data);
      var template = $("#locations-template").html();
      var templateScript = Handlebars.compile(template);
      $('#eqdata').html(templateScript(data));
    }
  });
});
