#设计思路

* 为IE浏览器选择基本点
* breakpoint 选择 （container width:1200， 1000，...）
* 采用10列布局（不容易出现小数）
* 命名方式完全遵照bootstrap3 grid
* HTML 结构 最多只允许嵌套2层 （与bootstrap3 略微不同）


`````
<div class="container">
    <div class="row">
        <div class="col col-7">
            <div class="row">
                <div class="col col-5 offset-5">
                    <div class="col-wrap"></div>
                </div>
            </div>
        </div>
        <div class="col col-3">
            <div class="row">
                <div class="col col-7 push-3">
                    <div class="col-wrap"></div>
                </div>
                <div class="col col-3 pull-7">
                    <div class="col-wrap"></div>
                </div>
            </div>
        </div>
    </div>
</div>
`````

> ##notice
> - IE7和IE6 像素单位 只支持整数 3px正确 3.5px正确  百分比单位 支持小数点后1位 30.5%正确 30.33%错误
> - 现代浏览器保留小数点后3位.


> ##已知缺陷
> - 难以实现3列等宽布局
