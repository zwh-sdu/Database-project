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
        let olddorm = $("#old").val();
        let newdorm = $("#new").val();
        let date = $("#date").val();
        let reason=$("#reason").val();
        if(stuid===""){alert("学号不能为空");return}
        if(stuname===""){alert("学生不存在");return}
        if(date===""){alert("换宿舍日期不能为空");return}
        if(olddorm===newdorm){alert("新旧宿舍不能相同");return}
        $.post("change_dorm.php",
            {
                stuid:stuid,
                stuname:stuname,
                olddorm:olddorm,
                newdorm:newdorm,
                date:date,
                reason:reason
            },
            function(data,status){
                if(status==="success"){
                    alert("更换成功")
                    window.location.href="change_dormitory.html"
                }else{
                    alert("提交失败");
                }
            });
    })
    $("#stuid").change(function (){
        $.post("getnamedorm.php",
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
                    $("#old").val(res['DormID'])
                }else{
                    alert("查找名字失败");
                }
            });
    })
})