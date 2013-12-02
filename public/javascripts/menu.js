/**
 * @fileoverview 'menu' view model for Knockout.
 *
 * @(menu: String)
 *
 * <ul id="menu">
 *  <li data-bind="css: { selected: menu()=='ThisEntry' }">
 *    <a href="..." title="This Entry">This Entry</a>
 *  </li>
 * </ul>
 *
 * <script type="text/javascript">
 *   var menuVm = "@menu";
 * </script>
 *
 */


var MenuVm = {
  menu: ko.observable('')
};

// Load this view model properties.
MenuVm._load = function () {
  if (typeof menuVm !== 'undefined') {
    MenuVm.menu(menuVm);
  }
};

MenuVm._init = function () {
  if (document.getElementById('sidemenu')) {
    ko.applyBindings(MenuVm,document.getElementById('sidemenu'))
  }
   if (document.getElementById('topmenu')) {
    ko.applyBindings(MenuVm,document.getElementById('topmenu'))
  }
  // Activate Knockout on "menu" view model.
  MenuVm._load();
};

$(document).ready(function () {
  MenuVm._init();
});
