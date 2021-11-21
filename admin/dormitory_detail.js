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
$(document).ready(function () {
    let dormid=GetQueryString('dormid');
    let dormcap=GetQueryString('dormcap');
    $("#dormid").val(dormid)
    $("#dormcap").val(dormcap)
    $.post("dormitory_detail.php",
        {
            dormid:dormid
        },
        function(data,status){
            if(status==="success"){
                let res=JSON.parse(data)
                let result=""
                for(let i=0;i<res.length;i++){
                    result+='<tr>'
                    result+='<td class="center">'+res[i]["StuID"]+'</td>'
                    result+='<td class="center">'+res[i]['StuName']+'</td>'
                    result+='<td class="center">'+res[i]['StuSex']+'</td>'
                    result+='<td class="center">'+res[i]['BedID']+'</td>'
                    result+='<td class="center">'+res[i]['IsHeader']+'</td>'
                    result+='</tr>'
                }
                $('#tb').html(result)
            }else{
                alert("提交失败");
            }
        });
    $.post("dormitory_detail_score.php",
        {
            dormid:dormid
        },
        function(data,status){
            if(status==="success"){
                let res=JSON.parse(data)
                $('#avg').val(res[0]['avg'])
                $('#good').val(res[1]['good'])
                $('#bad').val(res[2]['bad'])
            }else{
                alert("提交失败");
            }
        });
})