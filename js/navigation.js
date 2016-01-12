// var adminurl = "http://localhost:1337/";
var adminurl = "http://vignesh.com:82/";
var adminurl = "http://104.154.68.71/";

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
	var navigation = [{
		name: "Home",
		classis: "active",
		link: "#/home",
		subnav: [{
			name: "Subnav1",
			classis: "active",
			link: "#/home"
    }]
  }];

	return {
		getnav: function () {
			return navigation;
		},
		getUserProfile: function (callback) {
			$http.get(adminurl + 'user/profile').success(callback);
		},
		registerUser: function (userData, callback) {
			delete userData.check;
			$http({
				url: adminurl + 'user/save',
				method: 'POST',
				withCredentials: true,
				data: userData
			}).success(callback);
		},
		loginUser: function (userData, callback) {
			$http({
				url: adminurl + 'user/login',
				method: 'POST',
				withCredentials: true,
				data: userData
			}).success(callback);
		},
		getSlider: function (callback) {
			$http({
				url: adminurl + 'slider/find',
				method: 'POST',
				withCredentials: true
			}).success(callback);
		},
		getBlocks: function (callback) {
			$http({
				url: adminurl + 'blocks/find',
				method: 'POST'
			}).success(callback);
		},
		findProduct: function (catId, callback) {
			$http({
				url: adminurl + 'product/findProduct',
				method: 'POST',
				withCredentials: true,
				data: {
					"category": catId
				}
			}).success(callback);
		},
		logout: function (callback) {
			$http.get(adminurl + 'user/logout').success(callback);
		},
		makeactive: function (menuname) {
			for (var i = 0; i < navigation.length; i++) {
				if (navigation[i].name == menuname) {
					navigation[i].classis = "active";
				} else {
					navigation[i].classis = "";
				}
			}
			return menuname;
		},

	}
});
