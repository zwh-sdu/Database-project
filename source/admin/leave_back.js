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
$(function(){
    $(".link_btn").click(function (){
        let stuid = $("#stuid").val();
        let stuname = $("#stuname").val();
        let leave_t = $("#leave").val();
        let back_t=$("#back").val();
        let reason=$("#reason").val();
        if(stuid===""){alert("学号不能为空");return}
        if(stuname===""){alert("学生不存在");return}
        if(leave_t===""){alert("离校日期不能为空");return}
        if(back_t===""){alert("返回日期不能为空");return}
        if(leave_t>back_t){alert("返校日期不得早于离校日期");return}
        $.post("leave_back.php",
            {
                stuid:stuid,
                stuname:stuname,
                leave_t:leave_t,
                back_t:back_t,
                reason:reason
            },
            function(data,status){
                if(status==="success"){
                    alert("添加成功")
                    window.location.href="leave_back.html"
                }else{
                    alert("提交失败");
                }
            });
    })
    $("#stuid").change(function (){
        $.post("getname.php",
            {
                stuid:$("#stuid").val()
            },
            function(data,status){
                if(status==="success"){
                    if(data===""){
                        alert("该学号不存在")
                        return
                    }
                    let res=JSON.parse(data)
                    $("#stuname").val(res['StuName'])
                }else{
                    alert("查找名字失败");
                }
            });
    })
})