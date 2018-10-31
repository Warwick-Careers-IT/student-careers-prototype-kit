
const datetime = require('date-and-time');
let now = new Date();
var currentdate = datetime.format(now, 'YYYY/MM/DD hh:mm A');

module.exports = {
  paths: {
    public_dir: 'dist',
    assets_dir: 'static',
    views_dir: 'views',
    vendor_dir: 'vendor',
    resources_dir: 'resources',
  },
  njk: {
    // Add custom variables to be inserted into the HTML templates
    templateVars: {
      version : '1.2',
      publishdate : currentdate
    },
  },
  sass: {
    // Determines the style of the final CSS files
    // Values: ['nested', 'expanded', 'compact', 'compressed']
    outputStyle: 'nested',
  },
  js: {
    // Determines if the final JS files would be compressed
    // Values: [true, false]
    doCompress: false,
    // Determines if the .js source file would be included after compression
    // doCompress must be true
    // Values: [true, false]
    doKeepSource: false,
  },
};
