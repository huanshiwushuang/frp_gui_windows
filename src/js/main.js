// 窗口拖拽元素定位【缺点是，如果移动速度过快，鼠标会移出去】
require(['view_drag'], function (func) {
    func(function (obj) {
        var h = obj.curr.screenX - obj.start.screenX;
        var v = obj.curr.screenY - obj.start.screenY;

        window.moveTo(obj.startWindowLeft + h, obj.startWindowTop + v);
    })
})