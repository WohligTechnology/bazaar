angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider', 'angular-loading-bar'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
	//Used to name the .html file
	$scope.template = TemplateService.changecontent("home");
	$scope.menutitle = NavigationService.makeactive("Home");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();

	$scope.swiper = {};
	$scope.next = function () {
		$scope.swiper.slideNext();
	};

	$scope.onReadySwiper = function (swiper) {
		console.log('onReadySwiper');
		swiper.on('slideChangeStart', function () {
			console.log('slideChangeStart');
		});
	};

	NavigationService.getSlider(function (data) {
		console.log(data);
		if (data.value != false)
			$scope.banners = data[0].image;
	})

	NavigationService.getBlocks(function (data) {
		console.log(data);
		if (data.value != false)
			$scope.blocks = data;
	})

	// product data
	// $scope.banners = [{
	// 	image: "img/slider/1.jpg"
	//   }, {
	// 	image: "img/slider/1.jpg"
	// 	}, {
	// 	image: "img/slider/1.jpg"
	//   }, {
	// 	image: "img/slider/1.jpg"
	//   }];

	$scope.bannerss = [{
		image: "img/product/banner.jpg"
    }, {
		image: "img/product/banner2.jpg"
    }];

	$scope.banner = [{
		image: "img/product/big-banner.jpg"
    }];

	$scope.products = [{
		image: "img/product/5.png",
		name: "HTC Desire 626G+",
		price: "11,700.00"
    }, {
		image: "img/product/6.png",
		name: "Jabra Eclipse Wireless Blueto...",
		price: "11,700.00"
    }, {
		image: "img/product/7.png",
		name: "Lenovo G50-80 80E502ULIN ",
		price: "11,700.00"
    }, {
		image: "img/product/8.png",
		name: "Fujifilm C25 12.0 MP",
		price: "11,700.00"
    }, {
		image: "img/product/9.png",
		name: "Microsoft DC – 34 12000 mAh",
		price: "11,700.00"
    }];

	$scope.product = [{
		image: "img/product/14.png",
		name: "Lava Pixel V1 with Android one",
		price: "11,700.00"
    }, {
		image: "img/product/15.png",
		name: "Lava Iris X1 Atom S",
		price: "11,700.00"
    }, {
		image: "img/product/13.png",
		name: "Lava Iris X2 Atom S ",
		price: "13,740.00"
    }, {
		image: "img/product/12.png",
		name: "Lava Iris Alfa L",
		price: "12,540.00"
    }, {
		image: "img/product/14.png",
		name: "Lava Pixel V1 with Android one",
		price: "12,540.00"
    }];

})

.controller('LoginCtrl', function ($scope, TemplateService, NavigationService) {

})

.controller('QuickCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.product = [{
		image: "img/product/c1.jpg",
		name: "Nikon D3300 (Body with AF-S 18-55 mm VR II Kit Lens) DS...",
		price: "11,700.00",
		spec: ["24.2 MP", "CMOS", "with 3 inch LCD"]
    }, {
		image: "img/product/c2.jpg",
		name: "Nikon D3300 (Body with AF-S 18-55 mm VR II Kit Lens) DS...",
		price: "11,700.00",
		spec: ["24.2 MP", "CMOS", "with 3 inch LCD"]
    }, {
		image: "img/product/c3.jpg",
		name: "Nikon D3300 (Body with AF-S 18-55 mm VR II Kit Lens) DS...",
		price: "13,740.00",
		spec: ["24.2 MP", "CMOS", "with 3 inch LCD"]
    }, {
		image: "img/product/c4.jpg",
		name: "Nikon D3300 (Body with AF-S 18-55 mm VR II Kit Lens) DS...",
		price: "12,540.00",
		spec: ["24.2 MP", "CMOS", "with 3 inch LCD"]
    }, {
		image: "img/product/c1.jpg",
		name: "Nikon D3300 (Body with AF-S 18-55 mm VR II Kit Lens) DS...",
		price: "12,540.00",
		spec: ["24.2 MP", "CMOS", "with 3 inch LCD"]
    }, {
		image: "img/product/c2.jpg",
		name: "Nikon D3300 (Body with AF-S 18-55 mm VR II Kit Lens) DS...",
		price: "13,740.00",
		spec: ["24.2 MP", "CMOS", "with 3 inch LCD"]
    }, {
		image: "img/product/c3.jpg",
		name: "Nikon D3300 (Body with AF-S 18-55 mm VR II Kit Lens) DS...",
		price: "12,540.00",
		spec: ["24.2 MP", "CMOS", "with 3 inch LCD"]
    }, {
		image: "img/product/c4.jpg",
		name: "Nikon D3300 (Body with AF-S 18-55 mm VR II Kit Lens) DS...",
		price: "12,540.00",
		spec: ["24.2 MP", "CMOS", "with 3 inch LCD"]
    }];

})

