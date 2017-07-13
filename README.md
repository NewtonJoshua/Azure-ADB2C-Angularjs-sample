Azure AD B2C - Angularjs sample (Web and Mobile) app
=====================

### Azure AD B2C

[Azure AD B2C](https://azure.microsoft.com/en-us/services/active-directory-b2c/) is a cloud identity management solution for your web and mobile applications. It is a highly available global service that scales to hundreds of millions of identities.

This sample demonstrates the use of AD B2C for securing an AngularJS based web and mobile app.

### Web app - Hello.js
Web app implementation uses [Hello.js](http://adodson.com/hello.js/) that performs identity management with Azure AD B2C . Hello.js is a client-side JavaScript SDK for authenticating with OAuth2 web services and querying REST APIs.

### Mobile app - ADAL plugin
Mobile app implementation uses [ADAL Cordova Plugin Patch For B2C](https://github.com/jospete/azure-activedirectory-library-for-cordova). This is a chopped version of Active Directory Authentication Library (ADAL) plugin for Apache Cordova apps, [cordova-plugin-ms-adal](https://github.com/AzureAD/azure-activedirectory-library-for-cordova) that works with Azure AD B2C. The original cordova-plugin-ms-adal plugin provides easy to use authentication functionality for your Apache Cordova apps by taking advantage of Active Directory.

### Decode JWT
jwtHelper of [angular-jwt](https://github.com/auth0/angular-jwt) will take care of helping you decode the token (JWT) and check its expiration date. JSON Web Tokens are an open, industry standard [RFC 7519](https://tools.ietf.org/html/rfc7519) method for representing claims securely between two parties.

## Project set up:
1. Clone or download this repository 
`git clone https://github.com/NewtonJoshua/Azure-ADB2C-Angularjs-sample.git`
2. Install dependencies
`npm install`
`bower install`

## AD set up:
ADAL-B2C configuration

1. [Create an Azure AD B2C Directory](https://docs.microsoft.com/en-us/azure/active-directory-b2c/active-directory-b2c-get-started)
2. [Register a web application](https://docs.microsoft.com/en-us/azure/active-directory-b2c/active-directory-b2c-app-registration#register-a-web-application)
3. [Register a mobile/native application](https://docs.microsoft.com/en-us/azure/active-directory-b2c/active-directory-b2c-app-registration#register-a-mobilenative-application)
4. [Create a sign-up or sign-in policy](https://docs.microsoft.com/en-us/azure/active-directory-b2c/active-directory-b2c-reference-policies#create-a-sign-up-or-sign-in-policy)
5. [Create a password reset policy](https://docs.microsoft.com/en-us/azure/active-directory-b2c/active-directory-b2c-reference-policies#create-a-password-reset-policy)

## Run this sample:
### Web App:
From your shell or command line run

`ionic serve`

### Mobile App:

`cordova platform add android`

`cordova platform add ios`

`ionic cordova resources`

`cordova build android`

`cordova build ios`

## Implementation:

If you have to build an application based on this sample remember to install the required dependencies.

### Web App
Dependencies:

`bower install ng-hello --save`

`bower install angular-jwt --save`

refer [hello.service.js](https://github.com/NewtonJoshua/Azure-ADB2C-Angularjs-sample/blob/master/www/js/hello.service.js)

### Mobile App
Dependencies:

`cordova plugin add https://github.com/jospete/azure-activedirectory-library-for-cordova --save`

`bower install angular-jwt --save`

refer [adal.service.js](https://github.com/NewtonJoshua/Azure-ADB2C-Angularjs-sample/blob/master/www/js/adal.service.js)

## Customize the Azure AD B2C user interface
https://docs.microsoft.com/en-us/azure/active-directory-b2c/active-directory-b2c-reference-ui-customization


## Related documents:

1. Overview:
https://docs.microsoft.com/en-us/azure/active-directory-b2c/active-directory-b2c-overview

2. Azure AD - Help secure AngularJS single-page apps by using Azure AD
https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-devquickstarts-angular

3. Azure AD B2C: Single-page app sign-in by using OAuth 2.0 implicit flow
https://docs.microsoft.com/en-us/azure/active-directory-b2c/active-directory-b2c-reference-spa

