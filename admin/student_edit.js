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
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if(r != null) return decodeURI(r[2]);
    return null;
}
$(function(){
    $("#edit_stu_submit").click(function (){
        let stuid = $("#stuid").val();
        let stuname = $("#stuname").val();
        let stusex = $("#stusex").val();
        let stumajor = $("#stumajor").val();
        let stuclass = $("#stuclass").val();
        let stugrade = $("#stugrade").val();
        let dorm = $("#dorm").val();
        let bed = $("#bed").val();
        let isheader = $("#isheader").val();
        $.post("student_edit.php",
            {
                stuid:stuid,
                stuname:stuname,
                stusex:stusex,
                stumajor:stumajor,
                stuclass:stuclass,
                stugrade:stugrade,
                dorm:dorm,
                bed:bed,
                isheader:isheader
            },
            function(data,status){
                if(status==="success"){
                    data=JSON.parse(data)
                    if(data){
                        alert("编辑成功")
                        window.location.href='student_list.html'
                    }else{
                        alert("编辑失败")
                    }
                }else{
                    alert("提交失败");
                }
            });
    })
})
$(document).ready(function () {
    let stuid=GetQueryString('stuid');
    $.post("student_edit_show.php",
        {
            stuid:stuid
        },
        function(data,status){
        if(status==="success"){
            data=JSON.parse(data)
            $("#stuid").val(data['StuID']);
            $("#stuname").val(data['StuName']);
            $("#stusex").val(data['StuSex']);
            $("#stumajor").val(data['StuMajor']);
            $("#stuclass").val(data['StuClass']);
            $("#stugrade").val(data['StuGrade']);
            $("#dorm").val(data['DormID']);
            $("#bed").val(data['BedID']);
            $("#isheader").val(data['IsHeader']);
        }else{
            alert("提交失败");
        }
        });
})