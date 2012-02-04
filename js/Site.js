$(function () {
  (function () {

    $('#menu-switch').hover(showMenu, null);
    $('#menu').hover(null, hideMenu);

    function hideMenu() {
      //console.log('menu hover out');
      $('#menu').hide();
    }

    function showMenu() {
//      alert('show menu')
//      console.log('switch hover in')
      $('#menu').show();
    }
  })();

})



           