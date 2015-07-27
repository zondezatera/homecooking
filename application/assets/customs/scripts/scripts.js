$(document).ready(function() {
	NProgress.start();
  if($('.food-days').length){
    var jqxhr = $.getJSON( "http://127.0.0.1:3123/products", function(json) {
      $.each(json ,function(key,value){
        $.getJSON( "http://127.0.0.1:3123/owners?id="+value.owener_id, function(json) {
						NProgress.done();
						if (value.amount < 6) {
							left_ele = "<div class=\"amount\"><span>" +value.amount+"<span> Left</div>";
						}
						else{
							left_ele =''
						}
            var tmp =   "<div class='hide'><a href=\"product.html?id="+value.id+"\" ><div class='row' id='row_"+value.id+"'><div class='col-xs-12'> <div class='header-panel'> <div class='row'><div class='list-food'> <img src='"+value.pic_src+"' class=\"cover_image\"> "+left_ele+" <img src=\"."+json[0].src+"\" class=\"img-circle\"> </div> </div> </div> <div class='detail-panel'> <div class='row'> <div class='col-xs-12'><label>"+value.title+"</label> <p>"+value.dec+"</p> </div> </div> </div> </div> </div></a></div>";
            $(".food-list-panel").append(tmp);
            delay_key = key+1;
						$('.food-days').find('.hide').removeClass('hide').addClass('animated bounceInLeft');
        });
      });
    });
  }else if ($('.food-product').length){
    var params = location.search;
    var jqxhr = $.getJSON( "http://127.0.0.1:3123/products"+params, function(product) {
      $.getJSON( "http://127.0.0.1:3123/owners?id="+product[0].owener_id, function(owner) {
      	$('.food-product .cover-image img').attr('src',product[0].pic_sub_src);
      	$('.food-product .owner-image img').attr('src',owner[0].src);
      	$('.food-product .detail-panel .title label').text(product[0].title);
      	$('.food-product .detail-panel .title p ').text(owner[0].name);
      	$('.food-product .detail-panel .datetime p ').text(product[0].dec);
      	$('.food-product .detail-panel .price p span ').text(product[0].price);
      	$('.food-product .detail-panel .amount p span ').text(product[0].amount);
      	$('.food-product .detail-panel .event-detail p ').text(product[0].event_detail);
      	$('.food-product .detail-panel button').parent().attr('href','/order.html'+params);
      	// modal
      	$('.food-product .modal-panel .profile ').attr('src',owner[0].src);
      	$('.food-product .modal-panel .real-name ').text(owner[0].realname);
      	$('.food-product .modal-panel .nick-name ').text(owner[0].name);
      	console.log(owner[0]);
      	$('.food-product .modal-panel p ').text(owner[0].detail);
				NProgress.done();
				$('.food-product').find('.hide').removeClass('hide').addClass('animated fadeInRight');
      });
    });
  } else if ($('.process-payment.checkout ').length) {
  	var params = location.search;
    var jqxhr = $.getJSON( "http://127.0.0.1:3123/products"+params, function(product) {
				NProgress.done();
				$('.process-payment.checkout .payment-detail label').text(product[0].title);
				$('.process-payment.checkout .payment-detail p').text(product[0].dec);
				$('.payment').find('.hide').removeClass('hide').delay(9000).addClass('animated fadeInUp');
    });
  } else {
  	NProgress.done();
  	$('.payment').find('.hide').removeClass('hide').delay(9000).addClass('animated fadeIn');
  }
  $('.food-product .header-panel .owner-image').on('click',function (e) {
		$('#modal-profile').modal();
		e.preventDefault();
	});
	$('.process-payment.complete').ready(function(e) {
		$.ajax({
			url: "http://127.0.0.1:8000",
			type: 'GET',
		})
		.done(function() {
			console.log('done');
		})
		.fail(function() {
			console.log('fail');
		})
		.always(function() {
			console.log('always');
		});
	});
});