$(function () {
    $(window).load(function () {
        $('.load').fadeOut();
    });
    
    // menu

    var $menuBtn = $('#gnb .menu_btn img');
    var $xBtn = $('#wrap section .menu_vis #x_btn');

    $menuBtn.click(function () {
        $('#wrap section .menu_vis').fadeIn();
    });

    $xBtn.click(function () {
        $('#wrap section .menu_vis').fadeOut();
    });

    function matchWork() {
        if (matchMedia("screen and (max-width: 425px)").matches) {
            $('#article_work img').each(function (e) {
                $(this).css({
                    'margin': '50px 0',
                    'opacity': 1
                });
            });
            $('#article_text').css({
                'opacity': 1
            });
        }
    }

    matchWork();
    $(window).resize(matchWork);

    $(window).scroll(function (e) {
        var scTop = $(this).scrollTop();
        $('#article_vis img').css({
            'top': scTop / (-3) + 25
        });

        if (scTop >= 1200) {
            $('#article_text').css({
                'opacity': 1
            });
        }

        $('#article_work img').each(function (e) {
            var imgHei = $(this).height();

            if (scTop >= 1661 + imgHei * e) {
                $(this).css({
                    'margin': '50px 0',
                    'opacity': 1
                });
            }
        });
    });

});
