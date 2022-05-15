const fs = require('fs');
const util = require('util');
const stat = util.promisify(fs.stat);

module.exports = function(ctx) {
    // Make sure android platform is part of build
    if (!ctx.opts.platforms.includes('android')) return;

    const platformRoot = path.join(ctx.opts.projectRoot, 'platforms/android');
    const apkFileLocation = path.join(platformRoot, 'build/outputs/apk/android-debug.apk');

    return stat(apkFileLocation).then(stats => {
      console.log(`Size of ${apkFileLocation} is ${stats.size} bytes`);
    });
};
