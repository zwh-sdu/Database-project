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
window.onload=function(){show()}
function show()
{
    let stuid = getcookie('stuid')
    let choose=$("input[name='ut']:checked").val()
    let url = 'repairment_list.php?stuid='+stuid+'&choose='+choose;
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', url, true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            let res = httpRequest.responseText;
            res = JSON.parse(res)
            let result=""
            if(res!==null){
                for(let i=0;i<res.length;i++){
                    result+='<tr>'
                    result+='<td class="center">'+res[i]["DormID"]+'</td>'
                    result+='<td class="center">'+res[i]['SubmitTime']+'</td>'
                    result+='<td class="center">'+res[i]['SubmitIssue']+'</td>'
                    result+='<td class="center">'+res[i]['RepTime']+'</td>'
                    result+='<td class="center">'+res[i]['RepIssue']+'</td>'
                    result+='<td class="center">'+res[i]['IsSolved']+'</td>'
                    result+='<td class="center">'+res[i]['Note']+'</td>'
                    result+='</tr>'
                }
            }
            document.getElementById('change').innerHTML = result
        }
    };
}