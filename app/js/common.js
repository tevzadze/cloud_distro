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
        responsive: {
            '0': {
                items: 1
            },
            '483': {
                items: 1
            },
            '769': {
                items: 3
            },
            '1025': {
                items: 4
            },
        }
    })
    //mobile menu
    $('.burger-menu, .close_mobile').click(function() {
        $('.mobile-menu').toggleClass('active');
        $('.categories').removeClass('active');
        $('body').toggleClass('mobile-menu-open')
    });

    $('.categories-mobile, .cat-back').click(function() {
        event.preventDefault();
        $('.categories').toggleClass('active');

    });

    $('.catalog-tablet span').click(function() {
        event.preventDefault();
        $('.categories').toggleClass('active');
        $('body').toggleClass('mobile-menu-open');
    });

    $('.cat-back').click(function() {
        event.preventDefault();
        const menu = $('.mobile-menu.active');
        if (menu.length == 0) {
            console.log('hi')
            $('body').removeClass('mobile-menu-open')
        }

    });


    //categories dropdown
    if ($(window).width() > 768) {
        $('.categories-cat').hover(function() {
            $(this).toggleClass('active')
        })
    } else {
        $('.categories-cat a').click(function() {
            $(this).parent('.categories-cat').toggleClass('active')
        })
        $('.cat-link').click(function() {
            event.preventDefault();
        })
    }

    //card
    $('.card').each(function() {
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
    var catalogPage = $('.catalog_main')
    if (catalogPage.length != 0) {
        $('.filter-brand p').on('click', function() {
            $('.filter-brand').toggleClass('active');
        })
        $('.catalog-wrapper-filter-menu').click(function() {
            $('.filter').toggleClass('active');
            $(this).toggleClass('active');
        })

        var lowerSlider = document.querySelector('#lower');
        var upperSlider = document.querySelector('#upper');

        document.querySelector('#two').value = upperSlider.value;
        document.querySelector('#one').value = lowerSlider.value;

        var lowerVal = parseInt(lowerSlider.value);
        var upperVal = parseInt(upperSlider.value);

        upperSlider.oninput = function() {
            lowerVal = parseInt(lowerSlider.value);
            upperVal = parseInt(upperSlider.value);

            if (upperVal < lowerVal + 4) {
                lowerSlider.value = upperVal - 4;
                if (lowerVal == lowerSlider.min) {
                    upperSlider.value = 4;
                }
            }
            document.querySelector('#two').value = this.value
        };

        lowerSlider.oninput = function() {
            lowerVal = parseInt(lowerSlider.value);
            upperVal = parseInt(upperSlider.value);
            if (lowerVal > upperVal - 4) {
                upperSlider.value = lowerVal + 4;
                if (upperVal == upperSlider.max) {
                    lowerSlider.value = parseInt(upperSlider.max) - 4;
                }
            }
            document.querySelector('#one').value = this.value
        };
        var inputOne = document.querySelector('#one');
        var inputTwo = document.querySelector('#two');

        inputOne.oninput = function() {

            if (this.value < upperSlider.value) {
                lowerSlider.value = this.value
            } else {
                this.value = 0
                lowerSlider.value = upperSlider.value
                this.value = upperSlider.value
            }

        }
        inputTwo.oninput = function() {

            if (this.value > lowerSlider.value) {
                upperSlider.value = this.value
            } else {
                this.value = 1000
                upperSlider.value = lowerSlider.value
                this.value = lowerSlider.value
            }
        }
    }



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

    const firstStep = $('.cart-deliveryCaption');
    const secondStep = $('.cart-formCaption');
    const thirdStep = $('.cart-requisitesCaption');
    let secondStepFin = $('.forCart-delivery');
    var nextToDelivery = function() {
        $('.cart-form').fadeOut(0);
        $('.forCart-form').fadeOut(0);
        $('.cart-delivery').fadeIn(300);
        $(firstStep).addClass('active');
        $(secondStep).removeClass('active');
    }

    $('.cartButton').on('click', function() {
        $('.basket').fadeOut(0);
        $(secondStepFin).fadeOut(0);
        $('.cart_2').fadeIn(500);
        $('.navigationChange').text('Оформление заказа');
    });

    $('.backButton').on('click', function() {
        $('.basket').fadeIn(500);
        $(secondStepFin).fadeOut(0);
        $('.cart_2').fadeOut(0);
        $('.navigationChange').text('Корзина');
    })

    $('.formButton, .cart-deliveryCaption').on('click', nextToDelivery);

    $(secondStep).on('click', function() {
        $('.cart-form').fadeIn(300);
        $('.forCart-form').fadeIn(300);
        $('.cart-delivery').fadeOut(0);
        $(secondStepFin).fadeOut(0);
        $(firstStep).removeClass('active');
        $(secondStep).addClass('active');
        $('.widget').fadeOut(0);
        $(firstStep).removeClass('max');
        $(thirdStep).removeClass('active');
    })

    $('.cart-form-input').on('keyup', function() {
        let test = $('.cart-form-input-element').find('input');
        let count = 0;
        for (var i = test.length - 1; i >= 0; i--) {
            var testt = $(test[i]).val();
            if ($(test[i]).val() != '') {
                count++;
            } else {
                count--;
            }
            if (count == 8) {
                $(secondStep).addClass('max');
            } else {
                $(secondStep).removeClass('max');
            }
        }
    })


    $('.control').on('click', function() {
        let prop1 = $("#cloudDistro").prop("checked");
        let prop2 = $("#cash").prop("checked");
        $('.widget').fadeOut(0);
        $(firstStep).removeClass('max');
        $(thirdStep).removeClass('active');

        if (prop1) {
            $('.cashOnDelivery').fadeOut(0);
            $('.moneyOption').fadeIn(300);
        } else {
            $('.cashOnDelivery').fadeIn(300);
            $('.moneyOption').fadeOut(0);
        }
        if (prop2 && prop1) {
            $(secondStepFin).fadeIn(300);
            $('.deliveryButton').fadeOut(0);
            $(thirdStep).fadeOut(0);
        } else {
            $(secondStepFin).fadeOut(300);
            $('.deliveryButton').fadeIn(300);
            $(thirdStep).fadeIn(300);
        }
    })

    $('.deliveryButton').on('click', function() {
        var test = $('input:radio[name=delivery]');
        if ($(test[0]).prop("checked") || $(test[1]).prop("checked") || $(test[2]).prop("checked") == true) {
            $('.widget').fadeIn(300);
            $(firstStep).addClass('max');
            $(thirdStep).addClass('active');
        }
    })


    if (document.documentElement.clientWidth < 480) {
        $('.accordion').slideUp();
        $('.accordionTrigger').on('click', function(e) {
            let dropDown = $(this).closest('div').find('ul');
            let rotate = $(this).find('img');
            $('.accordion').not(dropDown).slideUp();
            $('.arrowFooter').not(rotate).removeClass('activeArrow');
            $(rotate).toggleClass('activeArrow');
            dropDown.slideToggle(200);

            e.preventDefault();
        })
    }

});