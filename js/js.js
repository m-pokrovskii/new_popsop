$(function() {
  $('.form .form-text')
  	.focus(function() {
  		$(this).closest('.form').removeClass('inactive').addClass('active');
  	})

  $(document).click( function(event){
    console.log(event.target);
    if( $(event.target).closest(".form").length || $(event.target).closest(".form input").length || $(event.target).closest(".form button").length) 
      return;
    $(".form").removeClass('active').addClass('inactive');
    event.stopPropagation();
  });


  // $('.mr-menu').mouseleave(function(event) {
  //   $row = $('.maintainHover');
  //   deactivateSubmenu($row[0]);
  // });

  // $('.v-menu li').mouseleave(function(event) {
  //   deactivateSubmenu(this);
  // });

  // 

  var $glMenu = $(".v-menu");
  $glMenu.menuAim({
      activate: activateSubmenu,
      deactivate: deactivateSubmenu,
      closeMenuOnMouseLeave: true,
  });


  var $menu = $(".mr-menu__cat");
  $menu.menuAim({
      activate: activateSubmenu,
      deactivate: deactivateSubmenu,
      rowSelector: "> li > a",
  });

  function activateSubmenu(row) {
    var $row = $(row),
        $default = $('.default'),
        submenuId = $row.data("item"),
        $submenu = $("#" + submenuId);
    $default.removeClass('default');
    $submenu.css('display', 'block');
    $row.addClass('maintainHover');
  }

  function deactivateSubmenu(row) {
    var $row = $(row),
        submenuId = $row.data("item"),
        $submenu = $("#" + submenuId);
    $submenu.css('display', 'none');
    $row.removeClass('maintainHover');
  }

});

