// var adminurl = "http://localhost:1337/";
// var adminurl = "http://vignesh.com:82/";
var adminurl = "http://tagboss.wohlig.com:1337/";
// var adminurl = "http://tagboss.wohlig.com/";

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
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
        getnav: function() {
            return navigation;
        },
        getUserProfile: function(callback) {
            $http.get(adminurl + 'user/profile').success(callback);
        },
        registerUser: function(userData, callback) {
            delete userData.check;
            $http({
                url: adminurl + 'user/save',
                method: 'POST',
                withCredentials: true,
                data: userData
            }).success(callback);
        },
        loginUser: function(userData, callback) {
            $http({
                url: adminurl + 'user/login',
                method: 'POST',
                withCredentials: true,
                data: userData
            }).success(callback);
        },
        getSlider: function(callback) {
            $http({
                url: adminurl + 'slider/find',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        getBlocks: function(callback) {
            $http({
                url: adminurl + 'blocks/find',
                method: 'POST'
            }).success(callback);
        },
        findProduct: function(catId, callback) {
            $http({
                url: adminurl + 'product/findProduct',
                method: 'POST',
                withCredentials: true,
                data: {
                    "category": catId
                }
            }).success(callback);
        },
        getAllCategories: function(callback) {
            $http({
                url: adminurl + 'category/find',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        getOneProduct: function(id, callback) {
            $http({
                url: adminurl + 'product/findone',
                method: 'POST',
                data: {
                    '_id': id
                }
            }).success(callback);
        },
        addToCart: function(id, callback) {
            $http({
                url: adminurl + 'cart/save',
                method: 'POST',
                data: {
                    'product': id
                }
            }).success(callback);
        },
        removeFromCart: function(id, callback) {
            $http({
                url: adminurl + 'cart/delete',
                method: 'POST',
                data: {
                    'product': id
                }
            }).success(callback);
        },
        getUserCart: function(callback) {
            $http({
                url: adminurl + 'cart/find',
                method: 'POST'
            }).success(callback);
        },
        placeOrder: function(order, callback) {
            $http({
                url: adminurl + 'order/save',
                method: 'POST',
                data: order
            }).success(callback);
        },
        getMyOrders: function(callback) {
            $http({
                url: adminurl + 'order/findOrders',
                method: 'POST'
            }).success(callback);
        },
        logout: function(callback) {
            $http.get(adminurl + 'user/logout').success(callback);
        },
        makeactive: function(menuname) {
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
