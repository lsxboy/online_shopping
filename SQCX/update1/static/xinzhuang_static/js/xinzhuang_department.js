// department.html页面中，图标下的文字
$(function ($) {
    // 获取id 和 name
    $.ajax({
        type: "GET",
        url: gpath + "/query/guide_to_affairs",
        dataType: "json",
        success: function (result) {
            if (result.resCode == 1001){
                for (var r in result.data) {
                    var category_id = result.data[r].categoryID;
                    var category_name = result.data[r].categoryName;
                    var department_icon = +r + 1;
                    var department_a = '<a class="flex_item"><img class="icon" src=' + result.data[r].ico + '><span id= "' + category_id + '">' + category_name + '</span></a>'
                    $('.last').before(department_a);
                }
                var all_a = $('.depart_box a');
                for (var i = 0; i < all_a.length; i++) {
                    all_a.eq(i).on('click', function () {
                        var depart_id = $(this).find('span').attr('id');
                        $.cookie('depart_id_xz', depart_id);
                        window.location.href = 'xinzhuang_police.html';
                    })
                }
            }else{
                alert(result.resMsg);
            }
        }
    });
    // 上一页按钮
    // 获取浏览器的高度
    var win_height = $(window).height();
    var back_position = ($(window).height()) / 2;
    $('.back').css("top", back_position + 'px');
    // 上下滚动按钮
    $('.up_down').css("top", (back_position - 35) + 'px');
    // 上下滚动屏幕
    // function scrool_up() {
    //     var up_height = $(".police li").height();
    //     if ($(window).scrollTop() != 0) {
    //         $(window).scrollTop(-up_height)
    //     }

    // }
    // function scroll_down() {
    //     var down_height = $(".police li").height();
    //     for (var i = down_height; i < $("body").height(); i + 10) {
    //         $(window).scrollTop(i + 'px');
    //     }
    // }
    if (win_height > 768) {
        $('.depart_box').css({
            height: 600 + 'px'
        })
    } else {
        $('.depart_box').css({
            height: win_height + 'px'
        })
    }

}(jQuery))