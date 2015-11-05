'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('yotodoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have three items', function () {
    expect(MainCtrl.todos.length).toBe(3);
  });
});
