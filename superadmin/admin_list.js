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
    $.post("admin_list.php", {},
        function(data,status){
            if(status==="success"){
                let res=JSON.parse(data)
                let result=""
                for(let i=0;i<res.length;i++){
                    result+='<tr>'
                    result+='<td class="center">'+res[i]["UserId"]+'</td>'
                    result+='<td class="center">'+res[i]['UserPwd']+'</td>'
                    result+='<td class="center"><a title="删除" class="link_icon">删除</a></td>'
                    result+='</tr>'
                }
                $('#tb').html(result)
                // 删除管理员操作
                $(".link_icon").click(function (){
                    let userid=$(this).parent().siblings()[0].innerText
                    if(confirm("确定删除用户名为："+userid+" 的管理员？")){
                        $.post("admin_delete.php",
                            {
                                userid:userid
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
                alert("获取管理员信息失败");
            }
        });
}