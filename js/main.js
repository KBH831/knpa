// jquery를 실행하는 처음 문구
// ---- li 를 클릭했을 때 할일
// --------li에 sub1들을 다 찾아서 hide()
// --------$(this).find('.sub1').show()

$(document).ready(function(){
    $('.top-inner-l > a').click(function(e){
        e.preventDefault(); 
        $('.top-inner-l > a').toggleClass('active')
        $('.top-inner-l i').toggleClass('fa-chevron-up fa-chevron-down')
    })
    $('.top-inner ul').hide()
    $('.top-inner-l > a').click(function(){
        $('.top-inner ul').toggle()
    })

    $('.main > li').click(function(e){
        e.preventDefault()
        $('.main > li').find('.sub1').fadeOut(10);
        $(this).find('.sub1').toggle()
    })

    
    $('.police-info > ul li').click(function(e){
        e.preventDefault()
        $('.police-info > ul li a').removeClass('active')
        $(this).find('a').addClass('active')
    
        $('.tabtab').hide()
        let idx = $(this).index()
        console.log(idx)
        $('.tabtab').eq(idx).show()
    })











    $('footer .btn-menu > ul > li').click(function(){
        $('.btn-menu > ul > li').find('ul').fadeOut(10);
        $(this).find('ul').toggle()
        $(this).toggleClass('active')
    })


    $('body').click(function(e){
        if(!$(e.target).is('footer .btn-menu > ul > li')) {
            $('.btn-menu > ul > li > ul').hide()
            // $('.menu .main > li .sub1').hide()
        }
    })
    
    // $('body').click(function(e){
    //     if(!$(e.target).is('.menu .main > li')) {
    //         $('.menu .main > li .sub1').hide()
    //     }      
    // })



    $('.gotop').click(function(e){
        e.preventDefault()
        $('html, body').stop().animate({
            scrollTop : 0
        }, 1500)
    })
    



})
