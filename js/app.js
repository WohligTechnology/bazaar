// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

firstapp.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    // for http request with session
    $httpProvider.defaults.withCredentials = true;

    $stateProvider

        .state('home', {
            url: "/home",
            templateUrl: "views/template.html",
            controller: 'HomeCtrl'
        })
        .state('about-us', {
            url: "/about-us",
            templateUrl: "views/template.html",
            controller: 'AboutusCtrl'
        })
        .state('insurance', {
            url: "/insurance",
            templateUrl: "views/template.html",
            controller: 'InsuranceCtrl'
        })
        .state('camera', {
            url: "/camera",
            templateUrl: "views/template.html",
            controller: 'CameraCtrl'
        })
        .state('wishlist', {
            url: "/wishlist",
            templateUrl: "views/template.html",
            controller: 'WishlistCtrl'
        })
        .state('product', {
            url: "/product",
            templateUrl: "views/template.html",
            controller: 'ProductCtrl'
        })
        .state('terms-policy', {
            url: "/terms-policy",
            templateUrl: "views/template.html",
            controller: 'TermsPolicyCtrl'
        })
        .state('terms-condition', {
            url: "/terms-condition",
            templateUrl: "views/template.html",
            controller: 'TermsConditionCtrl'
        })
        .state('contact-us', {
            url: "/contact-us",
            templateUrl: "views/template.html",
            controller: 'ContactUsCtrl'
        })
        .state('compare-product', {
            url: "/compare-product",
            templateUrl: "views/template.html",
            controller: 'CompareProductCtrl'
        })
        .state('profile', {
            url: "/profile",
            templateUrl: "views/template.html",
            controller: 'ProfileCtrl'
        })
        .state('orders', {
            url: "/orders",
            templateUrl: "views/template.html",
            controller: 'OrdersCtrl'
        })
        .state('history', {
            url: "/history",
            templateUrl: "views/template.html",
            controller: 'HistoryCtrl'
        })
        .state('personalized-manager', {
            url: "/personalized-manager",
            templateUrl: "views/template.html",
            controller: 'PersonalizedManagerCtrl'
        })
        .state('checkout', {
            url: "/checkout",
            templateUrl: "views/template.html",
            controller: 'CheckoutCtrl'
        })
        .state('cart', {
            url: "/cart",
            templateUrl: "views/template.html",
            controller: 'CartCtrl'
        })
        .state('new-product', {
            url: "/new-product",
            templateUrl: "views/template.html",
            controller: 'NewProductCtrl'
        })
        .state('buy-back-value', {
            url: "/buy-back-value",
            templateUrl: "views/template.html",
            controller: 'BuybackvalueCtrl'
        })

    $urlRouterProvider.otherwise("/home");

});


firstapp.directive('img', function ($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function () {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});
