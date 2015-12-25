angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

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

        // product data

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
        $scope.footer = [{
            image: "img/icon/f1.png",
            name: "ALL PRODUCTS INSURED"



    }, {
            image: "img/icon/f2.png",
            name: "Track Your Order"



    }, {
            image: "img/icon/f3.png",
            name: "PERSONALIZED MANAGER"


    }, {
            image: "img/icon/f4.png",
            name: "Easy Returns"


    }, {
            image: "img/icon/f5.png",
            name: "DELIVRY WITHIN 24 HOURS"


    }, {
            image: "img/icon/f6.png",
            name: "Online Cancellations"


    }];

        $scope.banners = [{
            image: "img/product/banner.jpg"



    }, {
            image: "img/product/banner2.jpg"



    }];
        $scope.banner = [{
            image: "img/product/big-banner.jpg"



    }];
    })
    .controller('LoginCtrl', function ($scope, TemplateService, NavigationService) {

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
        $scope.template = TemplateService.changecontent("Contact-us");
        $scope.menutitle = NavigationService.makeactive("Contact-us");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    }) 
    .controller('ProductCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("product");
        $scope.menutitle = NavigationService.makeactive("Product");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    
    
      $scope.status4 = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
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

.controller('headerctrl', function ($scope, TemplateService, $uibModal) {
    $scope.template = TemplateService;

    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });

    $scope.openLogin = function () {
        $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/login.html',
            controller: 'LoginCtrl'
        })
    };

});