.controller('AboutusCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService.changecontent("about-us");
	$scope.menutitle = NavigationService.makeactive("About-us");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
})

.controller('TermsPolicyCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService.changecontent("terms-policy");
	$scope.menutitle = NavigationService.makeactive("Terms-Policy");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
})

.controller('TermsConditionCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService.changecontent("terms-condition");
	$scope.menutitle = NavigationService.makeactive("Terms-Condition");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
})

.controller('ContactUsCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService.changecontent("contact-us");
	$scope.menutitle = NavigationService.makeactive("Contact-us");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
})

.controller('ProfileCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService.changecontent("profile");
	$scope.menutitle = NavigationService.makeactive("Profile");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
})

.controller('OrdersCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService.changecontent("orders");
	$scope.menutitle = NavigationService.makeactive("Orders");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
})

.controller('FooterCtrl', function ($scope, TemplateService, NavigationService) {
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();

	$scope.footer = [{
		image: "img/icon/f1.png",
		name: "ALL PRODUCTS",
		name2: "INSURED"
    }, {
		image: "img/icon/f7.png",
		name: "ASSURED",
		name2: "BUYBACK"
    }, {
		image: "img/icon/f3.png",
		name: "PERSONALIZED",
		name2: "MANAGER"
    }, {
		image: "img/icon/f4.png",
		name: "Easy",
		name2: "Returns"
    }, {
		image: "img/icon/f5.png",
		name: "DELIVRY WITHIN",
		name2: "24 HOURS"
    }];

})

.controller('CartCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService.changecontent("cart");
	$scope.menutitle = NavigationService.makeactive("Cart");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
})

.controller('WishlistCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService.changecontent("wishlist");
	$scope.menutitle = NavigationService.makeactive("Wishlist");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
})

