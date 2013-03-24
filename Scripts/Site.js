$(function () {
  (function () {

    function bindEvents() {
      $('#menu-switch').on('mouseover', showMenu);
      $('#header').hover(null, hideMenu);
    }

    function hideMenu() {
      $('#menu').hide();
      $('body').removeClass('show-menu')
    }

    function showMenu() {
      $('#menu').show();
      $('body').addClass('show-menu')
    }

    function toggleMenu() {
      if ($('body').hasClass('show-menu'))
        hideMenu();
      else
        showMenu();
    }

    function setBodyWithCategory() {
      var urlParts = document.location.href.split('/');
      var category = urlParts[urlParts.length - 1].toLowerCase();
      $('body').addClass(category);
    }

    function bindEventsForTouchSupport() {
      $('body').on('click', function (event) {

        var src = $(event.target || event.srcElement);

        if (src.attr('id') == 'menu-switch')
          toggleMenu();
        if (src.attr('id') != 'header' && src.parents('#header').length == 0)
          hideMenu();

      })
    }

    bindEvents();

    bindEventsForTouchSupport();

    setBodyWithCategory();

    
  })();

})



           