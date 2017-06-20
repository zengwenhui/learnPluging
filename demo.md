#相关插件的描述地址：
>http://www.htmleaf.com/jQuery/Chart/201507182251.html   //移动端兼容不好 svg画图
#canvas方法实现画实心园





>canvas画图的参考  http://caibaojian.com/canvas-circular.html
>canvas的一些api：   http://javascript.ruanyifeng.com/htmlapi/canvas.html
arc方法用来绘制扇形。

ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

arc方法的x和y参数是圆心坐标，radius是半径，startAngle和endAngle则是扇形的起始角度和终止角度（以弧度表示），anticlockwise表示做图时应该逆时针画（true）还是顺时针画（false）。