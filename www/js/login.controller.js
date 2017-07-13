angular
    .module('azureADB2C')
    .controller('LoginController', function($scope, $state, $ionicPopup, jwtHelper, AdalService, HelloService, $ionicPlatform) {

        // Initialize
        var isMobileDevice = ionic.Platform.isAndroid() || ionic.Platform.isIOS();
        $ionicPlatform.ready(function() {
            if (isMobileDevice) {
                $scope.login = adalLogin;
                $scope.logout = adalLogout;
            }
        });
        (function initialize() {
            if (!isMobileDevice) {
                helloInitialize();
                $scope.login = HelloService.login;
                $scope.logout = helloLogout;
            }
        })();

        // Web Login and Logout using hello
        function helloInitialize() {
            HelloService.initialize().then(function(authResponse) {
                displayUserDetails(getUserData(authResponse))
            });
        }

        function helloLogout() {
            $ionicPopup.alert({
                title: 'Logout',
                template: 'You have logged out of ' + $scope.user.email
            }).then(function() {
                $scope.user = {};
                HelloService.logout();
            });
        }

        // Mobile Login and Logout using ADAL plugin
        function adalLogin() {
            AdalService.login().then(function(authResponse) {
                displayUserDetails(getUserData(authResponse));
            }, function(error) {
                $ionicPopup.alert({
                    title: 'Login Error',
                    template: error
                });
            });
        }

        function adalLogout() {
            AdalService.logout().then(function() {
                $ionicPopup.alert({
                    title: 'Logout',
                    template: 'You have logged out of ' + $scope.user.email
                }).then(function() {
                    $scope.user = {};
                });
            });
        }

        // Decode decode the token and diaplay the user details
        function getUserData(response) {
            var user = {};
            user.token = response.access_token || response.token;
            var data = jwtHelper.decodeToken(user.token);
            user.expires_in = new Date(response.expires * 1000) || response.expiresOn;
            user.name = data.name;
            user.email = data.emails ? data.emails[0] : '';
            user.id = data.oid;
            return user;
        };

        function displayUserDetails(user) {
            $scope.user = user;
            $ionicPopup.alert({
                title: user.name,
                template: '<b>Email:</b> ' + user.email + '<br> <b>Id:</b> <code>' + user.id + '</code>'
            });
        }

    });