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
        let date = $("#date").val();
        let type = $("#type").val();
        let dorm = $("#dorm").val();
        let score = $("#score").val();
        let admin = $("#admin").val();
        let note = $("#note").val();
        if(date===""){alert("时间不能为空");return}
        if(type===""){alert("检查类型不能为空");return}
        if(dorm===""){alert("宿舍号不能为空");return}
        if(score===""){alert("得分不能为空");return}
        // $.ajax({
        //     url: "edit_inspection.php",
        //     type: "POST",
        //     async: false,
        //     data:
        //         {
        //             date: date,
        //             type: type,
        //             dorm: dorm,
        //             score: score,
        //             admin: admin,
        //             note: note
        //         },
        //     dataType: "json",
        //     success: function () {
        //         alert("callback");
        //     },
        //     error: function (xhr) {
        //         alert("error");
        //     }
        // })
        $.ajaxSettings.async=false
        $.post("edit_inspection.php",
        {
            date:date,
            type:type,
            dorm:dorm,
            score:score,
            admin:admin,
            note:note
        },
        function(data,status){
            if(status==="success"){
                alert("添加成功");
                window.location.reload();
            }else{
                alert("提交失败");
            }
        });
    })
})
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
window.onload=function(){
    let accountid=getcookie('accountid')
    $("#admin").val(accountid)
}