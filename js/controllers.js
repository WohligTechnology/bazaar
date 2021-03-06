var dataNextPre = {};

angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider', 'angular-loading-bar'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.swiper = {};
    $scope.next = function() {
        $scope.swiper.slideNext();
    };

    $scope.onReadySwiper = function(swiper) {
        console.log('onReadySwiper');
        swiper.on('slideChangeStart', function() {
            console.log('slideChangeStart');
        });
    };

    NavigationService.getSlider(function(data) {
        console.log(data);
        if (data.value != false)
            $scope.banners = data[0].image;
    })

    NavigationService.getBlocks(function(data) {
        console.log(data);
        if (data.value != false)
            $scope.blocks = data;
    })

    // product data
    // $scope.banners = [{
    //  image: "img/slider/1.jpg"
    //   }, {
    //  image: "img/slider/1.jpg"
    //  }, {
    //  image: "img/slider/1.jpg"
    //   }, {
    //  image: "img/slider/1.jpg"
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

.controller('LoginCtrl', function($scope, TemplateService, NavigationService) {

})

.controller('QuickCtrl', function($scope, TemplateService, NavigationService) {
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

.controller('AboutusCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("about-us");
    $scope.menutitle = NavigationService.makeactive("About-us");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('TermsPolicyCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("terms-policy");
    $scope.menutitle = NavigationService.makeactive("Terms-Policy");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('TermsConditionCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("terms-condition");
    $scope.menutitle = NavigationService.makeactive("Terms-Condition");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('ContactUsCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("contact-us");
    $scope.menutitle = NavigationService.makeactive("Contact-us");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('ProfileCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("profile");
    $scope.menutitle = NavigationService.makeactive("Profile");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('AccountCtrl', function($scope, TemplateService, NavigationService, $state) {

    console.log($state.current.name);
    $scope.tabs = [{
        "state": "profile",
        "img": "img/account/p1g.png"
    }, {
        "state": "orders",
        "img": "img/account/p2g.png"
    }, {
        "state": "history",
        "img": "img/account/p3g.png"
    }, {
        "state": "personalized-manager",
        "img": "img/account/p4g.png"
    }];

    _.each($scope.tabs, function(n) {
        if (n.state == "profile" && $state.current.name == "profile") {
            n.img = "img/account/p1r.png"
        } else if (n.state == "orders" && $state.current.name == "orders") {
            n.img = "img/account/p2r.png"
        } else if (n.state == "history" && $state.current.name == "history") {
            n.img = "img/account/p3r.png"
        } else if (n.state == "personalized-manager" && $state.current.name == "personalized-manager") {
            n.img = "img/account/p4r.png"
        }
    })

    $scope.changeContent = function(tab) {
        $state.go(tab.state);
    }

})

.controller('OrdersCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("orders");
    $scope.menutitle = NavigationService.makeactive("Orders");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    NavigationService.getMyOrders(function(data) {
        if (data.value != false)
            $scope.myOrders = data;
        console.log(data);
    })

})

.controller('FooterCtrl', function($scope, TemplateService, NavigationService) {
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

.controller('CartCtrl', function($scope, TemplateService, NavigationService, $state) {
    $scope.template = TemplateService.changecontent("cart");
    $scope.menutitle = NavigationService.makeactive("Cart");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.getCart = function() {
        NavigationService.getUserCart(function(cart) {
            console.log(cart);
            $scope.cartItems = cart;
            $scope.totalCartPrice = 0;
            _.each($scope.cartItems, function(n) {
                if (n.price) {
                    n.quantity = 1;
                    n.subTotal = parseInt(n.price);
                    $scope.totalCartPrice += parseInt(n.price);
                }
            })
        })
    }

    $scope.getCart();

    $scope.removeFromCart = function(id) {
        NavigationService.removeFromCart(id, function(data) {
            console.log(data);
            if (data.value != false) {
                dataNextPre.getUserCart();
                dataNextPre.messageBox("", "Removed from cart");
                $scope.getCart();
            }
        })
    }

    $scope.increaseQuantity = function(product) {
        product.quantity += 1;
        product.subTotal += parseInt(product.price);
        $scope.totalCartPrice += parseInt(product.price);
    }

    $scope.decreaseQuantity = function(product) {
        if (product.quantity > 1) {
            product.quantity -= 1;
            product.subTotal -= parseInt(product.price);
            $scope.totalCartPrice -= parseInt(product.price);
        }
    }

    $scope.goToCheckout = function() {
        var myCart = {};
        myCart.cartItems = $scope.cartItems;
        myCart.totalCartPrice = $scope.totalCartPrice;
        $.jStorage.set("myCart", myCart);
        $state.go("checkout");
    }

})

.controller('WishlistCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("wishlist");
    $scope.menutitle = NavigationService.makeactive("Wishlist");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('ProductDetailCtrl', function($scope, TemplateService, NavigationService, $stateParams) {
    $scope.template = TemplateService.changecontent("product-detail");
    $scope.menutitle = NavigationService.makeactive("Product-Detail");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.accordian = [];

    NavigationService.getOneProduct($stateParams.id, function(data) {
        console.log(data);
        $scope.productDetail = data;
        $scope.productDetail.mainImg = data.image[0];
        if ($scope.productDetail.features) {
            $scope.accordian.push({
                isFirstOpen: true,
                isFirstDisabled: false
            });
        }
    })

    $scope.changeImage = function(index) {
        $scope.productDetail.mainImg = $scope.productDetail.image[index];
    }

    $scope.addToCart = function() {
        dataNextPre.addToCart($stateParams.id);
    }


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

.controller('CheckoutCtrl', function($scope, TemplateService, NavigationService, $state) {
    $scope.template = TemplateService.changecontent("checkout");
    $scope.menutitle = NavigationService.makeactive("Checkout");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.allCountries = allCountries;
    $scope.sameChecked = false;
    $scope.showInvalidLogin = false;
    $scope.showAlreadyRegistered = false;
    $scope.invalidPassword = false;

    $scope.tabs = [{
        "name": "step1",
        "img": "img/account/s1g.png"
    }, {
        "name": "step2",
        "img": "img/account/s2g.png"
    }, {
        "name": "step3",
        "img": "img/account/s3g.png"
    }, {
        "name": "step4",
        "img": "img/account/s4g.png"
    }]

    $scope.tabchange = function(tab) {
        $scope.tab = tab.name;
        _.each($scope.tabs, function(n) {
            if (n.name == "step1" && tab.name == "step1") {
                n.img = "img/account/s1r.png";
            } else if (n.name == "step2" && tab.name == "step2") {
                n.img = "img/account/s2r.png";
            } else if (n.name == "step3" && tab.name == "step3") {
                n.img = "img/account/s3r.png";
            } else if (n.name == "step4" && tab.name == "step4") {
                n.img = "img/account/s4r.png";
            } else {
                n.img = n.img.split("r").join("g");
            }
        })
    }

    $scope.tabchange({
        "name": "step1",
        "img": "img/account/s1g.png"
    });

    NavigationService.getUserProfile(function(data) {
        if (data.id) {
            $scope.tab = 'step2';
            $scope.tabchange({
                "name": "step2",
                "img": "img/account/s2g.png"
            });
            $scope.userData = data;
            if (data.name) {
                var name = data.name.split(" ");
                if (name[0])
                    $scope.userData.firstname = name[0];
                if (name[1])
                    $scope.userData.lastname = name[1];
            }
        }
    })

    if ($.jStorage.get("myCart")) {
        $scope.cartItems = $.jStorage.get("myCart");
        $scope.cartItems.paymentType = "CASH ON DELIVERY";
    } else {
        $scope.cartItems = {};
    }

    $scope.placeOrder = function() {
        console.log("place order");
        // console.log($scope.userData);
        // console.log($scope.cartItems);
        if ($scope.sameChecked == false) {
            console.log("checked");
            $scope.userData.shipping = $scope.userData.billing;
        }
        var order = {};
        order.cart = $scope.cartItems.cartItems;
        order.paymentType = $scope.cartItems.paymentType;
        order.totalCartPrice = $scope.cartItems.totalCartPrice;
        order.name = $scope.userData.firstname + " " + $scope.userData.lastname;
        order.email = $scope.userData.email;
        order.mobile = $scope.userData.mobile;
        order.billing = $scope.userData.billing;
        order.shipping = $scope.userData.shipping;
        console.log(order);

        NavigationService.placeOrder(order, function(data) {
            console.log(data);
            if (data.value != true) {
                $.jStorage.flush();
                // dataNextPre.messageBox("Congratulations !!", "Your order has been placed");
                $state.go("thankyou", {
                    "id": data.id
                });
            }
        })
    }

    $scope.register = {};
    $scope.registerUser = function() {
        if ($scope.register.password === $scope.register.confirmpassword) {
            delete $scope.register.confirmpassword;
            delete $scope.register.check;
            $scope.register.accesslevel = "customer";
            NavigationService.registerUser($scope.register, function(data) {
                console.log(data);
                if (data.value == false) {
                    $scope.showAlreadyRegistered = true;
                    $scope.invalidPassword = false;
                } else if (data.value == true) {
                    window.location.reload();
                }
            });
        } else {
            $scope.invalidPassword = true;
            $scope.showAlreadyRegistered = false;
        }
    }

    $scope.login = {};
    $scope.loginUser = function() {
        NavigationService.loginUser($scope.login, function(data) {
            console.log(data);
            if (data.value == false) {
                $scope.showInvalidLogin = true;
            } else if (data.value == true) {
                window.location.reload();
            }
        });
    }

})

.controller('HistoryCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("history");
    $scope.menutitle = NavigationService.makeactive("History");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function() {
        $scope.dt = null;
    };
})

.controller('PersonalizedManagerCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("personalized-manager");
    $scope.menutitle = NavigationService.makeactive("Personalized-Manager");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('CompareProductCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("compare-product");
    $scope.menutitle = NavigationService.makeactive("Compare-product");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('ProductCtrl', function($scope, TemplateService, NavigationService, $uibModal, $stateParams) {
    $scope.template = TemplateService.changecontent("product");
    $scope.menutitle = NavigationService.makeactive("Product");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    NavigationService.findProduct($stateParams.categoryId, function(data) {
        console.log(data);
        if (data.value != false) {
            $scope.products = data;
            _.each($scope.products, function(n) {
                n.mainImg = n.image[0];
            });
        } else {
            $scope.products = [];
        }
    })

    $scope.openQuick = function(product) {
        $scope.quickViewProduct = product;
        $scope.quickViewProduct.mainImgQuick = product.image[0];
        console.log($scope.quickViewProduct);
        $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/quick.html',
            scope: $scope,
        })
    };

    $scope.addToCart = function(id) {
        dataNextPre.addToCart(id);
    }

    $scope.changeImage = function(index) {
        $scope.quickViewProduct.mainImgQuick = $scope.quickViewProduct.image[index];
    }

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

.controller('CameraCtrl', function($scope, TemplateService, NavigationService) {
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

.controller('InsuranceCtrl', function($scope, TemplateService, NavigationService, $uibModal) {
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

    // $scope.openCart = function() {
    //     $uibModal.open({
    //         animation: true,
    //         templateUrl: 'views/modal/addtocart.html',
    //     })
    // };

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

.controller('BuybackvalueCtrl', function($scope, TemplateService, NavigationService) {
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
    .controller('404notfoundCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("404notfound");
        $scope.menutitle = NavigationService.makeactive("404NotFound");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })

.controller('ThankyouCtrl', function($scope, TemplateService, NavigationService, $stateParams) {
    $scope.template = TemplateService.changecontent("thankyou");
    $scope.menutitle = NavigationService.makeactive("Thankyou");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    NavigationService.getOneOrder($stateParams.id, function(data, status) {
        $scope.order = data; //Add More Array
        console.log($scope.order);
    });

})

.controller('ErrorCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("error");
    $scope.menutitle = NavigationService.makeactive("Error");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})

.controller('headerctrl', function($scope, TemplateService, $uibModal, NavigationService, $timeout, $state) {
    $scope.template = TemplateService;
    $scope.register = {};
    $scope.login = {};
    $scope.profile = {};
    $scope.showAlreadyRegistered = false;
    $scope.hideLogin = false;
    $scope.showInvalidLogin = false;
    $scope.cartCount = 0;

    // NavigationService.getAllCategories(function(data) {
    //     console.log(data);
    //     $scope.categories = data;
    // })

    dataNextPre.getUserCart = function() {
        NavigationService.getUserCart(function(data) {
            console.log(data);
            if (data.value != false) {
                $scope.cartCount = data.length;
            }
        })
    }

    dataNextPre.getUserCart();

    dataNextPre.addToCart = function(productId) {
        NavigationService.addToCart(productId, function(data) {
            console.log(data);
            if (data.value == true) {
                dataNextPre.getUserCart();
                dataNextPre.messageBox("Congratulations !!", "Added to cart");
            } else {
                dataNextPre.messageBox("Thank You !!", "Already in cart");
            }
        })
    }

    dataNextPre.messageBox = function(heading, message) {
        $scope.message = {};
        $scope.message.heading = heading;
        $scope.message.content = message;
        var myModal = $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/addtocart.html',
            scope: $scope,
            controller: "headerctrl"
        })

        $timeout(function() {
            myModal.dismiss('cancel');
        }, 3000);
    }

    NavigationService.getUserProfile(function(data) {
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

    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });

    $scope.openLogin = function() {
        $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/login.html',
            controller: 'headerctrl'
        })
    };

    $scope.registerUser = function() {
        $scope.register.accesslevel = "customer";
        NavigationService.registerUser($scope.register, function(data) {
            console.log(data);
            if (data.value == false) {
                $scope.showAlreadyRegistered = true;
            } else if (data.value == true) {
                window.location.reload();
            }
        });
    }

    $scope.loginUser = function() {
        NavigationService.loginUser($scope.login, function(data) {
            console.log(data);
            if (data.value == false) {
                $scope.showInvalidLogin = true;
            } else if (data.value == true) {
                window.location.reload();
            }
        });
    }

    $scope.logout = function() {
        NavigationService.logout(function(data) {
            console.log(data);
            if (data.value == true) {
                $.jStorage.flush();
                $scope.hideLogin = false;
                $state.go("home");
            }
        })
    }

});
