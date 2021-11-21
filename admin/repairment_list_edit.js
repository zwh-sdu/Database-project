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
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if(r != null) return decodeURI(r[2]);
    return null;
}
window.onload = function()
{
    let httpRequest = new XMLHttpRequest();
    let repid=GetQueryString('repid');
    let url = 'repairment_getinfo.php?repid='+repid;
    httpRequest.open('GET', url, true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var res = httpRequest.responseText;
            res = JSON.parse(res)
            $("#dorm").text(res[0]['DormID']);
            $("#time").text(res[0]['SubmitTime']);
            $("#issue").text(res[0]['SubmitIssue']);
        }
    };
}
function submitissue(){
    let repid=GetQueryString('repid')
    let is=document.getElementById('is').value
    let reptime=document.getElementById('reptime').value
    let reply=document.getElementById('reply').value
    if(reptime===""){
        alert("维修时间不能为空")
        return
    }
    var httpRequest = new XMLHttpRequest();
    var url = 'repairment_list_edit.php?repid='+repid+'&is='+is+'&reptime='+reptime+'&reply='+reply;
    httpRequest.open('GET', url, true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            alert("处理成功")
            window.location.href='repairment_list.html'
        }
    }
}