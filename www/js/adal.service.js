angular
    .module('azureADB2C')
    .service('AdalService', function($q, $http, settings) {

        var extraQueryParams = 'nux=1';
        var userId = null;
        var redirectUri = 'https://login.microsoftonline.com/tfp/oauth2/nativeclient';
        var authority = 'https://login.microsoftonline.com/' + settings.adalB2C.tenantName;
        var resourceUri = 'https://graph.windows.net';

        this.login = function() {
            var deferredLoginResponse = $q.defer();
            var authContext = new Microsoft.ADAL.AuthenticationContext(authority);
            // Attempt to authorize user silently
            authContext.acquireTokenSilentAsync(resourceUri, settings.adalB2C.clientId, userId, redirectUri, settings.adalB2C.policy)
                .then(function(authResponse) {
                    deferredLoginResponse.resolve(authResponse);
                }, function() {
                    // We require user credentials so triggers authentication dialog
                    authContext.acquireTokenAsync(resourceUri, settings.adalB2C.clientId, redirectUri, userId, extraQueryParams, settings.adalB2C.policy)
                        .then(function(authResponse) {
                            deferredLoginResponse.resolve(authResponse);
                        }, function(err) {
                            deferredLoginResponse.reject(err);
                        });
                });
            return deferredLoginResponse.promise;
        };

        this.logout = function() {
            // Step1: clear cache
            var authContext = new Microsoft.ADAL.AuthenticationContext(authority);
            authContext.tokenCache.clear();

            // Step2: make XmlHttpRequest pointing to the sign out url
            return $http.post(authority + '/oauth2/logout?post_logout_redirect_uri=' + redirectUri);
        };

    });