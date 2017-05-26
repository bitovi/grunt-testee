var path = require('path');

function flatten(list) {
    return list.reduce(function (list, item) {
        if (Array.isArray(item)) {
            item = flatten(item);
        }
        return list.concat(item);
    }, []);
}

function isRemoteUrl(str) {
    return str.indexOf('http://') === 0 || str.indexOf('https://') === 0;
}

function getFiles(root, files, expand) {
    // NOTE: flattening is needed because src may be an array.
    var inputFiles = flatten(files
        .map(function (file) {
            if (file.orig && file.orig.src) {
                file = file.orig.src;
            }
            return file;
        }));

    /*
      If the root is a remote URL, we cannot expand.
      Return the original input files.
    */
    var isRootRemote = root && isRemoteUrl(root);
    if (isRootRemote) {
        return inputFiles;
    }

    /*
      Any remote URLs need to separated out and added back to
      the output files after expansion.
    */
    var remoteUrls = files.filter(isRemoteUrl);
    var expandedFiles = expand(files);
    return [].concat(expandedFiles).concat(remoteUrls);
}

function expandFiles(transform, root, files) {
    /*
      We need to expand the files provided by src using Grunt.
      If there is a provided root, the files need to be made
        absolute, transformed, and then made relative to root again.
    */
    if (root) {
        files = files.map(function (filepath) {
            return path.join(root, filepath);
        });
    }

    files = transform(files);

    if (root) {
        files = files.map(function (filepath) {
            return path.relative(root, filepath);
        });
    }

    return files;
}

function testeeFiles(root, files, expand) {
    return getFiles(root, files, function (files) {
        return expandFiles(expand, root, files);
    });
}

module.exports = {
    flatten,
    isRemoteUrl,
    getFiles,
    expandFiles,
    testeeFiles
};