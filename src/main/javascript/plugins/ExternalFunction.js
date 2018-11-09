const fetch = require("node-fetch");

//Load externals from js-core module
module.exports = (host) => {
    return async function (context, request, callback) {
        try {
            const fetchResult = await
                fetch(host + "/modules/js-core/javascript/jsDependencyNames.json");
            const js = await
                fetchResult.json();
            const keys = Object.getOwnPropertyNames(js);
            const found = keys.find(key => {
                return key === request;
            });
            if (found) {
                return callback(null, 'commonjs ' + request);
            }

        }
        catch (e) {
            console.log("Error");
        }
        callback();
    }
};