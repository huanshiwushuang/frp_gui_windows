/*
 * @Author: your name
 * @Date: 2019-10-27 01:24:48
 * @LastEditTime: 2019-10-29 00:19:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \studyd:\code\frp_gui_windows\src\js\main.js
 */
require.config({
    baseUrl: './js',
    paths: {
        avalon: 'lib/avalon.shim',
        jquery: 'lib/jquery.min',
    },
    shim: {
        
    }
})

window.console.log(123)
require(['jquery'], function ($) {
    var i = 0;
    debugger
    console.log('gasjdhasjdhsjlk')
    $('body').on('mousemove', function (e) {
        
        console.log(e)
    })
})