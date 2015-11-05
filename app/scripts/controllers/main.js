'use strict';

/**
 * @ngdoc function
 * @name yotodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yotodoApp
 */
angular.module('yotodoApp')
  .controller('MainCtrl', function($scope) {
    $scope.todos = [
      'Learn Angular',
      'Learn Yeoman',
      'Learn Grunt',
      'Learn Bower'
    ];
    $scope.newToDo = function() {
    	// simple error handling
    	if($scope.todo === ''){
    		return;
    	}
    	if($scope.todos.indexOf($scope.todo) !== -1){
    		return;
    	}
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    };
    $scope.removeToDo = function(index) {
    	$scope.todos.splice(index,1);
    };
  });
