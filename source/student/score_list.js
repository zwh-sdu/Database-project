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
    var url = 'score_list.php?stuid='+stuid;
    httpRequest.open('GET', url, true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var res = httpRequest.responseText;
            res = JSON.parse(res)
            let result="";
            for(let i=0;i<res.length;i++){
                result+='<tr>'
                result+='<td class="center">'+res[i]["DormID"]+'</td>'
                result+='<td class="center">'+res[i]['Inspector']+'</td>'
                result+='<td class="center">'+res[i]['InspTime']+'</td>'
                result+='<td class="center">'+res[i]['InspType']+'</td>'
                result+='<td class="center">'+res[i]['InspScore']+'</td>'
                result+='<td class="center">'+res[i]['Note']+'</td>'
                result+='</tr>'
            }
            // console.log(result)
            document.getElementById('inspect').innerHTML = result
            var pageSize=12;  //每页显示的记录条数
            var curPage=0;   //显示第curPage页
            var len;         //总行数
            var page;        //总页数
            $(function(){
                len =$("#show_tab tr").length-1;   //去掉表头
                page=len % pageSize==0 ? len/pageSize : Math.floor(len/pageSize)+1;//根据记录条数，计算页数
                // console.log("len:"+len+"page:"+page);
                document.getElementById("page").value=page;
                curPage=1;
                displayPage();//显示第一页
                $("#nextpage").click(function(){//下一页
                    if(curPage<page){
                        curPage+=1;
                    }
                    else{
                        alert("已经是最后一页");
                    }
                    displayPage();
                });
                $("#lastpage").click(function(){//上一页
                    if(curPage>1){
                        curPage-=1;
                    }
                    else{
                        alert("已经是第一页");
                    }
                    displayPage();
                });
                $("#npage").click(function(){//跳到固定某一页
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
                var begin=(curPage-1)*pageSize;//起始记录号
                var end = begin + pageSize;
                // console.log("  begin:"+len+"   end:"+end);
                if(end > len ) end=len;
                $("#show_tab tr").hide();
                $("#show_tab tr").each(function(i){
                    if(i-1>=begin && i-1<end)//显示第page页的记录
                    {
                        $("#show_tab_one").show();
                        $(this).show();
                        document.getElementById("curPage").value=curPage;
                    }
                });
            }
            $("#ps").click(function(){
                curPage=0;   //显示第curPage页
                pageSize=parseInt(document.getElementById("pageSize").value);
                len =$("#show_tab tr").length-1;   //去掉表头
                page=len % pageSize==0 ? len/pageSize : Math.floor(len/pageSize)+1;//根据记录条数，计算页数
                // console.log("len:"+len+"   page:"+page);
                document.getElementById("page").value=page;
                curPage=1;
                displayPage();//显示第一页
            })
        }
    };
}