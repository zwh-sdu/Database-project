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
    $("#add_admin_submit").click(function (){
        let userid = $("#userid").val();
        let password = $("#password").val();
        if(userid===""){alert("用户名不能为空");return}
        if(password===""){alert("密码不能为空");return}
        $.post("admin_add.php",
            {
                userid:userid,
                password:password,
            },
            function(data,status){
                if(status==="success"){
                    alert("添加成功")
                    window.location.href="admin_list.html"
                }else{
                    alert("提交失败");
                }
            });
    })
})