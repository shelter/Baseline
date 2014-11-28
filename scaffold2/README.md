#设计思路

* 为IE浏览器选择基本点 1024 分辨率
* breakpoint 选择


|屏幕宽度(screen with)|容器宽度(container width)|列间距(gutter)
|:-------------------|:-----------------------|:-------------
|> 1200px            |1170px                  |30px
|1200 - 992px        |940px                   |20px
|992 - 768px         |724px                   |20px
|< 768px             |100%                    |30px


* 采用12列布局定寛
* 命名方式完全遵照bootstrap3 grid

> ##notice
> - IE7和IE6 像素单位 只支持整数 3px正确 3.5px正确  百分比单位 支持小数点后1位 30.5%正确 30.33%错误
> - 现代浏览器保留小数点后3位.

> [关于gulp
(http://blog.webbb.be/command-not-found-node-npm/)





