# VueJS DX module

This is an experimental module and is not intended for production. Use at your own risk. No support will be provided at this point.

## Description

This is a simple extension module designed to work with https://github.com/Jahia/js-core

## How it works

* `ExternalFunction` is used to connect to js-core module, retrieve dependencies and externalize them in `webpack.config.js`. Note that 
`http://localhost:8080` is used by default, so modify as you see fit.

* `UpdateExportedBundlePlugin` replaces require calls in generated js bundle with call compatible with js-core (see js-core for details).

## How to run

* Simply build and deploy module to Jahia 

* You can inspect `bundleExport.js` to verify that react, lodash and vue are not being bundled (see end of file)
