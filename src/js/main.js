/*
 * @Author: your name
 * @Date: 2020-03-07 11:01:06
 * @LastEditTime: 2020-03-16 10:53:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \frp_gui_windows\src\js\main.js
 */
// 拖拽元素移动窗口【缺点是，如果移动速度过快，鼠标会移出去】
require(['view_drag'], function (func) {
    func(function (obj) {
        var h = obj.curr.screenX - obj.start.screenX;
        var v = obj.curr.screenY - obj.start.screenY;

        window.moveTo(obj.startWindowLeft + h, obj.startWindowTop + v);
    })
})
require([], function () {
    // $('#nav').on('dblclick', function () {
    //     window.
    // })
    var ws=new ActiveXObject("WScript.Shell")
})