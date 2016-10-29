'use strict';

(function () {

    function accountRouter($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: './views/shared/_header.html',
                        controller: 'headerController'
                    },
                    'main': {
                        controller: 'homeController',
                        templateUrl: './views/account/home.html'
                    }
                },
                cache: false,
                title: 'Code Ruckus',
                loginRequired: true
            });
    }

    app.config(['$stateProvider', '$urlRouterProvider', accountRouter]);

})();
