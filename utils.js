// utils.js - 全局共享工具函数
(function () {
  'use strict';

  /**
   * 获取当前北京日期 (YYYY-MM-DD)
   * 基于 UTC 偏移计算，不依赖浏览器时区设置
   */
  window.getBeijingDate = function () {
    var now = new Date();
    var utc = now.getTime() + now.getTimezoneOffset() * 60000;
    return new Date(utc + 8 * 3600000).toLocaleDateString('sv');
  };
})();