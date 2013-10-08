'use strict';

describe('Service: devianArt', function () {

  // load the service's module
  beforeEach(module('eansDemoApp'));

  // instantiate service
  var devianArt;
  beforeEach(inject(function (_devianArt_) {
    devianArt = _devianArt_;
  }));

  it('should do something', function () {
    expect(!!devianArt).toBe(true);
  });

});
