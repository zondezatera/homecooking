$(document).ready(function() {
	NProgress.start();
  if($('.food-days').length){
    var jqxhr = $.getJSON( "http://127.0.0.1:3123/products", function(json) {
      $.each(json ,function(key,value){
        $.getJSON( "http://127.0.0.1:3123/owners?id="+value.owener_id, function(json) {
						NProgress.done();
            var tmp =   "<div class='hide'><a href=\"product.html?id="+value.id+"\" ><div class='row' id='row_"+value.id+"'><div class='col-xs-12'> <div class='header-panel'> <div class='row'><div class='list-food'> <img src='"+value.pic_src+"' class=\"cover_image\"> <img src=\"."+json[0].src+"\" class=\"img-circle\"> </div> </div> </div> <div class='detail-panel'> <div class='row'> <div class='col-xs-12'><label>"+value.title+"</label> <p>"+value.dec+"</p> </div> </div> </div> </div> </div></a></div>";
            $(".food-list-panel").append(tmp);
            delay_key = key+1;
						$('.food-days').find('.hide').removeClass('hide').addClass('animated fadeIn');
        });
      });
    });
  }else{
    var params = location.search;
    var jqxhr = $.getJSON( "http://127.0.0.1:3123/products"+params, function(product) {
      $.getJSON( "http://127.0.0.1:3123/owners?id="+product[0].owener_id, function(owner) {
      	$('.food-product .cover-image img').attr('src',product[0].pic_src);
      	$('.food-product .owner-image img').attr('src',owner[0].src);
      	$('.food-product .detail-panel .title label').text(product[0].title);
      	$('.food-product .detail-panel .title p ').text(owner[0].name);
      	$('.food-product .detail-panel .datetime p ').text(product[0].dec);
      	$('.food-product .detail-panel .price p span ').text(product[0].price);
      	$('.food-product .detail-panel .event-detail p ').text(product[0].event_detail);
				NProgress.done();
				$('.food-product').find('.hide').removeClass('hide').addClass('animated fadeInLeft');
      });
    });
  }
});