.controller('NewProductCtrl', function ($scope, TemplateService, NavigationService, $stateParams) {
	$scope.template = TemplateService.changecontent("new-product");
	$scope.menutitle = NavigationService.makeactive("New-Product");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();

	$scope.accordian = [];
	$scope.accordian.push({
		isFirstOpen: true,
		isFirstDisabled: false
	});
	$scope.accordian.push({
		isFirstOpen: true,
		isFirstDisabled: false
	});
	$scope.accordian.push({
		isFirstOpen: true,
		isFirstDisabled: false
	});
	$scope.accordian.push({
		isFirstOpen: true,
		isFirstDisabled: false
	});
	$scope.accordian.push({
		isFirstOpen: true,
		isFirstDisabled: false
	});
	$scope.accordian.push({
		isFirstOpen: true,
		isFirstDisabled: false
	});
	$scope.accordian.push({
		isFirstOpen: true,
		isFirstDisabled: false
	});
	$scope.accordian.push({
		isFirstOpen: true,
		isFirstDisabled: false
	});

	$scope.product = [{
		image: "img/product/2.png",
		name: "Nikon D3300 (Body with AF-S 18-55 mm VR II Kit Lens) DS...",
		price: "11,700.00"
    }, {
		image: "img/product/3.png",
		name: "Nikon D3300 (Body with AF-S 18-55 mm VR II Kit Lens) DS...",
		price: "11,700.00"
    }, {
		image: "img/product/4.png",
		name: "Nikon D3300 (Body with AF-S 18-55 mm VR II Kit Lens) DS...",
		price: "13,740.00"
    }, {
		image: "img/product/2.png",
		name: "Nikon D3300 (Body with AF-S 18-55 mm VR II Kit Lens) DS...",
		price: "12,540.00"
    }, {
		image: "img/product/3.png",
		name: "Nikon D3300 (Body with AF-S 18-55 mm VR II Kit Lens) DS...",
		price: "12,540.00"
    }, {
		image: "img/product/4.png",
		name: "Nikon D3300 (Body with AF-S 18-55 mm VR II Kit Lens) DS...",
		price: "13,740.00",
		spec: ["24.2 MP", "CMOS", "with 3 inch LCD"]
    }, {
		image: "img/product/2.png",
		name: "Nikon D3300 (Body with AF-S 18-55 mm VR II Kit Lens) DS...",
		price: "12,540.00",
		spec: ["24.2 MP", "CMOS", "with 3 inch LCD"]
    }, {
		image: "img/product/3.png",
		name: "Nikon D3300 (Body with AF-S 18-55 mm VR II Kit Lens) DS...",
		price: "12,540.00"
    }];

})

.controller('CheckoutCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService.changecontent("checkout");
	$scope.menutitle = NavigationService.makeactive("Checkout");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();

	$scope.tab = 'step1';
	$scope.classa = 'yellow-btn';
	$scope.classb = '';
	$scope.classc = '';
	$scope.classd = '';
	$scope.tabchange = function (tab, a) {
		//        console.log(tab);
		$scope.tab = tab;
		if (a == 1) {
			$scope.classa = "yellow-btn";
			$scope.classb = '';
			$scope.classc = '';
			$scope.classc = '';
		} else if (a == 2) {
			$scope.classa = '';
			$scope.classb = "yellow-btn";
			$scope.classc = '';
			$scope.classd = '';
		} else if (a == 3) {
			$scope.classa = '';
			$scope.classb = '';
			$scope.classc = "yellow-btn";
			$scope.classd = '';
		} else {
			$ionicScrollDelegate.scrollTop();
			$scope.classa = '';
			$scope.classb = '';
			$scope.classc = '';
			$scope.classd = "yellow-btn";
		}
	};

})

.controller('HistoryCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService.changecontent("history");
	$scope.menutitle = NavigationService.makeactive("History");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();

	$scope.today = function () {
		$scope.dt = new Date();
	};
	$scope.today();

	$scope.clear = function () {
		$scope.dt = null;
	};
})

.controller('PersonalizedManagerCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService.changecontent("personalized-manager");
	$scope.menutitle = NavigationService.makeactive("Personalized-Manager");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
})

.controller('CompareProductCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService.changecontent("compare-product");
	$scope.menutitle = NavigationService.makeactive("Compare-product");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
})

