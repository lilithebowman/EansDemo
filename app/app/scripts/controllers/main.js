'use strict';

angular.module('eansDemoApp')
  .controller('MainCtrl', function ($scope,devianArt) {
$scope.feedSrc="http://backend.deviantart.com/rss.xml?q=gallery%3Aeanbowman";
        devianArt.parseFeed($scope.feedSrc).then(function(response){
            /*This object contains the feed. Inspect it in debugger*/
            var feed = response.data.responseData.feed;
            console.log(feed);
/*            $scope.loadButonText=angular.element(e.target).text();
            $scope.feeds=res.data.responseData.feed.entries;*/
        });


  });
