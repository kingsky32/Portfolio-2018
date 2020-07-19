$(function () {

    $(window).load(function () {
        $('.load').fadeOut();
    });

    var $menuBtn = $('#gnb .menu_btn img');
    var $xBtn = $('#wrap section .menu_vis #x_btn');

    $menuBtn.click(function () {
        $('#wrap section .menu_vis').fadeIn();
    });

    $xBtn.click(function () {
        $('#wrap section .menu_vis').fadeOut();
    });

    //    scrollScript
    var $project = $('#wrap section .article_project');

    function profileCss() {
        $('#wrap section .article_profile').css({
            'top': 0,
            'opacity': 1
        });
    }

    function projectCss() {
        $project.css({
            'top': 0,
            'opacity': 1
        });
    }

    function matchPro() {
        if (matchMedia("screen and (max-width: 425px)").matches) {
            profileCss();
            projectCss();
        }
    }

    $(window).scroll(function (e) {
        if (matchMedia("screen and (min-width: 426px)").matches) {

            var scTop = $(window).scrollTop();

            if (scTop > 450) {
                profileCss();
            }

            if (scTop > 1000) {
                projectCss();
            }

            if (scTop < 575) {
                $('#wrap #navigator .nav_line').css({
                    'height': scTop / 6.8
                });
                $('#wrap #navigator .dot').not($('#wrap #navigator a:nth-of-type(1) .dot')).css({
                    'background-color': '#333'
                });
            } else if (scTop > 575 && scTop < 1006) {
                $('#wrap #navigator .nav_line').css({
                    'height': scTop / 7
                });
                $('#wrap #navigator a:nth-of-type(2) .dot').css({
                    'background-color': '#eb727a'
                });
                $('#wrap #navigator .dot').not($('#wrap #navigator a:nth-of-type(1) .dot, #wrap #navigator a:nth-of-type(2) .dot')).css({
                    'background-color': '#333'
                });
            } else if (scTop > 1006 && scTop < 2400) {
                $('#wrap #navigator .nav_line').css({
                    'height': 70 + scTop / 15.5
                });
                $('#wrap #navigator a:nth-of-type(2) .dot, #wrap #navigator a:nth-of-type(3) .dot').css({
                    'background-color': '#eb727a'
                });
                $('#wrap #navigator .dot').not($('#wrap #navigator a:nth-of-type(1) .dot, #wrap #navigator a:nth-of-type(2) .dot, #wrap #navigator a:nth-of-type(3) .dot')).css({
                    'background-color': '#333'
                });

            } else {
                $('#wrap #navigator .nav_line').css({
                    'height': scTop / 11
                });
                $('#wrap #navigator .dot').css({
                    'background-color': '#eb727a'
                });
            }
        } else {
            matchPro();
        }
    });
    matchPro();
    $(window).resize(matchPro);

    //  nav
    $('#wrap #navigator a .dot').each(function (e) {
        $(this).css({
            'top': e * 72
        });
    });

    $('#wrap #navigator a').click(function () {
        var ahref = $(this).attr('href');
        switch (ahref) {
            case '#1':
                $('html, body').stop().animate({
                    scrollTop: 0
                }, 1000, 'easeOutExpo');
                break;
            case '#2':
                $('html, body').stop().animate({
                    scrollTop: 576
                }, 1000, 'easeOutExpo');
                break;
            case '#3':
                $('html, body').stop().animate({
                    scrollTop: 1007
                }, 1000, 'easeOutExpo');
                break;
            case '#4':
                $('html, body').stop().animate({
                    scrollTop: 2500
                }, 1000, 'easeOutExpo');
        }
    });


    //  cateFilter
    $('.category li').click(function () {

        $(this).addClass('cate_on');
        $('.category li').not($(this)).removeClass('cate_on');

        var cateData = $(this).data('filter');
        var $category = $('.project_area div .project');

        $category.each(function (e) {
            var cateClass = $(this).data('filter');
            if (cateClass == cateData) {
                $(this).show();
                $category.parent().removeClass('project_wrap');
                $category.addClass('project_on');
            } else if (cateData == "*") {
                $category.show();
                $category.parent().addClass('project_wrap');
                $category.removeClass('project_on');
            } else {
                $(this).hide();
                $category.parent().removeClass('project_wrap');
                $category.addClass('project_on');
            }
        });
    });
});
