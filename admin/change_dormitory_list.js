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
    $.post("change_dormitory_list.php", {},
        function(data,status){
            if(status==="success"){
                if(data===""){alert("没有更换宿舍记录");return}
                let res=JSON.parse(data)
                let result=""
                for(let i=0;i<res.length;i++){
                    result+='<tr>'
                    result+='<td class="center">'+res[i]["StuID"]+'</td>'
                    result+='<td class="center">'+res[i]['StuName']+'</td>'
                    result+='<td class="center">'+res[i]['Date']+'</td>'
                    result+='<td class="center">'+res[i]['OldDorm']+'</td>'
                    result+='<td class="center">'+res[i]['NewDorm']+'</td>'
                    result+='<td class="center">'+res[i]['Reason']+'</td>'
                    result+='</tr>'
                }
                $('#tb').html(result)
            }else{
                alert("获取学生信息失败");
            }
        });
}