// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngAria', 'ngMaterial'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (cordova.platformId === 'ios' && window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.filter("trust", ['$sce', function($sce) {
    return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
    }}])

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html'
      })

      .state('app.home', {
          url: '/home',
          controller: 'HomeCtrl',
          views: {
              'menuContent': {
                  templateUrl: 'templates/home.html'
              }
          }
      })

    .state('app.bluray', {
        url: '/bluray',
        views: {
            'menuContent': {
                templateUrl: 'templates/bluray.html'
            }
        }
    })

    .state('app.add_bluray', {
        url: '/add_bluray',
        controller: 'AddBRCtrl',
        views: {
            'menuContent': {
                templateUrl: 'templates/add_bluray.html'
            }
        }
    })

    .state('app.movie', {
        url: '/movie/:movieID',
        views: {
            'menuContent': {
                templateUrl: 'templates/movie.html',
                controller: 'MovieCtrl'
            }
        }
    })

    .state('app.music', {
        url: '/music',
        views: {
            'menuContent': {
                templateUrl: 'templates/music.html'
            }
        }
    })

    .state('app.add_music', {
        url: '/add_music',
        views: {
            'menuContent': {
                templateUrl: 'templates/add_music.html'
            }
        }
    })
      .state('app.settings', {
          url: '/settings',
          views: {
              'menuContent': {
                  templateUrl: 'templates/settings.html',
              }
          }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
