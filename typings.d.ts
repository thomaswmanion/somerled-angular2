declare module 'masonry-layout'{
	class Masonry{
		constructor(element:string, params:Object);

		on(event:string, callback:Function);
	}

	export = Masonry;
}