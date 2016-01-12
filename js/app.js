// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

firstapp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, cfpLoadingBarProvider) {

	cfpLoadingBarProvider.includeSpinner = true;
	cfpLoadingBarProvider.includeBar = true;
	cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Loading...</div>';
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
			url: "/product/:categoryId",
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
		.state('product-detail', {
			url: "/product-detail",
			templateUrl: "views/template.html",
			controller: 'ProductDetailCtrl'
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

firstapp.directive('tableresponsive', function ($compile, $parse) {
	return {
		restrict: 'EA',
		replace: false,
		link: function ($scope, element, attrs) {
			var $element = $(element);
			$element.responsiveTables();
		}
	};
});

firstapp.filter('uploadpath', function () {
	return function (input) {
		if (input && input != "") {
			return adminurl + "uploadfile/resize?file=" + input;
			// return adminurl + "uploadfile/resize?width=750&file=" + input;
		}
	};
});

firstapp.filter('cut', function () {
	return function (value, wordwise, max, tail) {
		if (!value) return '';

		max = parseInt(max, 10);
		if (!max) return value;
		if (value.length <= max) return value;

		value = value.substr(0, max);
		if (wordwise) {
			var lastspace = value.lastIndexOf(' ');
			if (lastspace != -1) {
				value = value.substr(0, lastspace);
			}
		}
		return value + (tail || ' …');
	};
});
