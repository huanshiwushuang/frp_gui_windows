/*
 * @Author: your name
 * @Date: 2020-03-07 11:01:06
 * @LastEditTime: 2020-03-15 23:42:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \frp_gui_windows\src\js\windowStyle.js
 */
// API参考地址：https://www.cnblogs.com/vitrox/p/5135642.html
document.write(
  [
    '<HTA:APPLICATION',
    // 可通过ID访问其他属性
    '    id="App" ',
    '    icon="./img/ico.ico" ',
    // 区分实例是否唯一
    '    applicationName="frp_gui_windows" ',
    // 边框类型
    // 默认值Thick【粗边框】、Dialog 对话框【大小不可调整】、None  无边框【无标题栏】、Thin 【窄边框】
    '    border="None" ',
    // 边框样式
    // Normal     普通
    // Complex    凹凸格式组合边框
    // Raised     凸出的3D边框
    // Static     3D边框格式
    // Sunken     凹进的3D边框
    '    borderSytle="Raised" ',
    // 是否显示窗口顶部部分
    '    caption="no"',
    // 是否显示页面右键菜单
    '    contextMenu="no" ',
    // 是否显示内部边框的3D边界，默认值Yes
    '    innerBorder="no" ',
    // 是否在本窗口加载新navigate(url)的链接
    '    navigable="yes" ',
    '    maximizeButton="yes" ',
    '    minimizeButton="yes" ',
    // 是否在页面右侧显示垂直滚动条，默认值是Yes
    '    scroll="no"',
    // 设置滚动条是3D(No)或者平面的(Yes)
    '    scrollFlat="yes" ',
    // 设置内容是否可以被鼠标或键盘选中
    '    selection="yes" ',
    '    commandLine="保存了HTA程序的启动参数，无法设置，是受调用传递的参数控制的" ',
    '    showInTaskbar="yes"',
    // 是否实例唯一，applicationName 区分
    '    singleInstance="yes" ',
    // 是否允许显示标题栏右键菜单，默认值是Yes【如果为no，那么 图标 和 右侧的最大最小关闭按钮也会不见】
    '    sysMenu="yes" ',
    '    version="1.0.0" ',
    // 设置HTA窗口的显示类型，默认值为Normal【其他：Minimize、Maximize】
    '    windowState="Normal"',
    ' />'
  ].join(' ')
)

// // 在窗口出现之前-可以考虑设置窗口的位置和大小等
var config = {
    width: 1000,
    height: 600
}
// // 没有设置 windowState 才生效
window.resizeTo(config.width, config.height);
window.moveTo((window.screen.width - config.width) / 2, (window.screen.height - config.height) / 2);