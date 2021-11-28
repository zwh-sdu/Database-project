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
//文件流转BinaryString
function fixdata(data) { //文件流转BinaryString
    var o = "",
        l = 0,
        w = 10240;
    for(; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
    o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
    return o;
}
$(function(){
    $("#add_dorm_submit").click(function (){
        let dormid = $("#dormid").val();
        let dormcap = $("#dormcap").val();
        if(dormid===""){alert("宿舍号不能为空");return}
        if(dormcap===""){alert("宿舍容量不能为空");return}
        $.post("dormitory_add.php",
            {
                dormid:dormid,
                dormcap:dormcap,
            },
            function(data,status){
                if(status==="success"){
                    alert("添加成功")
                    window.location.href="dormitory_list.html"
                }else{
                    alert("提交失败");
                }
            });
    })
    $("#in").click(function (){
        $("#file").trigger("click");
    })
    $("#file").change(function(){
        var wb;
        var rABS=false;
        if(!this.files) {
            alert("错误")
            return;
        }
        var f = this.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            var data = e.target.result;
            if(rABS) {
                wb = XLSX.read(btoa(fixdata(data)), {//手动转化
                    type: 'base64'
                });
            } else {
                wb = XLSX.read(data, {
                    type: 'binary'
                });
            }
            //wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
            //wb.Sheets[Sheet名]获取第一个Sheet的数据
            //document.getElementById("demo").innerHTML= JSON.stringify( XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]) );
            //alert(JSON.stringify( XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]) ));
            //var data = JSON.stringify( XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]));
            // console.log(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]))
            $.post("dormitory_add_many.php",
                {
                    data:XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
                },
                function(data,status){
                    if(status==="success"){
                        data=JSON.parse(data)
                        alert("成功添加了 "+data+" 个宿舍")
                        window.location.href="dormitory_list.html"
                    }else{
                        alert("提交失败");
                    }
                });
        };
        if(rABS) {
            reader.readAsArrayBuffer(f);
        } else {
            reader.readAsBinaryString(f);
        }
    })
})