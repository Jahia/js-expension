var ReplaceSource = require('webpack-sources').ReplaceSource;

class UpdateExportedBundlePlugin {
    // Define `apply` as its prototype method which is supplied with compiler as its argument
    apply(compiler) {
        // Specify the event hook to attach to
        compiler.hooks.compilation.tap(
            'UpdateExportedBundlePlugin',
            (compilation) => {
                compilation.hooks
                    .optimizeChunkAssets
                    .tapAsync('UpdateExportedBundleInnerPlugin', (chunks, callback) => {
                        chunks.forEach(chunk => {
                            chunk.files.forEach(file => {
                                var source = compilation.assets[file].source();
                                //replace require imports
                                var allRequireIndices = this.allRequireIndices(source);
                                var replacedSource = new ReplaceSource(compilation.assets[file]);

                                for (var i = 0; i < allRequireIndices.length; i++) {
                                    var start = allRequireIndices[i];
                                    var end = start + "require(".length;
                                    var replaceBy = "window.dxJsAsset(\"";
                                    replacedSource.replace(start, end, replaceBy);
                                }

                                compilation.assets[file] = replacedSource;
                            });
                        });

                        callback();
                    });
            }
        );
    }

    allRequireIndices(source) {
        //Indices of all "require(" occurrences
        var i = -1;
        var indices = [];
        while ((i = source.indexOf("require(", i + 1)) !== -1) {
            indices.push(i);
        }
        return indices;
    }
}

module.exports = UpdateExportedBundlePlugin;