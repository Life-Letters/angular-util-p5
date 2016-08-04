angular.module('life.util.p5', [])
  .factory('P5', function ($window) {
    return $window.p5;
  });