require('es6-shim');
require('es6-promise');
require('../../node_modules/angular2/bundles/angular2-polyfills.js');
window.Outlayer = require('../../node_modules/masonry-layout/node_modules/outlayer/outlayer.js');
window.getSize = require('../../node_modules/masonry-layout/node_modules/get-size/get-size.js');
require('./boot.ts');

if (module.hot) {
	module.hot.accept();
}
