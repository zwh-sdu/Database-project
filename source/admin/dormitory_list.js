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
window.onload=function(){
    $.ajaxSettings.async = false;
    $.post("dormitory_list.php", {},
        function(data,status){
            if(status==="success"){
                if(data==""){
                    alert("没查询到相关宿舍")
                    return
                }
                let res=JSON.parse(data)
                // console.log(res)
                let result=""
                for(let i=0;i<res.length;i++){
                    result+='<tr>'
                    result+='<td class="center">'+res[i]["DormID"]+'</td>'
                    result+='<td class="center">'+res[i]['DormCap']+'</td>'
                    result+='<td class="center">'+res[i]['count']+'</td>'
                    result+='<td class="center">'+res[i]['header']+'</td>'
                    result+='<td class="center">'+res[i]['avg']+'</td>'
                    result+='<td class="center"><a title="详情" class="link_icon">详情'
                    result+='<a title="删除" class="link_icon1">删除</td>'
                    result+='</tr>'
                }
                $('#tb').html(result)
                // 查看宿舍具体信息
                $(".link_icon").click(function (){
                    let dormid=$(this).parent().siblings()[0].innerText;
                    let dormcap=$(this).parent().siblings()[1].innerText;
                    window.location.href="dormitory_detail.html?dormid="+dormid+"&dormcap="+dormcap
                })
                // 删除宿舍操作
                $(".link_icon1").click(function (){
                    let dormid=$(this).parent().siblings()[0].innerText
                    if(confirm("确定删除宿舍："+dormid+" ？")){
                        $.post("dormitory_delete.php",
                            {
                                dormid:dormid
                            },
                            function(data,status){
                                if(status==="success"){
                                    alert("删除成功")
                                    window.onload()
                                }else{
                                    alert("删除失败");
                                }
                            });
                    }
                })
            }else{
                alert("获取宿舍信息失败");
            }
        });

//table分页
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
$(function(){
    $(".group_btn").click(function (){
        let dormid=$("#dormid").val();
        $.post("dormitory_list_search.php",
            {
                dormid:dormid,
            },
            function(data,status){
                if(status==="success"){
                    if(data==""){
                        alert("查找的宿舍不存在")
                        return
                    }
                    let res=JSON.parse(data)
                    let result=""
                    for(let i=0;i<res.length;i++){
                        result+='<tr>'
                        result+='<td class="center">'+res[i]["DormID"]+'</td>'
                        result+='<td class="center">'+res[i]['DormCap']+'</td>'
                        result+='<td class="center">'+res[i]['count']+'</td>'
                        result+='<td class="center">'+res[i]['header']+'</td>'
                        result+='<td class="center">'+res[i]['avg']+'</td>'
                        result+='<td class="center"><a title="详情" class="link_icon">详情'
                        result+='<a title="删除" class="link_icon1">删除</td>'
                        result+='</tr>'
                    }
                    $('#tb').html(result)
                    // 查看宿舍具体信息
                    $(".link_icon").click(function (){
                        let dormid=$(this).parent().siblings()[0].innerText;
                        window.location.href="dormitory_detail.html?dormid="+dormid
                    })
                    // 删除宿舍操作
                    $(".link_icon1").click(function (){
                        let dormid=$(this).parent().siblings()[0].innerText
                        if(confirm("确定删除宿舍："+dormid+" ？")){
                            $.post("dormitory_delete.php",
                                {
                                    dormid:dormid
                                },
                                function(data,status){
                                    if(status==="success"){
                                        alert("删除成功")
                                        window.onload()
                                    }else{
                                        alert("删除失败");
                                    }
                                });
                        }
                    })
                }else{
                    alert("获取学生信息失败");
                }
            });
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
    })
})
