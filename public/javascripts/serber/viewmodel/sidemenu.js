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

window.serber.viewmodel.sidemenu = (function (ko, datacontext) {

  var sidemenu = ko.observable(),
  error = ko.observable(),

  // Load this view model properties.
  _load = function () {
    if (typeof menuVm !== 'undefined') {
      sidemenu(menuVm);
    }
  };

  init = function () {
    if (document.getElementById("sidemenu")) {
      ko.applyBindings(this, document.getElementById("sidemenu"));
      _load()
    }
  };

  return {
    init: init,
    sidemenu: sidemenu,
    error: error
  };

  /*----------------------------------------------------------------------------*/

})(ko, serber.datacontext);

/*----------------------------------------------------------------------------*/

// Initiate the Knockout bindings
$(document).ready(function () {
  window.serber.viewmodel.menu.init();
});