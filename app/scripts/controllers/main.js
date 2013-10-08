'use strict';

angular.module('eansDemoApp')
  .controller('MainCtrl', function ($scope,deviantArt) {
				$scope.feedSrc="http://backend.deviantart.com/rss.xml?q=gallery%3Aeanbowman";
        $scope.feed = deviantArt.parseFeed($scope.feedSrc).then(function(response){
            return response.data.responseData.feed;
        });


  });
