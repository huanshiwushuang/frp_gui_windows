/*
 * @Author: your name
 * @Date: 2019-10-27 01:24:48
 * @LastEditTime: 2019-10-27 02:33:43
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

require(['jquery'], function ($) {
    alert($)
    // $('body').on('mousemove', function () {console.log(Date.now())})
})