.controller('ProductCtrl', function ($scope, TemplateService, NavigationService, $uibModal, $stateParams) {
	$scope.template = TemplateService.changecontent("product");
	$scope.menutitle = NavigationService.makeactive("Product");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();

	NavigationService.findProduct($stateParams.categoryId, function (data) {
		console.log(data);
		if (data.value != false)
			$scope.products = data;
	})

	$scope.openQuick = function () {
		$uibModal.open({
			animation: true,
			templateUrl: 'views/modal/quick.html',
			controller: 'QuickCtrl'
		})
	};

	$scope.accordian = [];
	$scope.accordian.push({
		isFirstOpen: true,
		isFirstDisabled: false
	});
	$scope.accordian.push({
		isFirstOpen: true,
		isFirstDisabled: false
	});
	$scope.accordian.push({
		isFirstOpen: true,
		isFirstDisabled: false
	});
	$scope.accordian.push({
		isFirstOpen: true,
		isFirstDisabled: false
	});

	console.log("category Id : " + $stateParams.categoryId);

	$scope.product = [{
		image: "img/product/c1.jpg",
		name: "Nikon D3300 (Body with AF-S 18-55 mm VR II Kit Lens) DS...",
		price: "11,700.00",
		spec: ["24.2 MP", "CMOS", "with 3 inch LCD"]
	  }, {
		image: "img/product/c2.jpg",
		name: "Nikon D3300 (Body with AF-S 18-55 mm VR II Kit Lens) DS...",
		price: "11,700.00",
		spec: ["24.2 MP", "CMOS", "with 3 inch LCD"]
	  }, {
		image: "img/product/c3.jpg",
		name: "Nikon D3300 (Body with AF-S 18-55 mm VR II Kit Lens) DS...",
		price: "13,740.00",
		spec: ["24.2 MP", "CMOS", "with 3 inch LCD"]
	  }, {
		image: "img/product/c4.jpg",
		name: "Nikon D3300 (Body with AF-S 18-55 mm VR II Kit Lens) DS...",
		price: "12,540.00",
		spec: ["24.2 MP", "CMOS", "with 3 inch LCD"]
	  }, {
		image: "img/product/c1.jpg",
		name: "Nikon D3300 (Body with AF-S 18-55 mm VR II Kit Lens) DS...",
		price: "12,540.00",
		spec: ["24.2 MP", "CMOS", "with 3 inch LCD"]
	  }, {
		image: "img/product/c2.jpg",
		name: "Nikon D3300 (Body with AF-S 18-55 mm VR II Kit Lens) DS...",
		price: "13,740.00",
		spec: ["24.2 MP", "CMOS", "with 3 inch LCD"]
	  }, {
		image: "img/product/c3.jpg",
		name: "Nikon D3300 (Body with AF-S 18-55 mm VR II Kit Lens) DS...",
		price: "12,540.00",
		spec: ["24.2 MP", "CMOS", "with 3 inch LCD"]
	  }, {
		image: "img/product/c4.jpg",
		name: "Nikon D3300 (Body with AF-S 18-55 mm VR II Kit Lens) DS...",
		price: "12,540.00",
		spec: ["24.2 MP", "CMOS", "with 3 inch LCD"]
	  }];

})

.controller('CameraCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService.changecontent("camera");
	$scope.menutitle = NavigationService.makeactive("Camera");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();

	$scope.banners1 = [{
		image: "img/camera/c1.jpg"
    }, {
		image: "img/camera/c2.jpg"
    }];
	$scope.banners2 = [{
		image: "img/camera/c4.jpg"
    }, {
		image: "img/camera/c5.jpg"
    }];

	$scope.banner = [{
		image: "img/camera/c3.jpg"
    }];

})

