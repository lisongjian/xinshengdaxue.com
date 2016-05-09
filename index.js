'use strict';

window.onload = function () {
  var bOk = false;
  var wx = navigator.userAgent.toLowerCase();
  if (wx.match(/MicroMessenger/i) == "micromessenger") {
    var oAndroidBtn = document.getElementById('android_btn');
    var oIosBtn = document.getElementById('ios_btn');
    var oAndroidGuide = document.getElementById('android-guide');
    var oIosGuide = document.getElementById('ios-guide');

    oAndroidBtn.onclick = function () {
      return isWx(oAndroidGuide);
    };

    oIosBtn.onclick = function () {
      return isWx(oIosGuide);
    };

    oAndroidGuide.onclick = function () {
      this.style.display = 'none';
      bOk = false;
    };

    oIosGuide.onclick = function () {
      this.style.display = 'none';
      bOk = false;
    };
  }

  function isWx(obj){
    obj.style.display = 'block';
    bOk = true;
    document.addEventListener('touchmove', function (ev) {
      if (bOk) {
        ev.preventDefault();
        ev.stopPropagation();
      }
    }, false);
    return false
  }
};
