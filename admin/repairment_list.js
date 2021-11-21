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
window.onload=function(){show()}
function show()
{
    let choose=$("input[name='ut']:checked").val()
    let url = 'repairment_list.php?choose='+choose;
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
                    result+='<td class="center" style="display: none">'+res[i]["RepID"]+'</td>'
                    result+='<td class="center">'+res[i]["DormID"]+'</td>'
                    result+='<td class="center">'+res[i]['SubmitTime']+'</td>'
                    result+='<td class="center">'+res[i]['SubmitIssue']+'</td>'
                    result+='<td class="center">'+res[i]['RepTime']+'</td>'
                    result+='<td class="center">'+res[i]['RepIssue']+'</td>'
                    result+='<td class="center">'+res[i]['IsSolved']+'</td>'
                    result+='<td class="center"><a title="操作" class="link_icon">操作</a></td>'
                    result+='</tr>'
                }
            }
            console.log(res)
            document.getElementById('change').innerHTML = result
            $(".link_icon").click(function (){
                let repid=$(this).parent().siblings()[0].innerText;
                window.location.href="repairment_list_edit.html?repid="+repid
            })
        }
    };
}