$(function() {

    $('.more_contacts img').on('click', function() {
        $(this).toggleClass('activeArrow');
        $('.more_contacts-inner').toggleClass('activeInfo');
    })
    $('.close').on('click', function() {
        $('.more_contacts img').toggleClass('activeArrow');
        $('.more_contacts-inner').removeClass('activeInfo');
    })

    $('.last-watch-carousel').owlCarousel({
        loop: true,
        nav: true,
        items: 4,
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
        $(this).each(function () {
            $(this).text(sum);
        })
    })




});