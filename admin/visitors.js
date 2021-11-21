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
        let name = $("#name").val();
        let phone = $("#phone").val();
        let stuid = $("#stuid").val();
        let stuname = $("#stuname").val();
        let dorm = $("#dorm").val();
        let arrive = $("#arrive").val();
        let leave=$("#leave").val();
        let admin=$("#admin").val();
        let purpose=$("#purpose").val();
        if(name===""){alert("姓名不能为空");return}
        if(phone===""){alert("联系方式不能为空");return}
        if(stuid===""){alert("学号不能为空");return}
        if(stuname===""){alert("学生不存在");return}
        if(arrive===""){alert("来访时间不能为空");return}
        if(leave===""){alert("离开时间不能为空");return}
        if(leave<arrive){alert("离开时间必须晚于来访时间");return}
        $.post("visitors.php",
            {
                name:name,
                phone:phone,
                stuid:stuid,
                arrive:arrive,
                leave:leave,
                admin:admin,
                dorm:dorm,
                purpose:purpose
            },
            function(data,status){
                if(status==="success"){
                    alert("添加成功");
                    window.location.href="visitors.html";
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
                    $("#dorm").val(res['DormID'])
                }else{
                    alert("查找名字失败");
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