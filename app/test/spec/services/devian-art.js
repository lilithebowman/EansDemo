'use strict';

describe('Service: deviantArt', function () {

  // load the service's module
  beforeEach(module('eansDemoApp'));

  // instantiate service
  var deviantArt;
  beforeEach(inject(function (_deviantArt_) {
    deviantArt = _deviantArt_;
  }));

  it('should do something', function () {
    expect(!!deviantArt).toBe(true);
  });

});
