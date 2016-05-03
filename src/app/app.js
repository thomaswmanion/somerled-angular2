require('es6-shim');
require('es6-promise');
require('../../node_modules/angular2/bundles/angular2-polyfills.js');
window.Outlayer = require('../../node_modules/masonry-layout/node_modules/outlayer/outlayer.js');
window.getSize = require('../../node_modules/masonry-layout/node_modules/get-size/get-size.js');
var fb = window.fb = {};
fb.cbs = [];
fb.getFeed = function(cb) {
	if (fb.initialized) {
		FB.api('somerledshetlandsheepdogs/feed', 'GET', { access_token: '1561362274164382|msWOl_DYDotMoNXNsxHBDHo6qGY', fields: 'created_time,message,picture,full_picture,attachments'}, cb);	
	}
	else {
		fb.cbs.push(cb);
	}
	
};

//Facebook SDK
window.fbAsyncInit = function() {
    FB.init({
        appId: '1561362274164382',
        xfbml: true,
        version: 'v2.5'
    });
    fb.initialized = true;
    var i;
    for (i = 0; i < fb.cbs.length; i++) {
    	var cb = fb.cbs[i];
    	fb.getFeed(cb);
    }
    fb.cbs = [];

};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return; }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));




require('./boot.ts');

if (module.hot) {
    module.hot.accept();
}
