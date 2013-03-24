/**
 * @fileoverview 'data pane' view model for Knockout.
 *
 * @(key: Long)
 *
 * <div id="data-pane">
 *   ...
 * </div>
 *
 * <script type="text/javascript">
 *   var keyVm = "@key";
 * </script>
 *
 */


function OnWsErrorVm(jqXHR, textStatus, errorThrown) {
  alert(textStatus + ':\n\n' + errorThrown);
}

var AUTHORITY = 'http://localhost:9000';

var SettingsVm = {
  dataType: 'jsonp',
  error: OnWsErrorVm
};

function OnWsSearchButtonSuccessVm(data) {
  DataPaneVm.response(data);
}

function OnWsLoadRegistryObjectSuccessVm(data) {
  if (data.registry_object_key) {
    DataPaneVm.registry_object_key(data.registry_object_key);
  }
  else {
    DataPaneVm.registry_object_key(null);
  }
  if (data.registry_object_class) {
    DataPaneVm.registry_object_class(data.registry_object_class);
  }
  else {
    DataPaneVm.registry_object_class(null);
  }
  if (data.type) {
    DataPaneVm.type(data.type);
  }
  else {
    DataPaneVm.type(null);
  }
  if (data.originating_source) {
    DataPaneVm.originating_source(data.originating_source);
  }
  else {
    DataPaneVm.originating_source(null);
  }
  if (data.originating_source_type) {
    DataPaneVm.originating_source_type(data.originating_source_type);
  }
  else {
    DataPaneVm.originating_source_type(null);
  }
  if (data.identifiers) {
    DataPaneVm.identifiers(data.identifiers);
  }
  else {
    DataPaneVm.identifiers(null);
  }
  if (data.subjects) {
    DataPaneVm.subjects(data.subjects);
  }
  else {
    DataPaneVm.subjects(null);
  }
  if (data.descriptions) {
    DataPaneVm.descriptions(data.descriptions);
  }
  else {
    DataPaneVm.descriptions(null);
  }
  if (data.complexNames) {
    DataPaneVm.complexNames(data.complexNames);
  }
  else {
    DataPaneVm.complexNames(null);
  }
  if (data.accessPolicies) {
    DataPaneVm.accessPolicies(data.accessPolicies);
  }
  else {
    DataPaneVm.accessPolicies(null);
  }
  if (data.relatedInfo) {
    DataPaneVm.relatedInfo(data.relatedInfo);
  }
  else {
    DataPaneVm.relatedInfo(null);
  }
  if (data.locations) {
    DataPaneVm.locations(data.locations);
  }
  else {
    DataPaneVm.locations(null);
  }
  if (data.relations) {
    DataPaneVm.relations(data.relations);
  }
  else {
    DataPaneVm.relations(null);
  }
}

var DataPaneVm = {
  search: ko.observable(''),
  page: ko.observable(1),
  response: ko.observableArray(null),

  _key: ko.observable(''),
  registry_object_key: ko.observable(null),
  registry_object_class: ko.observable(null),
  type: ko.observable(null),
  originating_source: ko.observable(null),
  originating_source_type: ko.observable(null),
  identifiers: ko.observableArray(null),
  subjects: ko.observableArray(null),
  descriptions: ko.observableArray(null),
  complexNames: ko.observableArray(null),
  accessPolicies: ko.observableArray(null),
  relatedInfo: ko.observableArray(null),
  locations: ko.observableArray(null),
  relations: ko.observableArray(null)
};

/*----------------------------------------------------------------------------*/

DataPaneVm.isSearchButtonVisible = ko.computed(
    function() {
      return DataPaneVm._key() === '';
    },
    DataPaneVm);

DataPaneVm.isBackToSearchButtonVisible = ko.computed(
    function() {
      return DataPaneVm.response() !== null && DataPaneVm._key() !== '';
    },
    DataPaneVm);

/*----------------------------------------------------------------------------*/

DataPaneVm.isRegistryObjectVisible = ko.computed(
    function() {
      return DataPaneVm._key() !== '';
    },
    DataPaneVm);

DataPaneVm.isIdentifiersVisible = ko.computed(
    function() {
      return DataPaneVm.identifiers() !== null;
    },
    DataPaneVm);

DataPaneVm.isSubjectsVisible = ko.computed(
    function() {
      return DataPaneVm.subjects() !== null;
    },
    DataPaneVm);

DataPaneVm.isDescriptionsVisible = ko.computed(
    function() {
      return DataPaneVm.descriptions() !== null;
    },
    DataPaneVm);

DataPaneVm.isComplexNamesVisible = ko.computed(
    function() {
      return DataPaneVm.complexNames() !== null;
    },
    DataPaneVm);

DataPaneVm.isAccessPoliciesVisible = ko.computed(
    function() {
      return DataPaneVm.accessPolicies() !== null;
    },
    DataPaneVm);

DataPaneVm.isRelatedInfoVisible = ko.computed(
    function() {
      return DataPaneVm.relatedInfo() !== null;
    },
    DataPaneVm);

DataPaneVm.isLocationsVisible = ko.computed(
    function() {
      return DataPaneVm.locations() !== null;
    },
    DataPaneVm);

DataPaneVm.isRelationsVisible = ko.computed(
    function() {
      return DataPaneVm.relations() !== null;
    },
    DataPaneVm);

/*----------------------------------------------------------------------------*/

DataPaneVm.searchButton = function() {
  if (DataPaneVm.search() !== '') {
    if (DataPaneVm.search() == '*') {
      DataPaneVm.search('');
    }
    // Send an AJAX request.
    SettingsVm.url = AUTHORITY + '/registry-object?search=' + DataPaneVm.search() + '&page=' + DataPaneVm.page();
    SettingsVm.success = OnWsSearchButtonSuccessVm;
    $.ajax(SettingsVm);
  }
};

DataPaneVm.backToSearchButton = function() {
  DataPaneVm._key('');
};

/*----------------------------------------------------------------------------*/

DataPaneVm._loadRegistryObject = function() {
  if (DataPaneVm._key() !== '') {
    // Send an AJAX request.
    SettingsVm.url = AUTHORITY + '/registry-object/' + DataPaneVm._key();
    SettingsVm.success = OnWsLoadRegistryObjectSuccessVm;
    $.ajax(SettingsVm);
  }
};

DataPaneVm.showRegistryObject = function(data) {
  DataPaneVm._key(data.registry_object_key);
  DataPaneVm._loadRegistryObject();
};

DataPaneVm.showRelatedRegistryObject = function(data) {
  DataPaneVm._key(data.related_registry_object_key);
  DataPaneVm._loadRegistryObject();
};

/*----------------------------------------------------------------------------*/

// Load this view model properties.
DataPaneVm._load = function() {
  if (typeof keyVm !== 'undefined') {
    DataPaneVm._key(keyVm);
  }
  DataPaneVm._loadRegistryObject();
};

DataPaneVm._init = function() {
  if (document.getElementById('data-pane')) {
    // Activate Knockout on "data-pane" view model.
    ko.applyBindings(DataPaneVm, document.getElementById('data-pane'));
    DataPaneVm._load();
  }
};

$(document).ready(
    function() {
      DataPaneVm._init();
    });
