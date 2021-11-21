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
    $.post("inspection_list.php", {},
        function(data,status){
            if(status==="success"){
                if(data===""){alert("没有检查记录");return}
                let res=JSON.parse(data)
                let result=""
                for(let i=0;i<res.length;i++){
                    result+='<tr>'
                    result+='<td class="center">'+res[i]["DormID"]+'</td>'
                    result+='<td class="center">'+res[i]['InspType']+'</td>'
                    result+='<td class="center">'+res[i]['InspScore']+'</td>'
                    result+='<td class="center">'+res[i]['InspTime']+'</td>'
                    result+='<td class="center">'+res[i]['Inspector']+'</td>'
                    result+='<td class="center">'+res[i]['Note']+'</td>'
                    result+='</tr>'
                }
                $('#tb').html(result)
            }else{
                alert("获取学生信息失败");
            }
        });
}
$(function(){
    $(".group_btn").click(function (){
        let dorm=$("#dorm").val();
        let type=$("#type").val();
        let score_less=$("#score_less").val();
        let score_more=$("#score_more").val();
        $.post("inspection_list_search.php",
            {
                dorm:dorm,
                type:type,
                score_less:score_less,
                score_more:score_more
            },
            function(data,status){
                if(status==="success"){
                    if(data==""){
                        alert("查找的检查记录不存在")
                        return
                    }
                    let res=JSON.parse(data)
                    let result=""
                    for(let i=0;i<res.length;i++){
                        result+='<tr>'
                        result+='<td class="center">'+res[i]["DormID"]+'</td>'
                        result+='<td class="center">'+res[i]['InspType']+'</td>'
                        result+='<td class="center">'+res[i]['InspScore']+'</td>'
                        result+='<td class="center">'+res[i]['InspTime']+'</td>'
                        result+='<td class="center">'+res[i]['Inspector']+'</td>'
                        result+='<td class="center">'+res[i]['Note']+'</td>'
                        result+='</tr>'
                    }
                    $('#tb').html(result)
                }else{
                    alert("获取学生信息失败");
                }
            });
    })
})