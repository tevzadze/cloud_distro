$(function() {
    //contacts info
    $('.more_contacts img').on('click', function() {
        $(this).toggleClass('activeArrow');
        $('.more_contacts-inner').toggleClass('activeInfo');
    })
    $('.close').on('click', function() {
        $('.more_contacts img').toggleClass('activeArrow');
        $('.more_contacts-inner').removeClass('activeInfo');
    })
    //sliders
    $('.last-watch-carousel').owlCarousel({
        loop: true,
        nav: true,
        items: 4,
        responsive : {
            1025 : {
                items: 4
            },
            769 : {
                items: 3,
                center: true
            },
            480 : {
                items: 2,
                // center: true
            },

            0 : {
                items: 1
            }
        }
    })
    //card
    $('.card').each(function() {
        // console.log(this);
        var dataPrice = $(this).data('price');
        $(this).find('.real-price').text(dataPrice)
    })


    //product
    $('.minus').click(function() {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function() {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    //account

    $('.account-left-info').on('click', function() {
        $(this).parents('.account-left-table').toggleClass('active');
    })

    //account total price counter
    var totalPrice = $('.total-price-output');
    totalPrice.each(function() {
        var onePrice = $(this).parents('.account-left-table').find('.one-product-price');
        var sum = 0;
        onePrice.each(function() {
            sum += parseInt($(this).data('num'));
        })
        $(this).each(function() {
            $(this).text(sum);
        })
    })
    //filter
    $('.filter-brand p').on('click', function() {
        $('.filter-brand').toggleClass('active');
    })

    //popup
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });




    // displayChange

    $('.cart_2').fadeOut(0);
    $('.cart-delivery').fadeOut(0);
    $('.moneyOption').fadeOut(0);
    $('.widget').fadeOut(0);

    var nextToDelivery = function(){
        $('.cart-form').fadeOut(0);
        $('.forCart-form').fadeOut(0);
        $('.cart-delivery').fadeIn(300);
        $('.cart-deliveryCaption').addClass('active');
        $('.cart-formCaption').removeClass('active');
    }

    $('.cartButton').on('click', function(){
        $('.basket').fadeOut(0);
        $('.forCart-delivery').fadeOut(0);
        $('.cart_2').fadeIn(500);
        $('.navigationChange').text('Оформление заказа');
    });

    $('.backButton').on('click', function(){
        $('.basket').fadeIn(500);
        $('.forCart-delivery').fadeOut(0);
        $('.cart_2').fadeOut(0);
        $('.navigationChange').text('Корзина');
    })

    $('.formButton, .cart-deliveryCaption').on('click', nextToDelivery);

    $('.cart-formCaption').on('click', function(){
        $('.cart-form').fadeIn(300);
        $('.forCart-form').fadeIn(300);
        $('.cart-delivery').fadeOut(0);
        $('.forCart-delivery').fadeOut(0);
        $('.cart-deliveryCaption').removeClass('active');
        $('.cart-formCaption').addClass('active');
        $('.widget').fadeOut(0);
        $('.cart-deliveryCaption').removeClass('max');
        $('.cart-requisitesCaption').removeClass('active');
    })

    $('.cart-form-input').on('keyup', function(){
        let test = $('.cart-form-input-element').find('input');
        let count = 0;
        for (var i = test.length - 1; i >= 0; i--) {
              var testt =  $(test[i]).val();  
               if($(test[i]).val() != ''){
                count++;
               } else   {
                count--;
               }
               if (count == 8){
                 $('.cart-formCaption').addClass('max');
               } else {
                $('.cart-formCaption').removeClass('max');
               }
           }   
    })


    $('.control').on('click', function(){
        var prop1 = $("#cloudDistro").prop("checked");
        var prop2 = $("#cash").prop("checked");
        $('.widget').fadeOut(0);
        $('.cart-deliveryCaption').removeClass('max');
        $('.cart-requisitesCaption').removeClass('active');

        if (prop1) {
            $('.cashOnDelivery').fadeOut(0);
            $('.moneyOption').fadeIn(300);
        } else {
            $('.cashOnDelivery').fadeIn(300);
            $('.moneyOption').fadeOut(0);
        }
        if (prop2 && prop1) {
            $('.forCart-delivery').fadeIn(300);
            $('.deliveryButton').fadeOut(0);
            $('.cart-requisitesCaption').fadeOut(0);
        } else {
            $('.forCart-delivery').fadeOut(300);
            $('.deliveryButton').fadeIn(300);
            $('.cart-requisitesCaption').fadeIn(300);
        }
    })

    $('.deliveryButton').on('click', function(){
        var test = $('input:radio[name=delivery]');
        if ($(test[0]).prop("checked") || $(test[1]).prop("checked") || $(test[2]).prop("checked") == true){
            $('.widget').fadeIn(300);
            $('.cart-deliveryCaption').addClass('max');
            $('.cart-requisitesCaption').addClass('active');
        }
    })

});