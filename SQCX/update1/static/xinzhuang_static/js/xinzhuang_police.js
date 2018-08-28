$.ajax({
    type: "GET",
    url: gpath + "/query/affairs/" + $.cookie('depart_id_xz'),
    dataType: "json",
    success: function (res) {
        $('.img').css('background-image', "url(" + res.categoryPhoto + ")")
        var index=0;
        for (var i in res.data) {
            for (var k in res.data[i]) {
                var tit = '<h4>' + k + '</h4>';
                $('.police').append(tit);
                for (var m in res.data[i][k]) {
                    index++;
                    var h = '<ul><li class="continer_li"><a  id='+m+'>' + index + '. ' + res.data[i][k][m] + '</a></li></ul>'
                    // console.log(res.data[i][k])
                    // $('.police ul').append(b);
                    $('.police').append(h);
                }
                
            }
        }
        var end_p = '<p>------结束</p>';
        $('.police').append(end_p);

        var police_a = $('.police ul').find('a');
        for (var p = 0; p < police_a.length; p++) {
            police_a.eq(p).on('click', function () {
                var detail_id = $(this).attr('id');
                $.cookie('detail_cookie', detail_id);
                window.location.href = 'xinzhuang_thing.html';
            })
        }
    }
})
// 上一页按钮
// 获取浏览器的高度
var win_height = $(window).height();
var back_position = ($(window).height()) / 2;
$('.back').css("top", back_position + 'px');
// 上下滚动按钮
$('.up_down').css("top", (back_position - 35) + 'px');
// 上下滚动屏幕

$(document).on('click','.scroll_up',function(){
    var up_height = $(".police li").height() * 10;
    if ($('.police_index_box').scrollTop() != 0) {
        var a = $('.police_index_box').scrollTop();
        $('.police_index_box').scrollTop(a - up_height);
    }
})
var win_top = $("body").height();
$(document).on('click', '.scroll_down', function () {
    var up_height = $(".police li").height() * 10;
    var a = $('.police_index_box').scrollTop();
    $('.police_index_box').scrollTop(a + up_height);
})
// 隐藏滚动条
$('.police_index_box').css({
    height: win_height+'px'
})