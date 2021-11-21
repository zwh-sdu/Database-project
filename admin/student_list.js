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
    $.post("student_list.php", {},
        function(data,status){
            if(status==="success"){
                let res=JSON.parse(data)
                let result=""
                for(let i=0;i<res.length;i++){
                    result+='<tr>'
                    result+='<td class="center">'+res[i]["StuID"]+'</td>'
                    result+='<td class="center">'+res[i]['StuName']+'</td>'
                    result+='<td class="center">'+res[i]['StuSex']+'</td>'
                    result+='<td class="center">'+res[i]['DormID']+'</td>'
                    result+='<td class="center">'+res[i]['BedID']+'</td>'
                    result+='<td class="center">'+res[i]['IsHeader']+'</td>'
                    result+='<td class="center"><a title="编辑" class="link_icon">编辑</a><a title="删除" class="link_icon1">删除</a></td>'
                    result+='</tr>'
                }
                $('#tb').html(result)
                // 查看学生具体信息
                $(".link_icon").click(function (){
                    let stuid=$(this).parent().siblings()[0].innerText;
                    window.location.href="student_edit.html?stuid="+stuid
                })
                // 删除学生操作
                $(".link_icon1").click(function (){
                    let stuid=$(this).parent().siblings()[0].innerText
                    if(confirm("确定删除学号为："+stuid+" 的学生？")){
                        $.post("student_delete.php",
                            {
                                stuid:stuid
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
}
$(function(){
    $(".group_btn").click(function (){
        let stuid=$("#stuid").val();
        let stuname=$("#stuname").val();
        let stusex=$("#stusex").val();
        let stumajor=$("#stumajor").val();
        let stugrade=$("#stugrade").val();
        let stuclass=$("#stuclass").val();
        let dorm=$("#dorm").val();
        let isheader=$("#isheader").val();
        $.post("student_list_search.php",
            {
                stuid:stuid,
                stuname:stuname,
                stusex:stusex,
                stumajor:stumajor,
                stugrade:stugrade,
                stuclass:stuclass,
                dorm:dorm,
                isheader:isheader
            },
            function(data,status){
                if(status==="success"){
                    if(data==""){
                        alert("查找的学生不存在")
                        return
                    }
                    let res=JSON.parse(data)
                    let result=""
                    for(let i=0;i<res.length;i++){
                        result+='<tr>'
                        result+='<td class="center">'+res[i]["StuID"]+'</td>'
                        result+='<td class="center">'+res[i]['StuName']+'</td>'
                        result+='<td class="center">'+res[i]['StuSex']+'</td>'
                        result+='<td class="center">'+res[i]['DormID']+'</td>'
                        result+='<td class="center">'+res[i]['BedID']+'</td>'
                        result+='<td class="center">'+res[i]['IsHeader']+'</td>'
                        result+='<td class="center"><a title="编辑" class="link_icon">编辑</a><a title="删除" class="link_icon1">删除</a></td>'
                        result+='</tr>'
                    }
                    $('#tb').html(result)
                    // 查看学生具体信息
                    $(".link_icon").click(function (){
                        let stuid=$(this).parent().siblings()[0].innerText;
                        window.location.href="student_edit.html?stuid="+stuid
                    })
                    // 删除学生操作
                    $(".link_icon1").click(function (){
                        let stuid=$(this).parent().siblings()[0].innerText
                        if(confirm("确定删除学号为："+stuid+" 的学生？")){
                            $.post("student_delete.php",
                                {
                                    stuid:stuid
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
    })
})