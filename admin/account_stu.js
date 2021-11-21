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
    $.post("account_stu.php", {},
        function(data,status){
            if(status==="success"){
                let res=JSON.parse(data)
                let result=""
                for(let i=0;i<res.length;i++){
                    result+='<tr>'
                    result+='<td class="center">'+res[i]["StuID"]+'</td>'
                    result+='<td class="center">'+res[i]['StuName']+'</td>'
                    result+='<td class="center"><a title="编辑" class="link_icon">密码重置</a></td>'
                    result+='</tr>'
                }
                $('#tb').html(result)
                $(".link_icon").click(function (){
                    $stuid=$(this).parent().siblings()[0].innerText;
                    $.post("account_stu_p.php",
                        {
                            stuid:$stuid
                        },
                        function(data,status){
                            if(status==="success"){
                                alert("账号:"+$stuid+"的密码已经被重置为：88888888")
                            }else{
                                alert("提交失败");
                            }
                        });
                })
            }else{
                alert("提交失败");
            }
        });
}
$(document).ready(function () {
    $(".group_btn").click(function (){
        let search_id=$("#search_input").val()
        if(search_id!==""){
            $.post("account_search.php", {stuid:search_id},
                function(data,status){
                    if(status==="success"){
                        if(data!=""){
                            let res=JSON.parse(data)
                            let result=""
                            for(let i=0;i<res.length;i++){
                                result+='<tr>'
                                result+='<td class="center">'+res[i]["StuID"]+'</td>'
                                result+='<td class="center">'+res[i]['StuName']+'</td>'
                                result+='<td class="center"><a title="编辑" class="link_icon">密码重置</a></td>'
                                result+='</tr>'
                            }
                            if(result!="") {
                                $('#tb').html(result)
                                $(".link_icon").click(function () {
                                    $stuid = $(this).parent().siblings()[0].innerText;
                                    $.post("account_stu_p.php",
                                        {
                                            stuid: $stuid
                                        },
                                        function (data, status) {
                                            if (status === "success") {
                                                alert("账号:" + $stuid + "的密码已经被重置为：88888888")
                                            } else {
                                                alert("提交失败");
                                            }
                                        });
                                })
                            }
                        }else{
                            alert("查找的学号不存在")
                        }
                    }else{
                        alert("提交失败");
                    }
                });
        }else{
            window.onload()
        }
    })
})