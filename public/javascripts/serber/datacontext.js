window.serber = window.serber || {};
window.serber.viewmodel = window.serber.viewmodel || {};
window.serber.datacontext = (function () {

  // Private
  var AUTHORITY = 'http://localhost:9000';

  var datacontext = {
    searchRegistryObjects: searchRegistryObjects,
    getRegistryObject: getRegistryObject
  };

  return datacontext;

  function getRegistryObject(Observable,key, errorObservable) {
    return ajaxRequest("get", RegistryObjectUrl(key))
    .done(getSucceeded)
    .fail(getFailed);

    function getSucceeded(data) {
      Observable(new createRegistryObject(data));
    }

    function getFailed() {
      errorObservable("Error recuperando registros");
    }
  }

  function searchRegistryObjects(Observable, text, page, errorObservable) {
    return ajaxRequest("get", RegistryObjectsUrl(),{ "text": text, "page": page})
    .done(getSucceeded)
    .fail(getFailed);

    function getSucceeded(data) {
      var mapped = $.map(data, function (item) { return new createRegistryObject(item); });
      Observable(mapped);
    }

    function getFailed() {
      errorObservable("Error recuperando registros");
    }
  }

  function createRegistryObject(data) {
    return new datacontext.RegistryObject(data); // injected by serber.model.js
  }


  return datacontext;

  //Methods
  function clearErrorMessage(entity) { entity.errorMessage(null); }
  function ajaxRequest(type, url, data, dataType) { // Ajax helper
    var options = {
      dataType: dataType || "jsonp",
      contentType: "application/json",
      cache: false,
      type: type,
      data: data ? (typeof data.toJson === 'function' ? data.toJson() : data) : null
    };

    return $.ajax(url, options);
  }
  // routes
  function RegistryObjectsUrl() {
    var url =  AUTHORITY + "/registry-objects";
    return url;
  }
   function RegistryObjectUrl(id) {
    var url =  AUTHORITY + "/registry-object";
    if(id && id!=null) {url += "/" + id}
    return url;
  }
})();