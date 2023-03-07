# Photolok Installation Guide

## Prerequisites

1. An Auth0 account and tenant. [Sign up for free here](https://auth0.com/signup). 
2. Send an email to photolokadmin@netlok.com to set up a Photolok tenant
    * Include your Auth0 redirect URI as found in your Auth0 account
3. Receive your
    * Photolok Domain
    * Client ID
    * Client Secret

## Configure integration with Photolok

To configure the integration with Photolok, follow the steps below.

1. In the Settings tab, set
    * Authorization URL to `https://{photolok-domain}.photolok.net/auth`
    * Token URL to `https://api.photolok.net/oauth/token`
    * Scope can be anything, typically `profile email`
    * Client ID and Client Secret to the values provided to you by Photolok support

## Create and enable connection in Auth0

[Set up this social connection](https://auth0.com/docs/dashboard/guides/connections/set-up-connections-social) in Auth0. Make sure you have the generated **Client ID** and the **Client Secret**.

## Test connection

You're ready to [test your connection.](https://auth0.com/docs/get-started/dashboard/test-social-connections)


