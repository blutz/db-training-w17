(function () {
  $('[data-menu-name]').hide();
  $('[data-menu-click]').click(function(e) {
    e.preventDefault();
    var target = $(e.target);
    var menuName = target.data('menu-click');
    $('[data-menu-name]').hide()
    $('[data-menu-name='+menuName+']').show();
  });
})();