$(function() {
  $('.form .form-text')
    .focus(animateOn);

  $(document).click( function(event){
    if( $(event.target).closest(".form").length || $(event.target).closest(".form input").length || $(event.target).closest(".form button").length) 
      return;
    $form = $('.form');
    animateOff($form);
    event.stopPropagation();
  });


function animateOn (e) {
  $form = $(this).closest('.form');
  $input = $form.find('.form-text');
  $search = $form.find('.icon-search')
  $erase = $form.find('.ico-erase');
  
  $search.hide();
  $form
    .css({
      position: 'relative',
      zIndex: '10',
    })
    .removeClass('inactive').addClass('active')
    .animate({
      width: 265,
      padding: 15,
      height: 100,
      marginLeft: '-15px',
      marginTop: '-15px',
      },
      'fast', function() {
        $erase.css('display', 'block').click(function(event) {
          event.preventDefault();
        })
      })
  $input.animate({width: 253}, "fast");
    
}

function animateOff (form) {
  $form = form;
  $input = $form.find('.form-text');
  $erase = $form.find('.ico-erase');
  $search = $form.find('.icon-search')
  $submit = $form.find('.submit');

  $erase.css('display', 'none');

  $form
    .animate({
      width: 150,
      padding: 0,
      marginLeft: '-5px',
      marginTop: '0',
      height : '30',
      },'fast', function(){
        $search.show();
        $form.removeClass('active');
      })
  $input.animate({width: 138}, "fast");
}


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
    if ($submenu.hasClass('mr-menu') == true) {
      $submenu.fadeTo('fast', 1);
    }else {
      $submenu.css('display', 'block');
    };
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

