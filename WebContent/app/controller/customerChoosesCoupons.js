

customer.controller("customerChoosesCouponCtrl", ['$rootScope', '$scope', '$state', '$location', 'Flash',
	function ($rootScope, $scope, $state, $location, Flash) {
//    var vm = this;


    $scope.portfolioData = [
        {
            image: "camping",
            title: "Camping"
        },
        {
            image: "clothes",
            title: "Clothes"
        },
        {
            image: "electronics",
            title: "Electronics"
        },
        {
            image: "food",
            title: "Food"
        },
        {
            image: "health",
            title: "Health"
        },
        {
            image: "restaurants",
            title: "Restaurants"
        },
        {
            image: "sport",
            title: "Sport"
        },
        {
            image: "travelling",
            title: "Travelling"
        }
    ];


    console.log("coming to Portfolio controller");


}]);
