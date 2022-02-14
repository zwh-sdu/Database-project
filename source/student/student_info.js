(function ($) {
    $(window).load(function () {
        $("a[rel='load-content']").click(function (e) {
            e.preventDefault();
            var url = $(this).attr("href");
            $.get(url, function (data) {
                $(".content .mCSB_container").append(data); //load new content inside .mCSB_container
                //scroll-to appended content
                $(".content").mCustomScrollbar("scrollTo", "h2:last");
            });
        });
        $(".content").delegate("a[href='top']", "click", function (e) {
            e.preventDefault();
            $(".content").mCustomScrollbar("scrollTo", $(this).attr("href"));
        });

    });
})(jQuery);
function getcookie(cookiename) {
    var result;
    var mycookie = document.cookie;
    var start2 = mycookie.indexOf(cookiename + "=");
    if (start2 > -1) {
        start = mycookie.indexOf("=", start2) + 1;
        var end = mycookie.indexOf(";", start);
        if (end == -1) {
            end = mycookie.length;
        }
        result = unescape(mycookie.substring(start, end));
    }
    return result;
}
window.onload = function()
{
    var httpRequest = new XMLHttpRequest();
    var stuid = getcookie('stuid')
    var url = 'student_info.php?stuid='+stuid;
    httpRequest.open('GET', url, true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var res = httpRequest.responseText;
            res = JSON.parse(res)
            $("#stuid").val(res['StuID']);
            $("#stuname").val(res['StuName']);
            $("#stusex").val(res['StuSex']);
            $("#stumajor").val(res['StuMajor']);
            $("#stuclass").val(res['StuClass']);
            $("#stugrade").val(res['StuGrade']);
            $("#dorm").val(res['DormID']);
            $("#bed").val(res['BedID']);
            $("#isheader").val(res['IsHeader']);
        }
    };
}