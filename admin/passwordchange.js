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
window.onload = function(){
    let accountid=getcookie('accountid')
    $("#accountid").val(accountid)
}
function checknewpassword(){
    let password_old=document.getElementById('prepswValue').value
    let password_new=document.getElementById('aftpswValue').value
    let password_new2=document.getElementById('aftpswValue2').value
    let account_id=getcookie('accountid')
    let password_real=getcookie('pass')
    if(password_old===password_real){//
        if(password_new===password_new2){
            let httpRequest = new XMLHttpRequest();
            let url = 'passwordchange.php?accountid='+account_id+'&password_new='+password_new;
            httpRequest.open('GET', url, true);
            httpRequest.send();
            httpRequest.onreadystatechange = function () {
                if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                    alert("修改密码成功，请重新登录")
                    location.href='../login.html'
                }
            };

        }else{
            alert("新密码不一致")
        }
    }else{
        alert("原密码输入错误")
    }
}