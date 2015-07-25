var jqxhr = $.getJSON( "http://127.0.0.1:3123/products", function(json) {
  $.each(json ,function(key,value){
    alert("key : "+key+"  value : "+value.id);
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