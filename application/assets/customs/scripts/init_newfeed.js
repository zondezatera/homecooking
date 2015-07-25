var jqxhr = $.getJSON( "http://127.0.0.1:3123/products", function(json) {
  $.each(json ,function(key,value){
    var tmp =   "<div class='row' id='row_'"+value.id+"><div class='col-xs-12'> <div class='header-panel'> <div class='row'><div class='list-food'> <img src='"+value.pic_src+"' class=\"cover_image\"> <div class=\"price\">"+value.price+" ฿</div><img src=\"./assets/images/grandma1.png\" class=\"img-circle\"> </div> </div> </div> <div class='detail-panel'> <div class='row'> <div class='col-xs-12'><label>'"+value.title+"'</label> <p>'"+value.dec+"'</p> </div> </div> </div> </div> </div>";
      $(".food-list-panel").append(tmp);

    //alert("key : "+key+"  value : "+value.id);
  });

})
  .done(function() {
    console.log( "second success" );
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( "complete" );
  });