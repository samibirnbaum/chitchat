(function(){

    function config($locationProvider, $stateProvider){
        $locationProvider   //configure how the applications deep linking paths are stored
            .html5Mode({    //html5 History API allows manipulation of URL
                enabled: true, //get rid of hash in url
                requireBase: false //hash not required
            });

        $stateProvider  //when I navigate to a certain url, override server call, and inject a view(state)
            .state("home",{
                url: "/",
                templateUrl: "/templates/home.html",
                controller: "HomeCtrl as home"
            });
    }


    angular
        .module("blocChat", ["ui.router", "firebase", "ui.bootstrap"]) //inject 2 modules we need for this app, ui.router and firebase DbaaS
        .config(config);


})();