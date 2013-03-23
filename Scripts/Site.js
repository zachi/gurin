$(function () {
  (function () {

    $('#menu-switch').hover(showMenu, null);
    $('#header').hover(null, hideMenu);

    function hideMenu() {
      $('#menu').hide();
      $('body').removeClass('show-menu')
    }

    function showMenu() {
      $('#menu').show();
      $('body').addClass('show-menu')
    }

    var urlParts = document.location.href.split('/');
    var category = urlParts[urlParts.length - 1].toLowerCase();
    $('body').addClass(category);


    //$('.parent-categoty').hover(showChilds, hideChilds);
    //function showChilds(src) {
    //  $(this).find('.childs-category').show();
    //}
    //function hideChilds(src) {
    //  $(this).find('.childs-category').hide();
    //}
  })();

})



           