//注意：导航 依赖 element 模块，否则无法进行功能性操作
layui.use(['element', 'jquery'], function(){
  var element = layui.element;
  const $ = layui.$ //重点处

  const $mask = $('.mask');


  $('.menu-btn').click(function () { 
    $mask.removeClass("hidden");
  });
  $('.black').click(function () { 
    console.log(1)
    $mask.addClass("hidden");
   })
});