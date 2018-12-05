/**
 * Created by Administrator on 2018/11/7.
 */


import $ from 'jquery'
import '../css/index.css'
import '../css/index.less'
import '../css/index.scss'

$(function () {
    $("li:odd").css('backgroundColor','orange')
    $("li:even").css('backgroundColor',function () {
        return "#"+"D97634"
    })
});
