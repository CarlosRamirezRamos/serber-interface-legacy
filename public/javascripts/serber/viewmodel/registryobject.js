/**
 * @fileoverview 'data pane' view model for Knockout.
 *
 * @(key: Long)
 *
 * <div id="registry-object">
 *   ...
 * </div>
 *
 * <script type="text/javascript">
 *   var keyVm = "@key";
 * </script>
 *
 */

window.serber.viewmodel.registryobject = (function (ko, datacontext) {

  var registryObjects = ko.observableArray(),
  search = ko.observable(''),
  page = ko.observable(1),
  _key = ko.observable(null)
  registryObject = ko.observable(null),
  error = ko.observable(),

  //Methods
  searchButton = function () {
    if (search() !== '') {
      if (search() == '*') {
        search('');
      }
      datacontext.searchRegistryObjects(registryObjects,search(),page(), error)
    }
  },

  backToSearchButton = function () {
    _key(null);
  },


/*----------------------------------------------------------------------------*/

_loadRegistryObject = function () {
  if (_key() !== null) {
    datacontext.getRegistryObject(registryObject, _key(), error)
  } else {
    datacontext.searchRegistryObjects(registryObjects, '', page(), error)
  }
},

showRegistryObject = function (data) {
  _key(data.registry_object_key);
  _loadRegistryObject();
},

showRelatedRegistryObject = function (data) {
  _key(data.related_registry_object_key);
  _loadRegistryObject();
},

  //Computed Observables
  /*----------------------------------------------------------------------------*/

  isSearchButtonVisible = ko.computed(
      function () {
        return _key() === null;
      }),

  isBackToSearchButtonVisible = ko.computed(
      function () {
        return registryObjects() !== null && _key() !== null;
      }),

  /*----------------------------------------------------------------------------*/

  isRegistryObjectVisible = ko.computed(
      function () {
        return  _key() !== null && registryObject() !== null;
      }),

  isIdentifiersVisible = ko.computed(
      function () {
        return registryObject() !== null && registryObject().identifiers !== null;
      }),

  isSubjectsVisible = ko.computed(
      function () {
        return registryObject() !== null && registryObject().subjects !== null;
      }),

  isDescriptionsVisible = ko.computed(
      function () {
        return registryObject() !== null && registryObject().descriptions !== null;
      }),

  isComplexNamesVisible = ko.computed(
      function () {
        return registryObject() !== null && registryObject().complexNames !== null;
      }),

  isAccessPoliciesVisible = ko.computed(
      function () {
        return registryObject() !== null && registryObject() !== null && registryObject().accessPolicies !== null;
      }),

  isRelatedInfoVisible = ko.computed(
      function () {
        return registryObject() !== null && registryObject().relatedInfo !== null;
      }),

  isLocationsVisible = ko.computed(
      function () {
        return registryObject() !== null && registryObject().locations !== null;
      }),

  isRelationsVisible = ko.computed(
      function () {
        return registryObject() !== null && registryObject().relations !== null;
      }),

  /*----------------------------------------------------------------------------*/

  _load = function () {
    if (typeof keyVm !== 'undefined' && _key() !== null && _key() !== '') {
      _key(keyVm);
    }
    _loadRegistryObject();
  },

  init = function () {
    if (document.getElementById("registry")) {
      registryObject(new datacontext.RegistryObject(null));
      ko.applyBindings(this, document.getElementById("registry"));
      _load()
    }
  };

  return {
    init: init,
    registryObjects: registryObjects,
    registryObject: registryObject,
    search: search,
    page: page,
    error: error,
    searchButton: searchButton,
    backToSearchButton: backToSearchButton,
    isSearchButtonVisible: isSearchButtonVisible,
    isBackToSearchButtonVisible: isBackToSearchButtonVisible,
    isRegistryObjectVisible: isRegistryObjectVisible,
    isIdentifiersVisible: isIdentifiersVisible,
    isSubjectsVisible:isSubjectsVisible,
    isDescriptionsVisible: isDescriptionsVisible,
    isComplexNamesVisible: isComplexNamesVisible,
    isAccessPoliciesVisible: isAccessPoliciesVisible,
    isRelatedInfoVisible: isRelatedInfoVisible,
    isLocationsVisible: isLocationsVisible,
    isRelationsVisible: isRelationsVisible,
    showRegistryObject: showRegistryObject,
    showRelatedRegistryObject: showRelatedRegistryObject
  };

  /*----------------------------------------------------------------------------*/

})(ko, serber.datacontext);

/*----------------------------------------------------------------------------*/

// Initiate the Knockout bindings
$(document).ready(function () {
  window.serber.viewmodel.registryobject.init();
});