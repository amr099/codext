$(()=>{
    $('.burger').on('click',()=>{
        $('nav').addClass('flex')
        $('nav').removeClass('hide')
        $('.close').removeClass('hide')
        $('.burger').addClass('hide')
    })

    $('.close').on('click',()=>{
        $('nav').addClass('hide')
        $('.close').addClass('hide')
        $('.burger').removeClass('hide')
    })

    // pricing interactions
    $('.toggle').on('click',()=>{
        $('.toggle > span').toggleClass('right')
        $('.monthly, .yearly').toggleClass('selected')
        $('.month-plan, .year-plan').toggleClass('hide')
    })

    // Fixed Nav onScroll.
    $(window).scroll(()=>{
        let height = $(this).scrollTop();
        if(height > 100){
            $('.hero header').addClass('fixed-header');
        }
        else{
            $('.hero header').removeClass('fixed-header');
        }
    })
})