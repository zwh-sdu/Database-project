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
            var pageSize=12;  //???????????????????????????
            var curPage=0;   //?????????curPage???
            var len;         //?????????
            var page;        //?????????
            $(function(){
                len =$("#show_tab tr").length-1;   //????????????
                page=len % pageSize==0 ? len/pageSize : Math.floor(len/pageSize)+1;//?????????????????????????????????
                // console.log("len:"+len+"page:"+page);
                document.getElementById("page").value=page;
                curPage=1;
                displayPage();//???????????????
                $("#nextpage").click(function(){//?????????
                    if(curPage<page){
                        curPage+=1;
                    }
                    else{
                        alert("?????????????????????");
                    }
                    displayPage();
                });
                $("#lastpage").click(function(){//?????????
                    if(curPage>1){
                        curPage-=1;
                    }
                    else{
                        alert("??????????????????");
                    }
                    displayPage();
                });
                $("#npage").click(function(){//?????????????????????
                    var npage=parseInt(document.getElementById("curPage").value);
                    if(npage>page||npage<1){
                        alert("gaiyebucunzai");
                    }
                    else{
                        curPage=npage;
                    }
                    displayPage();
                });
            });
            function displayPage(){
                var begin=(curPage-1)*pageSize;//???????????????
                var end = begin + pageSize;
                // console.log("  begin:"+len+"   end:"+end);
                if(end > len ) end=len;
                $("#show_tab tr").hide();
                $("#show_tab tr").each(function(i){
                    if(i-1>=begin && i-1<end)//?????????page????????????
                    {
                        $("#show_tab_one").show();
                        $(this).show();
                        document.getElementById("curPage").value=curPage;
                    }
                });
            }
            $("#ps").click(function(){
                curPage=0;   //?????????curPage???
                pageSize=parseInt(document.getElementById("pageSize").value);
                len =$("#show_tab tr").length-1;   //????????????
                page=len % pageSize==0 ? len/pageSize : Math.floor(len/pageSize)+1;//?????????????????????????????????
                // console.log("len:"+len+"   page:"+page);
                document.getElementById("page").value=page;
                curPage=1;
                displayPage();//???????????????
            })
        }
    };
}