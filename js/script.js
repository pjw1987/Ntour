$(document).ready(function(){

    $('.menu_btn_mo').click(function(){
        $('.mo_menu_box').css({
            left: '0px',
        })
    })

    $('.mo_clickbox').click(function(){
        $('.mo_menu_box').css({
            left: '-500px',
        })
    });
})