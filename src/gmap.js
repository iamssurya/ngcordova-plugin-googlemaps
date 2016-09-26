(function (factory) {
  'use strict';
  factory();
}(function () {
  var global = {};
  var gmap = angular.module('gmap', []);
  gmap.provider('gMapConfig', gMapConfigProvider);
  gmap.directive('gMap', gMapDirectiveFn);
  function gMapConfigProvider() {
    this.config = function (params) {
      console.log(params);
      this.mapParams = params;
      global.mapParams = params;
    };
    this.$get = function () {
      return this;
    };
  }
  function gMapDirectiveFn() {
    return {
      restrict: 'A',
      scope: { mapReady: '&onMapReady' },
      link: link
    };
  }
  function link(scope, element) {
    function triggerMapReady(map) {
      scope.mapReady({ map: map });
    }
    document.addEventListener('deviceready', function () {
      console.log(global);
      var mapParams = {};
      if (typeof global.mapParams == 'object' ? Object.keys(global.mapParams).length > 0 : false) {
        mapParams = global.mapParams;
        mapParams.mapType = plugin.google.maps.MapTypeId[global.mapParams.mapType];
        console.log('setting custom');
        console.log(mapParams);
        element[0].style.zIndex = '999';
        var map = plugin.google.maps.Map.getMap(element[0], mapParams);
        map.on(plugin.google.maps.event.MAP_READY, triggerMapReady);
      } else {
        mapParams = {
          'mapType': plugin.google.maps.MapTypeId.ROADMAP,
          'controls': {
            'compass': true,
            'myLocationButton': true,
            'indoorPicker': true
          },
          'gestures': {
            'scroll': true,
            'tilt': true,
            'rotate': true,
            'zoom': true
          }
        };
        var map = plugin.google.maps.Map.getMap(element[0], mapParams);
        map.on(plugin.google.maps.event.MAP_READY, triggerMapReady);
      }
    });
  }
}));