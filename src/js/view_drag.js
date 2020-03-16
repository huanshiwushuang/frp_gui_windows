/*
 * @Author: your name
 * @Date: 2020-03-15 23:53:44
 * @LastEditTime: 2020-03-16 23:37:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \frp_gui_windows\src\js\view_drag.js
 */
define(function(){
    var isDown = false;
    var callback;
    // 参数定义初始化
    var params = {};
    resetParams()
    function resetParams() {
        params.start = null;
        params.curr = null;
        params.end = null;
        params.startWindowLeft = null;
        params.startWindowTop = null;
    }
    $('.view-drag').on('mousedown', function (e) {
        // isDown = true;
        // params.start = e
        // params.startWindowLeft = window.screenLeft
        // params.startWindowTop = window.screenTop
        var asd = window.DX.GetActiveWindow;
        window.DX.SendMessage(asd, 0x112, 61458, 0)
    }).on('mousemove', function (e) {
        if (isDown) {
            params.curr = e;
            callback(params);
        }
    }).on('mouseover', function () {
        isDown = false;
    }).on('mouseout', function (e) {
        isDown = false;
    })
    // 任何地方松开鼠标都是结束
    $(document).on('mouseup', function (e) {
        isDown = false;
        params.end = e;
    })
    return function (cb) {
        callback = cb
    }
})