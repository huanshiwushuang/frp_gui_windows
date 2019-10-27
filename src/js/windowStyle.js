/*
 * @Author: your name
 * @Date: 2019-10-25 20:12:58
 * @LastEditTime: 2019-10-27 02:40:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \studyd:\code\frp_gui_windows\src\js\windowStyle.js
 */
document.write(
  [
    '<HTA:APPLICATION',
    '    id="id" ',
    '    icon="./img/ico.ico" ',
    '    applicationName="frp_gui_windows" ',
    '    border="dialog" ',
    '    borderSytle="Sunken" ',
    '    caption="yes"',
    '    contextMenu="no" ',
    '    innerBorder="no" ',
    '    navigable="yes" ',
    '    maximizeButton="yes" ',
    '    minimizeButton="yes" ',
    '    scroll="yes"',
    '    scrollFlat="yes" ',
    '    selection="yes" ',
    '    commandLine="保存了HTA程序的启动参数，无法设置，是受调用传递的参数控制的" ',
    '    showInTaskbar="yes"',
    '    singleInstance="yes" ',
    '    sysMenu="yes" ',
    '    version="1.0.0" ',
    '    windowState="maximize" />'
  ].join(' ')
)

// 在窗口出现之前-可以考虑设置窗口的位置和大小等
var config = {
    width: 800,
    height: 400
}
// 没有设置 windowState 才生效
window.resizeTo(config.width, config.height);
// window.moveTo((window.screen.width - config.width) / 2, (window.screen.height - config.height) / 2);
setTimeout(function () {

    window.moveTo((window.screen.width - config.width) / 2, (window.screen.height - config.height) / 2);
},2000)