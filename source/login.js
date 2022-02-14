// $(document).ready(function () {
//     //粒子背景特效
//     $('body').particleground({
//         dotColor: '#5cbdaa',
//         lineColor: '#5cbdaa'
//     });
//     //测试提交，对接程序删除即可
//     $(".submit_btn").click(function () {
//         location.href = "index.html";
//     });
// });
// //图片移动方法
// //声明全局变量
// var x =0;
// var y =0;    //移动的值
// //声明变量 三目运算时使用
// var xflag = true;
// var yflag = true;
// var timer = null;
// function move(){
//     var L=0;
//     var T=0;        //图片初始位置
//     var img =  document.getElementById("imgfloat")
//     //clientWidth  可视化区域的宽   offsetWidth 宽度包含(边框,边距)
//     //图片向左或右移动的距离
//     var R =(document.documentElement.clientWidth) - (img.offsetWidth);
//     //图片向下或上移动的距离
//     var B = (document.documentElement.clientHeight) - (img.offsetHeight);
//     /*移动的值*/
//     img.style.position="absolute";
//     img.style.left=(x+document.documentElement.scrollLeft)+"px";
//     img.style.top=(y+document.documentElement.scrollTop)+"px";
//     //左右移动一次的值
//     x = x +(xflag?5:-5);
//     if(x<L){undefined
//         xflag=true;
//         x=L;
//     }
//     if(x>=R){undefined
//         xflag=false;
//         x=R;
//     }
//     //上下移动一次的值
//     y = y +(yflag?3:-3);
//     if(y<T){undefined
//         yflag=true;
//         y=T;
//     }
//     if(y>=B){undefined
//         yflag=false;
//         y=B;
//     }
//     //定时器  一秒移动一次
//     timer= setTimeout(move,100);
// }
// window.onload=function(){
//     move();
// //     //DOM2  绑定事件
// // //获取漂浮广告的div  鼠标移动上去图片停止浮动
// //     document.getElementById("imgfloat").addEventListener("mousemove",function(){undefined
// //         clearTimeout(timer);
// //     })
// //     document.getElementById("imgfloat").addEventListener("mouseout",function(){undefined
// //         timer= setTimeout(move,100);
// //     })
// // //点击小叉 隐藏广告
// //     document.getElementById("imgclose").addEventListener("click",function(){undefined
// //         document.getElementById("imgfloat").style.display="none"
// //     })
// }
