angular.module('azureADB2C')
    .value('settings', {
        // ADAL-B2C configuration
        adalB2C: {
            tenantName: 'Enter your tenant name',
            clientId: 'Enter your client id',
            policy: 'Enter your policy name'
        }
    });