.controller('InsuranceCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService.changecontent("insurance");
	$scope.menutitle = NavigationService.makeactive("Insurance");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();

	$scope.accordian = [];
	$scope.accordian.push({
		isFirstOpen: true,
		isFirstDisabled: false
	});
	$scope.accordian.push({
		isFirstOpen: true,
		isFirstDisabled: false
	});
	$scope.accordian.push({
		isFirstOpen: true,
		isFirstDisabled: false
	});

	$scope.product = [{
		image: "img/product/p1.jpg",
		name: "Apple iPhone 6S (silver,16 GB)",
		price: "11,700.00",
		spec: ["Android v5.1.1 OS", "21 MP + 5 MP", "3000 mAh Battery", "Dual Nano Sim (4G+4G)"]
    }, {
		image: "img/product/p2.jpg",
		name: "Apple iPhone 6S (Gold,16 GB)",
		price: "11,700.00",
		spec: ["Android v5.1.1 OS", "21 MP + 5 MP", "3000 mAh Battery", "Dual Nano Sim (4G+4G)"]
    }, {
		image: "img/product/p3.jpg",
		name: "Apple iPhone 6S (Gold,16 GB)",
		price: "13,740.00",
		spec: ["Android v5.1.1 OS", "21 MP + 5 MP", "3000 mAh Battery", "Dual Nano Sim (4G+4G)"]
    }, {
		image: "img/product/p5.jpg",
		name: "Apple iPhone 6S (Grey,16 GB)",
		price: "12,540.00",
		spec: ["Android v5.1.1 OS", "21 MP + 5 MP", "3000 mAh Battery", "Dual Nano Sim (4G+4G)"]
    }, {
		image: "img/product/p5.jpg",
		name: "Lava Pixel V1 with Android one",
		price: "12,540.00",
		spec: ["Android v5.1.1 OS", "21 MP + 5 MP", "3000 mAh Battery", "Dual Nano Sim (4G+4G)"]
    }, {
		image: "img/product/p1.jpg",
		name: "Apple iPhone 6S (silver,16 GB) ",
		price: "13,740.00",
		spec: ["Android v5.1.1 OS", "21 MP + 5 MP", "3000 mAh Battery", "Dual Nano Sim (4G+4G)"]
    }, {
		image: "img/product/p2.jpg",
		name: "Apple iPhone 6S (gold,16 GB)",
		price: "12,540.00",
		spec: ["Android v5.1.1 OS", "21 MP + 5 MP", "3000 mAh Battery", "Dual Nano Sim (4G+4G)"]
    }, {
		image: "img/product/p3.jpg",
		name: "Apple iPhone 6S (grey,16 GB)",
		price: "12,540.00",
		spec: ["Android v5.1.1 OS", "21 MP + 5 MP", "3000 mAh Battery", "Dual Nano Sim (4G+4G)"]
    }];

})

.controller('BuybackvalueCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService.changecontent("buy-back-value");
	$scope.menutitle = NavigationService.makeactive("Buy-Back-Value");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	//      $scope.oneAtATime = true;
	$scope.status = {
		isFirstOpen: true,
		isFirstDisabled: false
	};
	$scope.statuss = {
		isFirstOpen: true,
		isFirstDisabled: false
	};
	$scope.status2 = {
		isFirstOpen: true,
		isFirstDisabled: false
	};
	$scope.status3 = {
		isFirstOpen: true,
		isFirstDisabled: false
	};
})

.controller('headerctrl', function ($scope, TemplateService, $uibModal, NavigationService) {
	$scope.template = TemplateService;
	$scope.register = {};
	$scope.login = {};
	$scope.profile = {};
	$scope.showAlreadyRegistered = false;
	$scope.hideLogin = false;
	$scope.showInvalidLogin = false;

	NavigationService.getUserProfile(function (data) {
		console.log(data);
		if (data.email) {
			$scope.hideLogin = true;
			if (data.firstname && data.lastname)
				$scope.profile.name = data.firstname + " " + data.lastname;
			else {
				$scope.profile.name = data.name;
			}

		}
	})

	$scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
		$(window).scrollTop(0);
	});

	$scope.openLogin = function () {
		$uibModal.open({
			animation: true,
			templateUrl: 'views/modal/login.html',
			controller: 'headerctrl'
		})
	};

	$scope.registerUser = function () {
		NavigationService.registerUser($scope.register, function (data) {
			console.log(data);
			if (data.value == false) {
				$scope.showAlreadyRegistered = true;
			} else if (data.value == true) {
				window.location.reload();
			}
		});
	}

	$scope.loginUser = function () {
		NavigationService.loginUser($scope.login, function (data) {
			console.log(data);
			if (data.value == false) {
				$scope.showInvalidLogin = true;
			} else if (data.value == true) {
				window.location.reload();
			}
		});
	}

	$scope.logout = function () {
		NavigationService.logout(function (data) {
			console.log(data);
			if (data.value == true) {
				$scope.hideLogin = false;
			}
		})
	}

});
