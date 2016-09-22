declare module 'masonry-layout'{
	class Masonry{
		constructor(element:string, params:Object);

		on(event:string, callback:Function);
	}

	export = Masonry;
}

declare var FB: any;
declare var fb: any;


interface Window {
	Outlayer: any;
	getSize: any;
	fbAsyncInit: any;
	fb: any;
	FB: any;
}

interface module {
	hot: any;
}