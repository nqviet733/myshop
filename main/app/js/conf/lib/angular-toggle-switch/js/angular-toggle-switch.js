angular.module('toggle-switch', ['ng']).directive('toggleSwitch', function () {
  return {
    restrict: 'EA',
    replace: true,
    require: 'ngModel',
    scope: {
      ngModel: '=',
      disabled: '@',
      onLabel: '@',
      offLabel: '@',
      knobLabel: '@',
      ngChange: '&'
    },
    template: '<div class="switch" ng-click="toggle()" ng-class="{ \'disabled\': disabled }"><div class="switch-animate" ng-class="{\'switch-off\': !ngModel, \'switch-on\': ngModel}"><span class="switch-left" ng-bind="onLabel"></span><span class="knob" ng-bind="knobLabel"></span><span class="switch-right" ng-bind="offLabel"></span></div></div>',
    controller: function($scope) {
      $scope.toggle = function toggle() {
        if(!$scope.disabled) {
          $scope.ngModel = !$scope.ngModel;
          $scope.ngChange();
        }
      };
    },
    compile: function(element, attrs) {
      if (!attrs.onLabel) { attrs.onLabel = 'On'; }
      if (!attrs.offLabel) { attrs.offLabel = 'Off'; }
      if (!attrs.knobLabel) { attrs.knobLabel = '\u00a0'; }
      if (!attrs.disabled) { attrs.disabled = false; }
    }
  };
});
